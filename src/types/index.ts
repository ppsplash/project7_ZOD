import { z } from "zod";
import { ArtworkArraySchema } from "../schemas";
import { ArtworkSchema } from "../schemas";
export type ArtworkArray = z.infer<typeof ArtworkArraySchema>;
export type Artwork=z.infer<typeof ArtworkSchema>,
