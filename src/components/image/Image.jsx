
import { useLoaderData } from "react-router-dom"

export const imageFromApi = async () => {
    const response = await fetch(' https://foodish-api.com/api/')
    return response.json()
}



function Image() {
    const data = useLoaderData();
    return (
        <div className="flex flex-row justify-center items-center py-44 imageApi">
            <img className="h-72 my-auto" src={data.image} alt="" />
        </div>
    )
}

export default Image
