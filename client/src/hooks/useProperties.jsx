import { useQuery } from 'react-query'; // Import the useQuery hook from react-query
import { getAllProperties } from '../utils/api';

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties", // Query key
    getAllProperties, // Function to fetch data
    { refetchOnWindowFocus: false } // Options object
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
