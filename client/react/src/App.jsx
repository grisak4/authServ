import React, { useState } from 'react';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(prevState => !prevState);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="window">
            {isLogin ? (
                <div className="window_login active">
                    <div className="window_login_headr">
                        <h1>Login Form</h1>
                        <button onClick={toggleForm}>Sign up</button>
                    </div>
                    <div className="window_login_form">
                        <form id="submitLogin" onSubmit={handleLoginSubmit}>
                            <input type="text" className="input" name="username" placeholder="Name" required />
                            <input type="password" className="input" name="password" placeholder="Password" required />
                            <button type="submit" className="input_button">Login</button>
                        </form>
                        <a href="#" className="input_a">Forgot password?</a>
                    </div>
                </div>
            ) : (
                <div className="window_signup">
                    <div className="window_signup_headr">
                        <h1>Sign up</h1>
                        <button onClick={toggleForm}>Login</button>
                    </div>
                    <div className="window_signup_form">
                        <form id="submitSignup" onSubmit={handleSignupSubmit}>
                            <input type="text" className="input" name="name" placeholder="Name" required />
                            <input type="email" className="input" name="email" placeholder="Email Address" required />
                            <input type="password" className="input" name="password" placeholder="Password" required />
                            <button type="submit" className="input_button">Sign up</button>
                        </form>
                        <a href="#" className="input_a">Forgot password?</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthForm;