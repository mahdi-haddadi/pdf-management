import { useEffect, useState } from "react";

const useDebounce = <T,>(value: T, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debouncedValue;
};

export default useDebounce;
