const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div>
          <input type="email" className="form-control"
          name="email" placeholder="Email"/>
        </div>
        <div>
          <input type="password" className="form-control"
                name="password" placeholder="Password"/>
        </div>
        <div>
          <button type="submit" className="signup-button">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
export default SignUp;
