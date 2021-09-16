import { DEFAULT_ITEMS_PER_PAGE } from 'utils/constants';

export const getLsItem = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

export const setLsItem = (key, value) => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
};

export const getLsItemsPerPage = () => getLsItem('items_per_page') || DEFAULT_ITEMS_PER_PAGE;

export const setLsItemsPerPage = (value) => setLsItem('items_per_page', value);
