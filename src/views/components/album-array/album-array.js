import {
  ARRAY_HEADER_COLUMN_TITLE,
  ARRAY_HEADER_FIRST_COLUMN,
} from "../../../utilities/constantes-ui-text";
import { SvgDuration } from "../../icons/Duration";
import AlbumArrayRowComponent from "../album-array-row/album-array-row";
import styles from "./album-array.module.css";

function AlbumArrayComponent(props) {
  const songs = props.songs;

  const rows = songs.map((song) => (
    <AlbumArrayRowComponent key={song.id} song={song} />
  ));

  return (
    <div className={styles.album_content_spacing}>
      <div className={styles.album_array}>
        <div className={styles.album_header}>
          <div className={styles.album_row}>
            <div>{ARRAY_HEADER_FIRST_COLUMN}</div>
            <div>{ARRAY_HEADER_COLUMN_TITLE}</div>
            <div>
              <SvgDuration />
            </div>
          </div>
        </div>
        <div>{rows}</div>
      </div>
    </div>
  );
}

export default AlbumArrayComponent;
