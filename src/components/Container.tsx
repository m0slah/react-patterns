import { useState, useEffect } from "react";

// Components
import Posts from "./Posts";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Container() {
  const [data, setData] = useState<IPost[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const getPorst = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);

      console.log("data");
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPorst();
  }, []);

  return isLoading ? (
    <span>Loading... </span>
  ) : data ? (
    <Posts data={data} />
  ) : (
    <span>{JSON.stringify(error)}</span>
  );
}
