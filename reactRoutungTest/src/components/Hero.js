import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="header-down-container">
        <div className="header-down">   
          <h1 className="moto1">Stay hungry. Stay foolish.</h1>
          <p className="moto2">Learn from the hottest startups in the world.</p>
          <Link to="/stories">
            <button className="read-button">Read Now</button>
          </Link>
        </div>
      </div>
      <div className="hero-container">
        <h3>Smart tools for founders.</h3>
        <p>LearnStart is the simplest way for startup founders to discover inspiring stories<br />from startup founders from all over the world, all in one place.</p>
      </div>
    </>
  )
}
export default Hero;
