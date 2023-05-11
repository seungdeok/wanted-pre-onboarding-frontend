import { Helmet } from '@/components/common/Helmet';
import { SSR_STALE_TIME } from '@/constants/queryKeys';
import { UsersView } from '@/views/UsersView';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default function UserPage() {
  const seoMeta = {
    title: 'LOGIN',
    description: 'Next Auth Templates',
    keywords: 'Nextjs, Reactjs, auth',
  };

  // const { isLoading, data } = useInfoQuery({ options: {} });

  return (
    <>
      <Helmet
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
      />
      <UsersView isLoggedIn={true} />
    </>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: SSR_STALE_TIME,
    },
  },
});

export async function getServerSideProps() {
  try {
    // await queryClient.prefetchQuery([QUERY_KEYS.INFO, 'prefetching'], () =>
    //   InfoService.get(),
    // );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  } finally {
    queryClient.clear();
  }
}
