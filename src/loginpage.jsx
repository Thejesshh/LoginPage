// src/LoginPage.js
import React from 'react';
import './index.css'; // Import the CSS file for styling

function LoginPage() {
    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <img src="logo.png" alt="Calendly Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </nav>
                    <div className="actions">
                        <a href="#">Log In</a>
                        <a href="#" className="get-started">Get Started</a>
                    </div>
                </div>
            </header>

            <main>
                <section className="left-section">
                    <h1>Welcome back to <span>Calendly</span></h1>
                    <p>Log in to your account to get back to your hub for scheduling meetings.</p>
                    <form>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                        <button type="submit">Log in</button>
                    </form>
                    <p className="signup">Don't have an account? <a href="#">Sign Up</a></p>
                </section>
                <section className="right-section">
                    <div className="event-banner">
                        <img src="event-image.png" alt="Better Meetings Virtual Event" />
                        <h2>Better Meetings Virtual Event</h2>
                        <p>On Oct 2, we're bringing together top productivity experts to change the way you meet – for the better.</p>
                        <a href="#">Register now</a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LoginPage;
