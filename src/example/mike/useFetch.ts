import { useEffect, useState } from "react";
import type { EnumMethod } from "./types";

export const useFetch = (url: string, method: EnumMethod) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method: method,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`response status ${response.status}`);
        }
        const data = await response.json();
        if (!ignore) {
          setData(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [url, method]);

  return { data, isLoading, error };
};
