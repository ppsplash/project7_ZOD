import { useEffect, useState } from "react";
import type { Artwork } from "../types";
import { basicArt, searchArt } from "../data";
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

  const searchInput = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = new FormData(e.currentTarget);
    const keyword = input.get("keyword") as string;
    console.log("Searching for:", keyword);
    try {
      const results = await searchArt(keyword);
      setArt((prev) => ({
        ...prev,
        data: results,
      }));
      // Clear the form ONLY if the search was successful
      e.currentTarget.reset();
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  useEffect(() => {
    const FetchArtwork = async () => {
      try {
        const newData = await basicArt();
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
        <h1 className="text-6xl font-bold text-center">Find Artworks here</h1>

        <form onSubmit={searchInput} className="w-full max-w-md">
          <label className="input input-bordered flex items-center gap-2">
            <input type="search" name="keyword" className="grow" placeholder="Search Artworks..." />
            <button type="submit">
              <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </g>
              </svg>
            </button>
          </label>
        </form>
      </header>

      {/* Grid for Artworks */}
      <section className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
        {art.data.map((item) => (
          <ArtworkCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
export default HomePage;
