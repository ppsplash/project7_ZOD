import { z } from "zod/v4";

export const ArtworkSchema = z.object({
  id: z.number(),
  title: z.string().default("Title-Unknown"),
  artist_title: z.string().nullable().default("Unknown Artist"),
  image_id: z.string().nullable().default("no image"),
});

export const ArtworkArraySchema = z.array(ArtworkSchema);
