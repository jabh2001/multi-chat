import { useForm } from "react-hook-form"
import "./index.css"
import Textarea from "../../components/form/inputs/Textarea"

function IndexPage() {
  const { control } = useForm()
  return (
    <div className="img-cont">
      <Textarea
          label="note"
          name="note"
          control={control}
      />
    </div>
  )
}

export default IndexPage