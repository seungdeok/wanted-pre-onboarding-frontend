import { Layout } from '@/components/common/Layout';
import { useAuth } from '@/hooks/useAuth';
import { ReturnType } from '@/services/infoService';

interface Props {
  isLoading: boolean;
  data: ReturnType | undefined;
}

export const HomeView = ({ isLoading, data }: Props) => {
  const [isLoggedIn] = useAuth();
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <h1>Next Templates</h1>
      {isLoading ? <div>loading...</div> : <div>{data?.name}</div>}
    </Layout>
  );
};
