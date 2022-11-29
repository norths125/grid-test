import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';
import ReactPlayer from 'react-player/youtube'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const img1='https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=';
const img2="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ;
const img3='https://youtu.be/K41shDRCaos';
const img4='https://media.giphy.com/media/YWUpVw86AtIbe/giphy.gif';






export default function BasicGrid() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <Box >
      <Grid container spacing={0}  >
        <Grid item xs={6}>
          <Item><img className='gridimg' src={img1}></img>Image</Item>
        </Grid>
        <Grid item xs={6}>
        <Item ><video
          className='gridmp4'
          playsInline
          loop
          controls
          muted
          alt="All the devices"
          src={img2}
          ref={videoEl}
          />
          videoMP4</Item>
        </Grid>
        <Grid item xs={6}>
        <Item><ReactPlayer className='gridyoutube' url={img3}
        playing 
        muted
        loop
        ></ReactPlayer>URL Youtube</Item>
        </Grid>
        <Grid item xs={6}>
        <Item><img className='gridimg'  src={img4}></img>GIF</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
