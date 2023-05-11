import { ROUTE_PATH } from '@/constants/routes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const STORAGE_TOKEN_KEY = 'token';
export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = Boolean(localStorage.getItem(STORAGE_TOKEN_KEY));
      const isAuthPath =
        router.asPath.includes(ROUTE_PATH.SIGNIN) ||
        router.asPath.includes(ROUTE_PATH.SIGNUP);
      const isTodoPath = router.asPath.includes(ROUTE_PATH.TODO);

      if (isAuthPath && isLoggedIn) {
        router.push(ROUTE_PATH.TODO);
      } else if (isTodoPath && !isLoggedIn) {
        router.push(ROUTE_PATH.SIGNIN);
      }
    };

    checkAuth();
  }, [router]);

  return null;
};
