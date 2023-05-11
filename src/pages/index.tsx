import { Helmet } from '@/components/common/Helmet';
import { HomeView } from '@/views/HomeView';

export default function Home() {
  const seoMeta = {
    title: 'HOME',
    description: '원티드 프리온보딩 프론트엔드 - 선발 과제',
    keywords: '원티드, 프리온보딩, 프론트엔드, 선발 과제',
  };
  return (
    <>
      <Helmet
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
      />
      <HomeView />
    </>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient({});
//   try {
//    await queryClient.prefetchQuery(
//      [QUERY_KEYS.INFO, 'prefetching'],
//      () => InfoService.get(),
//      { staleTime: Infinity },
//    );
//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//     };
//   } catch (e) {
//     return {
//       props: {},
//     };
//   } finally {
//     queryClient.clear();
//   }
// }
