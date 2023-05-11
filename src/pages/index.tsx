import { Helmet } from '@/components/common/Helmet';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useInfoQuery } from '@/hooks/queries/useInfoQuery';
import { InfoService } from '@/services/infoService';
import { HomeView } from '@/views/HomeView';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default function Home() {
  const seoMeta = {
    title: 'HOME',
    description: 'Next Auth Templates',
    keywords: 'Nextjs, Reactjs, auth',
  };

  const { isLoading, data } = useInfoQuery({ options: {} });

  return (
    <>
      <Helmet
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
      />
      <HomeView isLoading={isLoading} data={data} />
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(
      [QUERY_KEYS.INFO, 'prefetching'],
      () => InfoService.get(),
      { staleTime: Infinity },
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
}
