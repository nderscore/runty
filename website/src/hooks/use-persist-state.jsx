import { useEffect, useState } from 'react';

const getParams = () => typeof window !== 'undefined' ? new window.URLSearchParams(window.location.search.slice(1)) : new Map();

const updateParams = (params) => {
  const search = params.toString();
  history.replaceState(null, document.title, search ? `?${search}` : location.pathname);
};

const get = (key) => {
  const params = getParams();
  return params.get(key);
};

const set = (key, value) => {
  const params = getParams();
  params.set(key, value);
  updateParams(params);
};

const remove = (key) => {
  const params = getParams();
  params.delete(key);
  updateParams(params);
};

export const usePersistState = (key, defaultValue = '') => {
  const [value, setValue] = useState(() => get(key) || defaultValue);

  useEffect(() => {
    if (value !== defaultValue) {
      set(key, value);
    } else {
      remove(key, value);
    }
  }, [value]);

  return [value, setValue];
};
