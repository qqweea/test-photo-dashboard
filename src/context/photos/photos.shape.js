import PropTypes from 'prop-types';

export const photosShape = PropTypes.shape({
  isLoading: PropTypes.bool,
  error: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ),
});

export const albumsShape = PropTypes.shape({
  isLoading: PropTypes.bool,
  error: PropTypes.shape({}),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      optionLabel: PropTypes.string,
    })
  ),
});

export const queryShape = PropTypes.shape({
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  search: PropTypes.string,
  albumId: PropTypes.number,
});

export const photosStateShape = PropTypes.shape({
  photos: photosShape,
  albums: albumsShape,
  query: queryShape,
});
