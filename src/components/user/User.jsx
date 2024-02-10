import { useParams } from "react-router-dom"

function User() {
    const { userid } = useParams();
    return (
        <div>
            <h1 className="text-center text-amber-400 text-4xl my-10">User : {userid}</h1>
        </div>
    )
}

export default User
