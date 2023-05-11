import { Helmet } from '@/components/common/Helmet';
import { SigninView } from '@/views/SigninView';

export default function SigninPage() {
  const seoMeta = {
    title: 'LOGIN',
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
      <SigninView />
    </>
  );
}
