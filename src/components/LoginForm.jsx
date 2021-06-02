import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault(); // so that browser doesn't refresh
        // username and password => chatengin -> give messages
        // error -> try with new username...
        const authObject = {'Project-ID' : "1e1bc485-333d-4fce-bcce-31819a8b15f6", 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats',{headers: authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();            
            // works out -> logged in
        } catch (error) {
            setError('Oops, Incorrect credentials...')
            // error -> try with new username...
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center">
                    <button type="submit" className="button">
                        <span>
                            Start Chatting
                        </span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;