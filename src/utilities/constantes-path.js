/* PRIVATES CONSTANTES */
const BASE_PATH_RECOMMENDATION = "/recommendation";
const BASE_PATH_ALBUM = "/album";
const BASE_PATH_ARTIST = "/artist";
const BASE_PATH_PLAYLIST = "/playlist";

/* PUBLIC CONSTANTES 
  ALL PATH must be suffixed with PATH
*/
/**
 * ROUTER DEFINE PATH
 * The path definition variables must be prefixed with DEFINE
 * */
export const DEFINE_HOME_PATH = "/";
export const DEFINE_RECOMMENDATION_PATH = `${BASE_PATH_RECOMMENDATION}/:type`;
export const DEFINE_ALBUM_PATH = `${BASE_PATH_ALBUM}/:id`;
export const DEFINE_ARTIST_PATH = `${BASE_PATH_ARTIST}/:id`;
export const DEFINE_PLAYLIST_PATH = `${BASE_PATH_PLAYLIST}/:id`;

/** NAVBAR */
export const HOME_PAGE_PATH = "/";

/** RECOMMANDATIONS */
export const POPULAR_RELEASE_PATH = `${BASE_PATH_RECOMMENDATION}/popular-release`;
export const DAILY_RECOMMENDATION_PATH = `${BASE_PATH_RECOMMENDATION}/daily-recommendation`;


export const ALBUM_PATH = `${BASE_PATH_ALBUM}`;
export const ARTIST_PATH = `${BASE_PATH_ARTIST}`;
export const PLAYLIST_PATH = `${BASE_PATH_PLAYLIST}`;
