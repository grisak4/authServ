const RegisterPages = () => {
    return(
        <div>
            <div className="window_signup">
                    <div className="window_signup_headr">
                        <h1>Sign up</h1>
                    </div>
                <div className="window_signup_form">
                    <form id="submitSignup">
                        <input type="text" className="input" name="name" placeholder="Name" required />
                        <input type="email" className="input" name="email" placeholder="Email Address" required />
                    <input type="password" className="input" name="password" placeholder="Password" required />
                        <button type="submit" className="input_button">Sign up</button>
                    </form>
                    <a href="#" className="input_a">Forgot password?</a>
                    <button to = "/login">Login</button>
                </div>
            </div>
        </div>
    )
} 

export default RegisterPages 