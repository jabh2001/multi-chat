import { useForm } from "react-hook-form"
import "./index.css"
import { useRef } from "react"
function IndexPage() {
  const { handleSubmit, register } = useForm<{ name:string, lastName:string}>()
  const ref = useRef<HTMLFormElement>(null)
  
  return (
    <div className="img-cont">
      <form ref={ref} onSubmit={handleSubmit((data) => {
        console.log({data})
      })}>
        <input type="text" {...register("name")} />
        <input type="text" {...register("name")} />
      </form>
      <button onClick={() => ref.current?.submit()}>Submit</button>
    </div>
  )
}

export default IndexPage