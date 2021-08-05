import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <section className='login'>
                <div className='loginContainer'>
                    <label>Username or Email</label>
                    <input type='text' autoFocus required></input>
                    <label>Password</label>
                    <input type='password' required></input>
                </div>
            </section>
        );
    }
}

export default Login;
