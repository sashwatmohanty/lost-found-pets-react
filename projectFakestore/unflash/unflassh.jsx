import axios from "axios";
import { useEffect, useState } from "react";

export function Unflash() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.unsplash.com/photos/random?query=bike&count=6&client_id=m_v1VuSj8ZfUo27s-BypqkO0UhrvxcWOFx6iuyBGcDc")
            .then((response) => {
                setPhotos(response.data);
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center m-3">🚴 Random Bike Images</h2>
            <div className="row">
                {photos.map((item, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card shadow-lg">
                            <img
                                src={item.urls.small}
                                alt={item.alt_description || "bike"}
                                className="card-img-top"
                                height="200px"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
