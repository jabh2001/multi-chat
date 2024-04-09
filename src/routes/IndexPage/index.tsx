import { useRef } from "react"
import AudioPlayer from "../../components/AudioPlayer"
import "./index.css"


function IndexPage() {
  const audioRef = useRef(new Audio("/src/assets/Kleyberth.opus"))
  
  const onClick = () => {

    audioRef.current.currentTime = 0
    audioRef.current.play()
  }
  return (
    <div className="img-cont">
    <button onClick={()=>audioRef.current.play()}>play</button>
      <button onClick={()=>audioRef.current.pause()}>pause</button>
      <button onClick={onClick}>reset</button>
      <div className="span"></div>
      <AudioPlayer src={audioRef.current} volumeControl={false} />
    </div>
  )
}

export default IndexPage