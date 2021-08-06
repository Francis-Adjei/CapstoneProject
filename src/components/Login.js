import React from 'react';


 function Login() {
    return (
        
        <section className='container'>
             <div className="forms-container">
             <div className="signin-signup">
             <form action="" className="sign-in-form">
                  <h2 class="title">Sign in</h2>
                  <div class="input-field">
                      <i class="fas fa-user"></i>
                      <input type="text" placeholder="Username"/>
                  </div>
                  <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <p class="social-text">
                        <a href="">forgot password</a>
                    </p>
                    <input type="submit" value="Login" class="btnLogin solid"/>
                    <div class="social-media">
                        <a href="" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
             </div>
        </div>
 </section>
    )
}

export default Login;