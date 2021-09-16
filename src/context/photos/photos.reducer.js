import { actionTypes } from './photos.actions';

const reducer = (state, action) => {
  if (action.type === actionTypes.FETCH_ALBUMS_REQUEST) {
    return {
      ...state,
      albums: {
        ...state.albums,
        isLoading: true,
        error: null,
      },
    };
  }
  if (action.type === actionTypes.FETCH_ALBUMS_FULFILLED) {
    const items = action.payload.albums.map((item) => ({
      value: item.id,
      optionLabel: item.title,
    }));
    return {
      ...state,
      albums: {
        ...state.albums,
        isLoading: false,
        error: null,
        items: [...state.albums.items, ...items],
      },
    };
  }
  if (action.type === actionTypes.FETCH_ALBUMS_REJECTED) {
    return {
      ...state,
      albums: {
        ...state.albums,
        isLoading: false,
        error: action.payload,
      },
    };
  }
  if (action.type === actionTypes.FETCH_PHOTOS_REQUEST) {
    return {
      ...state,
      photos: {
        ...state.photos,
        isLoading: true,
        items: state.isDesktop ? [] : [...state.photos.items],
        error: null,
      },
    };
  }
  if (action.type === actionTypes.FETCH_PHOTOS_FULFILLED) {
    return {
      ...state,
      photos: {
        ...state.photos,
        isLoading: false,
        items: [...state.photos.items, ...action.payload.photos],
        totalItems: Number(action.payload.totalItems),
        error: null,
      },
    };
  }
  if (action.type === actionTypes.FETCH_PHOTOS_REJECTED) {
    return {
      ...state,
      photos: {
        ...state.photos,
        error: action.payload,
        isLoading: false,
      },
    };
  }
  if (action.type === actionTypes.SET_ITEMS_PER_PAGE) {
    return {
      ...state,
      photos: {
        ...state.photos,
        items: [],
        totalItems: 0,
      },
      query: {
        ...state.query,
        itemsPerPage: action.payload,
        currentPage: 1,
      },
    };
  }
  if (action.type === actionTypes.SET_SEARCH) {
    return {
      ...state,
      photos: {
        ...state.photos,
        items: [],
        totalItems: 0,
      },
      query: {
        ...state.query,
        search: action.payload,
        currentPage: 1,
      },
    };
  }
  if (action.type === actionTypes.SET_ALBUM) {
    return {
      ...state,
      photos: {
        ...state.photos,
        items: [],
        totalItems: 0,
      },
      query: {
        ...state.query,
        albumId: action.payload,
        currentPage: 1,
      },
    };
  }
  if (action.type === actionTypes.SET_PAGE) {
    return {
      ...state,
      query: {
        ...state.query,
        currentPage: action.payload,
      },
    };
  }
  if (action.type === actionTypes.INCREMENT_PAGE) {
    return {
      ...state,
      query: {
        ...state.query,
        currentPage: state.query.currentPage + 1,
      },
    };
  }
  if (action.type === actionTypes.SET_DESKTOP_VIEW && state.isDesktop !== action.payload) {
    let nextState = {
      ...state,
      isDesktop: action.payload,
    };
    if (state.query.currentPage !== 1) {
      nextState = {
        ...state,
        query: {
          ...state.query,
          currentPage: 1,
        },
      };
    }
    return nextState;
  }
  return state;
};

export default reducer;
