import { Helmet } from '@/components/common/Helmet';
import { QUERY_KEYS, SSR_STALE_TIME } from '@/constants/queryKeys';
import { TodoService } from '@/services/todoService';
import { TodoView } from '@/views/TodoView';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default function TodoPage() {
  const seoMeta = {
    title: 'TODO',
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
      <TodoView />
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
    await queryClient.prefetchQuery(
      [QUERY_KEYS.todo, 'prefetch'],
      TodoService.getTodos,
    );

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
