import type { ArtworkArray } from "../types";
import { imageUrl } from "../components/UI/Image";
import { AddNote } from "../components/UI/AddNote";
import { removeNotes } from "../storage";
import { useState } from "react";

function GalleryPage() {
  const [display, setDisplay] = useState<ArtworkArray>(() => {
    const favList = localStorage.getItem("saved");
    return favList ? JSON.parse(favList) : [];
  });

  const handleRemove = (id: number) => {
    // 3. Remove from LocalStorage (your existing logic)
    removeNotes(id);

    // 4. Update the State (This makes the card vanish immediately!)
    setDisplay((prev) => prev.filter((item) => item.id !== id));
  };
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
        {display.map((item) => {
          const modalId = `modal-${item.id}`; ///it needs to be unique, for each add note modal, so that each note can be added to its item id.
          return (
            <div key={item.id} className="card bg-base-100 w-80 shadow-sm">
              <figure className="px-10 pt-10">
                <img src={imageUrl(item.image_id)} alt={item.title} className="rounded-xl h-64 w-full object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.artist_title}</p>
                <div>
                  {/* 1. The Trigger */}
                  <label htmlFor={modalId} className="btn btn-primary">
                    Add Note
                  </label>
                  {/* 2. The Modal Component */}
                  <AddNote id={modalId} artworkId={item.id} />
                </div>
                <button className="btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GalleryPage;
