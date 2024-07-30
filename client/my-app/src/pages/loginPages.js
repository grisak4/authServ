const LoginPages = () => {
    return(
        <div>
            <div className="window_login active">
                <div className="window_login_headr">
                    <h1>Login Form</h1>
                </div>
                <div className="window_login_form">
                    <form id="submitLogin">
                        <input type="text" className="input" name="username" placeholder="Name" required />
                        <input type="password" className="input" name="password" placeholder="Password" required />
                        <button type="submit" className="input_button">Login</button>
                    </form>
                    <a href="#" className="input_a">Forgot password?</a>
                    <button to = "/register">Sign up</button>
                </div>
            </div>
        </div>
    )
} 

export default LoginPages 