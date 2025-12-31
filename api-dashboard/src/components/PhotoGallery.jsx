import { useEffect, useState, } from "react";
import "../styles/PhotoGallery.css"

   export default function PhotoGallery() {
    const[photos, setPhotos] =useState([]);
     const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await res.json();
        setPhotos(json.slice(0,50));
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
        <div className="skeleton-box">loading...</div>
      ) : (
        <p>Total photos loaded: {photos.length}</p>
      )}    </div>
  );
   }
