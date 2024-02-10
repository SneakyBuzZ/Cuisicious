import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="navbar 
                flex flex-row 
                items-center
                h-20">

                <div className="logoImage 
                    w-40
                    flex flex-row
                    justify-end">
                    <Link to="/home">
                        <img className="h-16" src="/public/logo.png" alt="" />
                    </Link>

                </div>

                <ul className="flex flex-row 
                   w-2/4
                   px-4
                   text-gray-400
                   text-xl">

                    <li id="li1" className="mx-10">
                        <NavLink to="/home" className={({ isActive }) => `${isActive ? "text-amber-500" : "text-gray-400"}`}>Home</NavLink>
                    </li>
                    <li id="li2" className="mx-8">
                        <NavLink to="/menu" className={({ isActive }) => `${isActive ? "text-amber-500" : "text-gray-400"}`}>Menu</NavLink>
                    </li >
                    <li id="li3" className="mx-8">

                        <NavLink to="/image" className={({ isActive }) => `${isActive ? "text-amber-400" : "text-gray-400"}`}>Image</NavLink>
                    </li>

                </ul >

                <div className="account w-2/5
                    h-full
                    flex flex-row
                    items-center
                    justify-end
                    px-24
                    text-sm">

                    <button className="btn1 p-2 mx-1 rounded-md w-24 text-gray-400">Log-in</button>
                    <NavLink to="/form">
                        <button className="btn2 p-2 bg-amber-500 text-stone-950 rounded-md w-24">Sign-up</button>
                    </NavLink>

                </div>
            </div >
        </>
    )
}

export default Header
