import { z } from "zod";
import { ArtworkArraySchema } from "../schemas";
import { ArtworkSchema } from "../schemas";
export type ArtworkArray = z.infer<typeof ArtworkArraySchema>;
export type Artwork = z.infer<typeof ArtworkSchema>;

export type AddNoteProps = {
  id: string; // For DaisyUI checkbox
  artworkId: number; // For your storage logic
};

export type saveNotes = {
  [artworkId: string]: string;
};
