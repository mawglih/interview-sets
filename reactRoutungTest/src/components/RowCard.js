const RowCard = ({
  title,
  subtitle,
  image,
  classname,
}) => {
  return (
    <div className={classname}>
      <div className="row-card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="row-card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}
export default RowCard;
