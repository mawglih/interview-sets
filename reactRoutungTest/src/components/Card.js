const Card = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="card">
      <div className="card-text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}
export default Card;
