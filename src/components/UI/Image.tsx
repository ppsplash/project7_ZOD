export const imageUrl = (id: string | null): string => {
  if (id) return `https://www.artic.edu/iiif/2/${id}/full/600,/0/default.jpg`;
  else return "https://png.pngtree.com/png-clipart/20230917/original/pngtree-illustration-of-a-flat-vector-photo-camera-icon-and-a-no-png-image_12324370.png";
};
