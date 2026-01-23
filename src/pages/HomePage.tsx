import { useEffect, useState } from "react";
import type { Artwork } from "../types";
import { searchArt } from "../data";
import ArtworkCard from "../components/UI/ArtworkCard";

interface ArtResponse {
  data: Artwork[];
  pagination: {
    total: number;
    current_page: number;
  };
}

function HomePage() {
  const [art, setArt] = useState<ArtResponse>({
    data: [],
    pagination: { total: 0, current_page: 1 },
  });
  useEffect(() => {
    const FetchArtwork = async () => {
      try {
        const newData = await searchArt();
        console.log(newData);
        setArt((prev) => ({
          ...prev,
          data: newData,
        }));
      } catch (err) {
        console.error(err);
      }
    };
    FetchArtwork();
  }, []);

  return (
    <div className="p-8">
      <header className="text-center flex flex-col items-center gap-6 mb-12">
        <h1 className="text-6xl font-bold">Search your Artworks</h1>

        {/* Moved search bar here so it doesn't sit inside the art grid */}
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
          <input type="search" className="grow" placeholder="Search Artworks..." />
          <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
        </label>
      </header>

      {/* Grid for Artworks */}
      <section className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
        {art.data.map((item) => (
          <ArtworkCard key={item.id} item={item} />
        ))}
        {/* <div key={item.id} className="card bg-base-100 shadow-xl border p-4 flex flex-col gap-4">
            <img src={imageUrl(item.image_id)} alt={item.title} className="w-full h-64 object-cover rounded-lg bg-gray-100" />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-500 italic">{item.artist_title || "Unknown Artist"}</p>
            </div>
          </div>
        ))} */}
      </section>
    </div>
  );
}
export default HomePage;
