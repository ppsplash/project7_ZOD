import { imageUrl } from "./Image";
import type { Artwork } from "../../types";
function ArtworkCard({ item }: { item: Artwork }) {
  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={imageUrl(item.image_id)} alt={item.title} className="rounded-xl h-64 w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.artist_title}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Favourites</button>
        </div>
      </div>
    </div>
  );
}

export default ArtworkCard;
