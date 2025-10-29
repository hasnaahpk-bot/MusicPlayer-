import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props)=> {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();


    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [volume, setVolume] = useState(0.5); // 🎚️ Default 50% volume
    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0      
        }
    })

     const play =() => {
        audioRef.current.play();
        setPlayStatus(true);
     }

     const pause = () =>{
        audioRef.current.pause();
        setPlayStatus(false);
     }

     // 🎧 Volume control function
  const handleVolumeChange = (value) => {
    const newVolume = Math.min(Math.max(value, 0), 1); // keep between 0–1
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

     const playWithId = async (id)=> {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
     }

     const previous = async ()=>{
        if (track.id>0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
     }


     const next = async ()=>{
        if (track.id<songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
     }


     const seekSong = async (e)=> {
          audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
     }

     useEffect(()=>{
      setTimeout(() => {

        audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration*100))+"%";

            setTime({
               currentTime:{
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60)
        },
        totalTime:{
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60)     
        } 
            })
        }
      })
     },[audioRef])

   const contextValue = {
         audioRef,
         seekBar,
         seekBg,
         track,setTrack,
         playStatus,setPlayStatus,
         time,setTime,
         play,pause,
         playWithId,
         previous,next,
         seekSong,
         volume,
         handleVolumeChange
   }

   return(
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
   )


}

export default PlayerContextProvider;