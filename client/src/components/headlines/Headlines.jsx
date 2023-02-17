import React, { useEffect, useState } from 'react';
import { Paper, Container, Typography } from "@material-ui/core"
import axios from 'axios';
import useStyles from "./styles"
import MoreIcon from "@material-ui/icons/Forward"
import { Link, redirect } from 'react-router-dom';
const Headlines = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes=useStyles();
    // const dispatch=useDispatch();

    // const {news} = useSelector()
    useEffect(() => {
        setIsLoading(true);
        const getNews = async () => {
            try {
                const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0a304de2d9c0466c90a74d4c147d98b4');
                // const {page}=await function(()=>{console.log()})
                setIsLoading(false);
                setNews(data.articles);
                console.log(news);
            } catch (error) {
                console.log(error);
            }
        }

        getNews();
    }, [])
    return <>
        {/* <Container> */}
            {/* <Typography variant="h4">Headlines</Typography> */}
            {isLoading ? "Loading..." : (
                <Paper className={classes.headlines}>

                    {news.map((data,index)=><a className={classes.headline} key={index} href={data.url}>{data.title}...</a>)}

                </Paper>
            )}
        {/* </Container> */}
    </>
}

export default Headlines

// https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0a304de2d9c0466c90a74d4c147d98b4