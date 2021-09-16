import { create } from 'axios';

class Api {
  constructor() {
    if (Api.instance) {
      return Api.instance;
    }

    this.axios = create({ baseURL: process.env.REACT_APP_API_URL });
    Api.instance = this;

    return this;
  }

  fetchAlbums = async () => {
    try {
      const { data } = await this.axios.get('/albums');
      return Promise.resolve({ albums: data });
    } catch (err) {
      return Promise.reject(err);
    }
  };

  fetchPhotos = async (queryState) => {
    const { currentPage, itemsPerPage, search, albumId } = queryState;
    try {
      const { data, headers } = await this.axios.get('/photos', {
        params: {
          q: search || undefined,
          albumId: albumId || undefined,
          _start: (currentPage - 1) * itemsPerPage,
          _limit: itemsPerPage,
        },
      });

      return Promise.resolve({ photos: data, totalItems: headers['x-total-count'] });
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export default Api;
