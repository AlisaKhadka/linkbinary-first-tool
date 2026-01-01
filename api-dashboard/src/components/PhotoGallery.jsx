import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import "../styles/PhotoGallery.css";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const json = await res.json();
          //  console.log("Fetched photos:", json.slice(0, 5));
        setPhotos(json.slice(0, 50));
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Photo Gallery</h1>
      {loading ? (
        < div className="grid">
          {Array(50).fill(0).map((_, i) => (
              <div key={i} className="skeleton-box"></div>
            ))}
        
        </div>
      ) : (
        <div className="grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id} //key{i} is a skeleton ad this line is a real image
               thumbnailUrl={photo.thumbnailUrl}
              title={photo.title}
              url={photo.url}
              />
          ))}
        </div>
      )}
    </div>
  );
}
