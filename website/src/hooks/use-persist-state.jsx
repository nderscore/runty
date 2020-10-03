import { useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

const getParams = () => typeof window !== 'undefined' ? new window.URLSearchParams(window.location.search.slice(1)) : new Map();

const update = debounce((key, value, defaultValue) => {
  const params = getParams();

  if (value !== defaultValue) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  const search = params.toString();

  history.replaceState(null, document.title, search ? `?${search}` : location.pathname);
}, 500);

export const usePersistState = (key, defaultValue = '') => {
  const [value, setValue] = useState(() => getParams().get(key) || defaultValue);

  useEffect(() => {
    update(key, value, defaultValue);
  }, [defaultValue, value]);

  return [value, setValue];
};
