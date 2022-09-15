import styles from "./header-content.module.css";

function HeaderContentComponent(props) {
  const { title, type, artist, imagePath, year, songs } = props.data;
  console.log(props);
  return (
    <div className={styles.header_content_header}>
      <div className={styles.header_content_image}>
        <img src={imagePath} height={"192"} width={"192"} alt="img" />
      </div>
      <div className={styles.header_content_info}>
        <h2>{type.toUpperCase()}</h2>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <span className={styles.header_content_artist}>{artist}</span>
          <span> • {year}</span>
          <span>
            • {songs.length} {songs.length > 1 ? "titres" : "titre"},
          </span>
          <span> 5 min</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderContentComponent;
