import { SvgCertified } from "../../icons/Certified";
import styles from "./header-artist.module.css";

function HeaderArtistComponent(props) {
  const { name, verifiedArtist } = props.data;

  const verifiedComponent = verifiedArtist ? (
    <span className={styles.header_artist_certified_bloc}>
      <SvgCertified />
      <span>Artiste vérifié</span>
    </span>
  ) : (
    <></>
  );
  return (
    <div className={styles.header_artist}>
      <div>{verifiedComponent}</div>
      <h1>{name}</h1>
    </div>
  );
}

export default HeaderArtistComponent;
