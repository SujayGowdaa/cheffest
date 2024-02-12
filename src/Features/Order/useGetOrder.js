import { useQuery } from '@tanstack/react-query';
import { getOrder } from '../../services/apiOrder';

export function useGetOrder(orderId) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getOrder(orderId),
    queryKey: ['orderDetails'],
  });

  if (error) console.log(error);
  return { data, isLoading };
}
