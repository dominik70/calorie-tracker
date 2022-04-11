import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export const useFetch = <T>(url: string, skip = false) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const cache = useRef<{ [key: string]: T }>({});

  useEffect(() => {
    if (!skip) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          if (cache.current[url]) {
            const data = cache.current[url];
            setData(data);
          } else {
            const response = await fetch(url);
            const data = await response.json();
            cache.current[url] = data;
            setData(data);
          }
        } catch {
          toast.error('failed to fetch data');
          setData(null);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    } else {
      setData(null);
    }
  }, [url]);

  return [data, isLoading];
};
