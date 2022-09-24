import allAlbum from "../../data/all-album.json";

export function fetchOneAlbum(id) {
  const album = allAlbum.find((recommendation) => recommendation.key === +id);
  return album;
}
