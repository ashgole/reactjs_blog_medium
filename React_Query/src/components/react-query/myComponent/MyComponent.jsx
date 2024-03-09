import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
};

const MyComponent=()=> {
  const { data, isLoading, error } = useQuery('myData', fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export {MyComponent}
