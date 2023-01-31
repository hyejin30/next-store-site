import { useQuery } from '@tanstack/react-query';
import { IStoreData } from '@/types/store';

const fetchStores = async (): Promise<IStoreData[]> => {
  const res = await fetch(`http://localhost:9000/stores`);
  const data = await res.json();
  return data;
};

const useGetStores = () =>
  useQuery(['Stores'], () => fetchStores(), {
    onError: (error) => console.log(error),
  });

export default useGetStores;
