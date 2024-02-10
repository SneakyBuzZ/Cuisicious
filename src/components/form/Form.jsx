
function Login() {
    return (
        <>
            <div className="logincontainer">
                <div className="loginform">
                    <h3 className="text-amber-500">Order Now!</h3>
                    <form action="post">
                        <input className="formitem bg-stone-950" type="text" placeholder="User Id" />
                        <input className="formitem bg-stone-950" type="text" placeholder="Address" />
                        <input className="formitem bg-stone-950" type="text" placeholder="Phone number" />
                        <button className="formsubmit bg-amber-500 text-stone-900" type="submit" value="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
