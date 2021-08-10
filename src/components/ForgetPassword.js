import React from 'react'

function ForgetPassword() {
    return (
        <section className='container'>
        <div className="forms-container">
          <div className="signin-signup">
           <form action="" className="sign-in-form">
             <h2 className="title">Reset Password</h2>
             <div className="input-field">
                 <i className="fas fa-user"></i>
                 <input type="text" placeholder="Email"/>
             </div>
             <div class="input-field">
                   <i className="fas fa-lock"></i>
                   <input type="password" placeholder="New Password"/>
               </div>
               <input type="submit" value="Reset" class="btnLogin solid"/>
               <div className="social-media">
                   <a href="#" class="social-icon">
                       <i class="fab fa-facebook-f"></i>
                   </a>
                   <a href="#" className="social-icon">
                       <i class="fab fa-twitter"></i>
                   </a>
                   <a href="#" className="social-icon">
                       <i class="fab fa-google"></i>
                   </a>
                   <a href="#" className="social-icon">
                       <i class="fab fa-linkedin-in"></i>
                   </a>
               </div>
           </form>
        </div>
   </div>
</section>
    )
}

export default ForgetPassword;