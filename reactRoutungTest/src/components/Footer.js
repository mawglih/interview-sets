import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>Let's get started</h3>
      <Link to='/stories'>
        <button className="read-button">Read Now</button>
      </Link>
    </div>
  )
}
export default Footer;
