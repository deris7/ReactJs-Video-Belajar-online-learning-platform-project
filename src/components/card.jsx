export default function Card({
  thumbnail,
  title,
  description,
  avatar,
  instructor,
  rating,
  price,
}) {
  return (
    <div className="card">
      <img src={thumbnail} alt="thumbnail" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="instructor">
          <img src={avatar} alt={instructor} />
          <span>{instructor}</span>
        </div>
        <div className="bottom">
          <div className="rating">{rating}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
}
