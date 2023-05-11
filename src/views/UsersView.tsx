import { Layout } from '@/components/common/Layout';

interface Props {
  isLoggedIn: boolean;
}

export const UsersView = ({ isLoggedIn }: Props) => {
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <h1>Next Templates</h1>
    </Layout>
  );
};
