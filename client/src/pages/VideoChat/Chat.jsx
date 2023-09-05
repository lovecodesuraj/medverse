import { TextField, Stack, Typography, Grid, IconButton, Paper, Button } from "@mui/material"
import AssignmentIcon from "@mui/icons-material/Assignment"
import PhoneIcon from "@mui/icons-material/Phone"
import React, { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useParams } from "react-router-dom"
import Peer from "simple-peer"
import "./styles.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchPhoneBook, getUsers } from "../../actions/users"

const contactBook = [{ name: "suraj", _id: '12017021' }, { name: "jayant", _id: '12017061' }, { name: "kapil", _id: '12017118' }, { name: "jiya", _id: '12017070' }]

function Chat({ socket }) {
	const { users } = useSelector(state => state.users);

	const dispatch = useDispatch()
	const { _id } = useParams();
	const { name: myName } = JSON.parse(localStorage.getItem('profile'))
	const [me, setMe] = useState()
	const [myStream, setMyStream] = useState()
	const [receivingCall, setReceivingCall] = useState(true)
	const [caller, setCaller] = useState("")
	const [callerSignal, setCallerSignal] = useState()
	const [callAccepted, setCallAccepted] = useState(false)
	const [idToCall, setIdToCall] = useState("")
	const [callEnded, setCallEnded] = useState(false)
	const [name, setName] = useState(myName)

	const [myVideo, setMyVideo] = useState()
	const [userVideo, setUserVideo] = useState()

	const connectionRef = useRef()
	const showMe = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
		setMyStream(stream);
	}

	useEffect(() => {
		showMe();
		socket.emit('joinVideoCallRoom', _id)
		socket.on("me", (id) => {
			setMe(id)
		})
		dispatch(getUsers())
		dispatch(fetchPhoneBook({ _id }))

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [socket, _id])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: myStream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall = () => {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: myStream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

	return (<>
		<Grid container rowSpacing={0} className="video_chat">
			<Grid item md={12} sm={12} className="video_chat_header" ></Grid>
			<Grid container className="video_chat_window">
				<Grid item md={0.5} sx={{ backgroundColor: "grey" }} className="video_chat_call_status">

				</Grid>
				<Grid container md={9} className="videos">
					<Grid item sm={12} md={6} className="video_my video">
						{myStream &&
							// <video src={stream} autoPlay style={{ width: "100%", height: "100%" }} muted playsInline />
							<ReactPlayer playing muted height="100%" width="100%" url={myStream} />
						}
					</Grid>
					<Grid item sm={12} md={6} className="video_other_user video">
						{callAccepted && !callEnded ?
							<ReactPlayer playing muted height="100%" width="100%" url={myStream} />
							:
							null}
						{
							receivingCall && <Paper
								sx={{
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								{caller}
								<Typography variant="h4" sx={{ color: "green" }}>
									{name} is calling...
								</Typography>
								<Typography sx={{ color: "green" }}>
									<IconButton sx={{ color: "blue" }}><PhoneIcon /></IconButton>
								</Typography>
								{/* <Button variant="contained" color="primary" onClick={answerCall}>
									Answer
								</Button> */}
							</Paper>
						}
					</Grid>
				</Grid>
				<Grid item md={2} sm={12} className="contact_book">
					<Stack className="video_chat_contacts" sx={{ height: "100%" }}>
						<Paper sx={{ height:"100%", borderRadius: 0,overflow:"auto" }} elevation={1} >
							<Typography color="primary" variant="h5" sx={{ textAlign: "center" }}  >Contacts</Typography>
							{users.map(user => <Paper elevation={0} key={user?.profile?._id} sx={{ borderRadius: 0 }} className="video_chat_contact">
								<Typography sx={{ color: "rgb(93,108,116)" }}>{user?.profile?.name}</Typography>
								<IconButton color="primary" aria-label="call" onClick={() => { setIdToCall(user?.profile?._id); callUser(idToCall) }}>							<PhoneIcon />
								</IconButton>
							</Paper>)}
						</Paper>
						{/* {contactBook.map(contact => <Paper key={contact._id} className="video_chat_contact">
							<Typography sx={{ color: "rgb(93,108,116)" }}>{contact.name}</Typography>
							<IconButton color="primary" aria-label="call" onClick={() => {setIdToCall(contact._id);callUser(idToCall)}}>							<PhoneIcon  />
						</IconButton>
						</Paper>)} */}
					</Stack>
				</Grid>
			</Grid>
		</Grid>
	</>

	)
}

export default Chat