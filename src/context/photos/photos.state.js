import React, { useReducer, useEffect, createContext, useContext } from 'react';
import Api from 'services/api/api.service';
import reducer from './photos.reducer';
import { actions } from './photos.actions';
import useIsDesktop from 'hooks/useIsDesktop';
import messages from 'utils/messages';
import { getLsItemsPerPage, setLsItemsPerPage } from 'utils/helpers';

const PhotosContext = createContext();

PhotosContext.displayName = 'photos.state';

export const withPhotosContext = (WrappedComponent) => (props) => {
  const isDesktop = useIsDesktop();

  const initialState = {
    photos: {
      isLoading: false,
      error: null,
      items: [],
      totalItems: 0,
    },
    albums: {
      isLoading: false,
      error: null,
      items: [{ value: 0, optionLabel: messages.misc.allAlbums }],
    },
    query: {
      currentPage: 1,
      itemsPerPage: getLsItemsPerPage(),
      search: '',
      albumId: 0,
    },
    isDesktop,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setCurrentPage = (page) => {
    dispatch(actions.setPage(page));
  };

  const incrementCurrentPage = () => {
    dispatch(actions.incrementPage());
  };

  const setCurrentAlbum = (album) => {
    dispatch(actions.setAlbum(album));
  };

  const setItemsPerPage = (itemsPerPage) => {
    dispatch(actions.setItemsPerPage(itemsPerPage));
    setLsItemsPerPage(itemsPerPage);
  };

  const setSearch = (search) => {
    dispatch(actions.setSearch(search));
  };

  const photosActions = {
    setCurrentPage,
    setCurrentAlbum,
    setItemsPerPage,
    setSearch,
    incrementCurrentPage,
  };

  useEffect(() => {
    const api = new Api();

    const fetchAlbums = async () => {
      dispatch(actions.fetchAlbumsRequest());
      try {
        const data = await api.fetchAlbums();
        dispatch(actions.fetchAlbumsFulfilled(data));
      } catch (err) {
        dispatch(actions.fetchAlbumsRejected(err));
      }
    };
    fetchAlbums();
  }, []);

  useEffect(() => {
    const api = new Api();

    const fetchPosts = async () => {
      dispatch(actions.fetchPhotosRequest());
      try {
        const data = await api.fetchPosts(state.query);
        dispatch(actions.fetchPhotosFulfilled(data));
      } catch (err) {
        dispatch(actions.fetchPhotosRejected(err));
      }
    };
    fetchPosts();
  }, [state.query]);

  useEffect(() => {
    dispatch(actions.setDesktopView(isDesktop));
  }, [isDesktop]);

  return (
    <PhotosContext.Provider value={{ ...state, photosActions }}>
      <WrappedComponent {...props} />
    </PhotosContext.Provider>
  );
};

export const injectPhotosState = (WrappedComponent) => (props) => {
  const state = useContext(PhotosContext);
  return <WrappedComponent {...props} {...state} />;
};

export const injectPhotosPartialState = (mapStateToProps) => (WrappedComponent) => (props) => {
  const state = useContext(PhotosContext);

  const selectedState = mapStateToProps(state);

  return <WrappedComponent {...props} {...selectedState} />;
};

export default PhotosContext;
