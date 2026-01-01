function PhotoCard({ thumbnailUrl, title, url }) {
  return (
    <div className="card">
      <img
        src={thumbnailUrl}
        alt={title}
        className="photo"
        onClick={() => window.open(url, "_blank")}
      />
      <p>{title}</p>
    </div>
  );
}

export default PhotoCard;
