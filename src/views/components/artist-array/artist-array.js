import ArtistArrayRowComponent from "../artist-array-row/artist-array-row";
import styles from "./artist-array.module.css";

function ArtistArrayComponent(props) {
  const songs = props.songs;

  const rows = songs.map((song) => (
    <ArtistArrayRowComponent key={song.id} song={song} />
  ));

  return (
    <div className={styles.artist_content_spacing}>
      <div className={styles.artist_array}>
        <div>{rows}</div>
      </div>
    </div>
  );
}

export default ArtistArrayComponent;
