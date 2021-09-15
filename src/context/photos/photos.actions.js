const FETCH_ALBUMS_REQUEST = 'photos/FETCH_ALBUMS_REQUEST';
const FETCH_ALBUMS_FULFILLED = 'photos/FETCH_ALBUMS_FULFILLED';
const FETCH_ALBUMS_REJECTED = 'photos/FETCH_ALBUMS_REJECTED';

const fetchAlbumsRequest = (payload) => ({ type: FETCH_ALBUMS_REQUEST, payload });
const fetchAlbumsFulfilled = (payload) => ({ type: FETCH_ALBUMS_FULFILLED, payload });
const fetchAlbumsRejected = (payload) => ({ type: FETCH_ALBUMS_REJECTED, payload });

const FETCH_PHOTOS_REQUEST = 'photos/FETCH_PHOTOS_REQUEST';
const FETCH_PHOTOS_FULFILLED = 'photos/FETCH_PHOTOS_FULFILLED';
const FETCH_PHOTOS_REJECTED = 'photos/FETCH_PHOTOS_REJECTED';

const fetchPhotosRequest = (payload) => ({ type: FETCH_PHOTOS_REQUEST, payload });
const fetchPhotosFulfilled = (payload) => ({ type: FETCH_PHOTOS_FULFILLED, payload });
const fetchPhotosRejected = (payload) => ({ type: FETCH_PHOTOS_REJECTED, payload });

const SET_ITEMS_PER_PAGE = 'photos/SET_ITEMS_PER_PAGE';
const setItemsPerPage = (payload) => ({ type: SET_ITEMS_PER_PAGE, payload });

const SET_SEARCH = 'photos/SET_SEARCH';
const setSearch = (payload) => ({ type: SET_SEARCH, payload });

const SET_ALBUM = 'photos/SET_ALBUM';
const setAlbum = (payload) => ({ type: SET_ALBUM, payload });

const INCREMENT_PAGE = 'photos/INCREMENT_PAGE';
const DECREMENT_PAGE = 'photos/DECREMENT_PAGE';
const SET_PAGE = 'photos/SET_PAGE';

const incrementPage = (payload) => ({ type: INCREMENT_PAGE, payload });
const decrementPage = (payload) => ({ type: DECREMENT_PAGE, payload });
const setPage = (payload) => ({ type: SET_PAGE, payload });

const SET_DESKTOP_VIEW = 'photos/SET_DESKTOP_VIEW'

const setDesktopView = (payload) => ({ type: SET_DESKTOP_VIEW, payload });

export const actionTypes = {
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_FULFILLED,
  FETCH_ALBUMS_REJECTED,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_FULFILLED,
  FETCH_PHOTOS_REJECTED,
  SET_ITEMS_PER_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  SET_SEARCH,
  SET_ALBUM,
  SET_PAGE,
  SET_DESKTOP_VIEW,
};

export const actions = {
  fetchAlbumsRequest,
  fetchAlbumsFulfilled,
  fetchAlbumsRejected,
  fetchPhotosRequest,
  fetchPhotosFulfilled,
  fetchPhotosRejected,
  setItemsPerPage,
  incrementPage,
  decrementPage,
  setSearch,
  setAlbum,
  setPage,
  setDesktopView,
};
