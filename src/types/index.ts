import { z } from "zod";
import { ArtworkSchema } from "../schemas";
export type Artwork = z.infer<typeof ArtworkSchema>;
