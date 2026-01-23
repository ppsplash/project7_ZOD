import type { ArtworkArray } from "../types";
import { imageUrl } from "../components/UI/Image";

function GalleryPage() {
  const favList = localStorage.getItem("saved");
  const display: ArtworkArray = favList ? JSON.parse(favList) : [];
  if (display.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <h1 className="text-3xl font-bold text-gray-400">No Favorites Found</h1>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
        {display.map((item) => (
          <div className="card bg-base-100 w-80 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={imageUrl(item.image_id)} alt={item.title} className="rounded-xl h-64 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.artist_title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryPage;
