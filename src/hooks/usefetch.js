import { useState, useCallback, useEffect } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { loading, products, setProducts };
}
