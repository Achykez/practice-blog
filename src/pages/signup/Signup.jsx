import './signup.css'

export const Signup = () => {
  return (
    <div className='signup'>
        <span className="signupTitle">Sign Up</span>
        <form className="signupForm">
            <label>Username</label>
            <input type="text" className="signupInput" placeholder='Please select Valid Username' />
            <label>Email</label>
            <input type="email" className="signupInput" placeholder='Enter your email...' />
            <label>Phone Number</label>
            <input type="tel" className="signupInput" placeholder='Please enter a valid phone number...' />
            <label>Password</label>
            <input type="password" className="signupInput" placeholder='Enter your password....' />
            <button className="signupButton">Sign Up</button>
        </form>
            <button className="signupLoginButton">Login</button>
        
    </div>
  )
}
