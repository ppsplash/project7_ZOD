import type { MouseEventHandler } from "react";
import type { saveNotes as saveNotes } from "../types";

export function saveNotes(artworkId: number, note: string): void {
  const existingNotes = localStorage.getItem("Notes");
  const notes: saveNotes = existingNotes ? JSON.parse(existingNotes) : {};
  const key: string = String(artworkId);
  notes[key] = note;

  localStorage.setItem("Notes", JSON.stringify(notes));
  window.alert("Note saved successfully!");
}

export function removeNotes(props: number): MouseEventHandler<HTMLButtonElement> | undefined {
  const artworkId = String(props); /// converting it to string, as the artworkID is of string type bcos key for strograge should be in String
  const existingNotes = localStorage.getItem("Notes");
  const savedArtwork = localStorage.getItem("saved");
  if (!existingNotes) return;
  if (!savedArtwork) return;
  if (existingNotes) {
    const parsedNotes = JSON.parse(existingNotes);
    if (artworkId in parsedNotes) {
      delete parsedNotes[artworkId]; // Remove property from object
      localStorage.setItem("Notes", JSON.stringify(parsedNotes)); // Save object back
    }
  }

  // Handle Saved Artwork
  if (savedArtwork) {
    if (savedArtwork) {
      const parsedArtwork: any[] = JSON.parse(savedArtwork);

      // Filter the array: "Keep everything that DOES NOT match this ID"
      const updatedArtwork = parsedArtwork.filter((item) => String(item.id) !== artworkId);

      // Save the new filtered list back to localStorage
      localStorage.setItem("saved", JSON.stringify(updatedArtwork));
    }
  }
}
