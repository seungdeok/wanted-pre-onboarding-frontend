import { Helmet } from '@/components/common/Helmet';
import { SigninView } from '@/views/SigninView';

export default function SigninPage() {
  const seoMeta = {
    title: 'LOGIN',
    description: 'Next Auth Templates',
    keywords: 'Nextjs, Reactjs, auth',
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
