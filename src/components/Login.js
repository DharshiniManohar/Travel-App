
// import React from 'react';
// import '../styles/Login.css';
// import img from '../assets/logpic.png';

// function Login() {
//     return (
//         <div className="login-container">
//             <div className="login-form">
//                 <h2>Login</h2>
//                 <p>Doesn't have an account yet? <a href="#">Sign Up</a></p>
//                 <form>
//                     <div className="input-group">
//                         <label>Email Address</label>
//                         <input type="email" placeholder="you@example.com" />
//                     </div>
//                     <div className="input-group">
//                         <label>Password</label>
//                         <input type="password" placeholder="Enter 6 characters or more" />
//                         <a href="#" className="forgot-password">Forgot Password?</a>
//                     </div>
//                     <div className="input-group remember-me">
                        
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         or login with</p>
//                     <div className="social-login">
//                         <button className="google-login">Google</button>
//                         <button className="facebook-login">Facebook</button>
//                     </div>
//                 </form>
//             </div>
//             <div className="login-illustration">
//             <img src={img} alt="Login Illustration" />
//             </div>
//         </div>
//     );
// }

// export default Login;
































// import React, { useState } from 'react';
// import '../styles/Login.css';
// import img from '../assets/logpic.png';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });
//             if (response.ok) {
//                 console.log('Login successful');
//             } else {
//                 console.log('Login failed');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-form">
//                 <h2>Login</h2>
//                 <p>Doesn't have an account yet? <a href="#">Sign Up</a></p>
//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <label>Email Address</label>
//                         <input 
//                             type="email" 
//                             placeholder="you@example.com" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Password</label>
//                         <input 
//                             type="password" 
//                             placeholder="Enter 6 characters or more" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <a href="#" className="forgot-password">Forgot Password?</a>
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                     <p>or login with</p>
//                     <div className="social-login">
//                         <button className="google-login">Google</button>
//                         <button className="facebook-login">Facebook</button>
//                     </div>
//                 </form>
//             </div>
//             <div className="login-illustration">
//                 <img src={img} alt="Login Illustration" />
//             </div>
//         </div>
//     );
// }

// export default Login;




import React, { useState } from 'react';
import '../styles/Login.css';
import img from '../assets/logpic.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://travelagency-lg24.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                console.log('Login successful');
                // Redirect to Home page
                if (typeof window !== 'undefined') {
                    try {
                        window.location.assign('/home');
                    } catch (err) {
                        window.location.href = '/home';
                    }
                }
            } else {
                console.log('Login failed');
                // Handle login failure (e.g., show an error message)
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <p>Doesn't have an account yet? <a href="#">Sign Up</a></p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            placeholder="you@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter 6 characters or more" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <p>or login with</p>
                    <div className="social-login">
                        <button className="google-login">Google</button>
                        <button className="facebook-login">Facebook</button>
                    </div>
                </form>
            </div>
            <div className="login-illustration">
                <img src={img} alt="Login Illustration" />
            </div>
        </div>
    );
}

export default Login;
