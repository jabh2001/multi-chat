import { useEffect, useRef, useState } from "react"


const useCamera = ({ target, onShot }: { target?: HTMLVideoElement, onShot?:(img:HTMLImageElement) => void }) => {
    const [stream, setStream] = useState<MediaStream>()
    const [base64Data, setBase64Data] = useState("")
    const video = useRef<HTMLVideoElement>(document.createElement("video")).current
    const canvas = useRef<HTMLCanvasElement>(document.createElement("canvas")).current
  
    useEffect(() => {
      if (stream) {
        video.srcObject = stream
        video.play()
        if (target) {
          target.srcObject = stream
          target.play()
        }
      } else {
        video.pause()
        if (target) {
          target.pause()
        }
      }
    }, [stream])
    const start = () => {
      navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1920 }, height: { ideal: 1080 } } }).then(setStream).catch((err) => console.error(err))
    }
    const stop = () => {
      stream?.getVideoTracks().forEach(track => track.stop())
      setStream(undefined)
    }
    const shot = () => {
      var context = canvas.getContext("2d");
      const settings = stream?.getVideoTracks()[0]?.getSettings()
      context?.drawImage(video!, 0, 0, settings?.width!, settings?.height!);
      const base64Data = canvas.toDataURL("image/png")
      setBase64Data(base64Data)
      if(onShot){
        const img = new Image()
        img.src = base64Data
        onShot(img)
      }
    }
  
    return {
      stream,
      base64Data,
      start,
      stop,
      shot,
    }
  }
export default useCamera