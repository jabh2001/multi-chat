import { useState } from "react"
import Snackbar from "../../components/Snackbar"

function IndexPage() {
  const [open, setOpen ] = useState(false)
  const [open1, setOpen1 ] = useState(false)
  const [open2, setOpen2 ] = useState(false)
  const [open3, setOpen3 ] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpen(true)}>hola</button>
        <button onClick={()=> setOpen1(true)}>hola</button>
        <button onClick={()=> setOpen2(true)}>hola</button>
        <button onClick={()=> setOpen3(true)}>hola</button>
        <Snackbar color="secondary" open={open} handleClose={()=>setOpen(false)} >
          Informacion que quiero poner dentro del snackbar
        </Snackbar>
        <Snackbar color="error" open={open1} handleClose={()=>setOpen1(false)} >
          Informacion que quiero poner dentro del snackbar
        </Snackbar>
        <Snackbar color="warning" open={open2} handleClose={()=>setOpen2(false)} >
          Informacion que quiero poner dentro del snackbar
        </Snackbar>
        <Snackbar color="success" open={open3} handleClose={()=>setOpen3(false)} >
          Informacion que quiero poner dentro del snackbar
        </Snackbar>
    </div>
  )
}

export default IndexPage