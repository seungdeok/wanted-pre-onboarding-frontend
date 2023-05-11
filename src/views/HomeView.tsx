import { Layout } from '@/components/common/Layout';
import { ROUTE_PATH } from '@/constants/routes';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useRouter } from 'next/router';

export const HomeView = () => {
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    router.replace(ROUTE_PATH.TODO);
  }, []);

  return (
    <Layout>
      <h1>Next Templates</h1>
    </Layout>
  );
};
