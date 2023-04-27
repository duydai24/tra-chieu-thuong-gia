import {useCallback, useState} from 'react';

export default function useIncreament(initialValue = 0) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue(v => v + 1);
  }, []);
  return [value, toggle];
}
