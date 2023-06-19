import React, { useState} from 'react';
import { login} from "../services/UserService";
import "../css/LoginView.css";

const LoginView = ({ onLogin }) => {
    const [userid, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(userid, password);

        if (res.data!=null) {
            const token = res.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('userid', userid);
            onLogin(userid);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-card">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="UserID"
                    value={userid}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginView;
