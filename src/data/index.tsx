import { z } from "zod/v4";
import { ArtworkArraySchema } from "../schemas";

export const basicArt = async () => {
  const response = await fetch("https://api.artic.edu/api/v1/artworks?page=1");
  if (!response.ok) throw new Error("Network response was not ok");
  const resData = await response.json();
  console.log(resData);
  const { data, error, success } = ArtworkArraySchema.safeParse(resData.data);
  if (!success) throw new Error(z.prettifyError(error));
  console.log(data);
  return data;
};

export const searchArt = async (keyword: string) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${keyword}&fields=id,title,image_id,artist_title`);
  if (!response.ok) throw new Error("Network response was not ok");
  const resData = await response.json();
  console.log(resData);
  const { data, error, success } = ArtworkArraySchema.safeParse(resData.data);
  if (!success) throw new Error(z.prettifyError(error));
  console.log(data);
  return data;
};
