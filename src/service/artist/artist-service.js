import allArtist from "../../data/all-artist.json";

export function fetchOneArtist(id) {
  const artist = allArtist.find((artist) => artist.id === +id);
  return artist;
}