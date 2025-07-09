import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function QueryTest() {
  const [clicks, setClicks] = useState(0);

  const fetchPosts = async (): Promise<Post> => {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${clicks}`);
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data', clicks],
    queryFn: fetchPosts,
    enabled: clicks >= 1,
  });

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      {isLoading && <p>Loading</p>}
      {isError && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
