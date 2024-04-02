import useAuth from "../../hooks/useAuth"
import "./index.css"


function IndexPage() {
  const user = useAuth()
  return (
    <div className="img-cont">
      <pre>
          {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  )
}

export default IndexPage