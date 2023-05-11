import { Helmet } from '@/components/common/Helmet';
import { SignupView } from '@/views/SignupView';

export default function SignupPage() {
  const seoMeta = {
    title: 'SINGUP',
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
      <SignupView />
    </>
  );
}
