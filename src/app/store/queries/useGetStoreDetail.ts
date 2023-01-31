import { useQuery } from '@tanstack/react-query';

const fetchStoreDetail = async (id: number) => {
  const res = await fetch(`http://localhost:9000/stores/${id}`);
  const data = await res.json();
  return data;
};

const useGetStoreDetail = (id: number) =>
  useQuery(['Stores', id], () => fetchStoreDetail(id), {
    enabled: !!id,
    onError: (error) => console.log(error),
  });

export default useGetStoreDetail;
