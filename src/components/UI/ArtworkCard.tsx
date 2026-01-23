import { imageUrl } from "./Image";
import Favorites from "../../images/Favorites.png";
import addedfav from "../../images/addedfav.png";
import type { Artwork } from "../../types";
import { useState } from "react";

function ArtworkCard({ item }: { item: Artwork }) {
  const [fav, setFav] = useState(() => {
    const savedData = localStorage.getItem("saved");
    if (!savedData) return false;
    const favList: Artwork[] = JSON.parse(savedData);
    return favList.some((i) => i.id === item.id);
  });
  const handlingFavorites = () => {
    setFav((prev) => !prev);
    const savedData = localStorage.getItem("saved");
    let favList = savedData ? JSON.parse(savedData) : [];

    // 2. Logic: Should we add or remove?
    const isAlreadyFavorited = favList.some((i: Artwork) => i.id === item.id);

    if (isAlreadyFavorited) {
      // REMOVE: Keep everything EXCEPT the one we clicked
      favList = favList.filter((i: Artwork) => i.id !== item.id);
    } else {
      // ADD: Put the new item into the list
      favList.push(item);
    }

    // 3. Save the final version back to the browser
    localStorage.setItem("saved", JSON.stringify(favList));
  };

  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={imageUrl(item.image_id)} alt={item.title} className="rounded-xl h-64 w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.artist_title}</p>
        <div className="card-actions">
          <button key={item.id} className="btn btn-primary" onClick={handlingFavorites}>
            <img src={fav ? addedfav : Favorites} className="w-5 h-5" />
            {fav ? "Added" : "Add to Gallery"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtworkCard;
