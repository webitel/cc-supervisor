import { useRouter } from 'vue-router';
import { ErrorRedirectMap } from '../enums/ErrorRedirectMap.enum';

export function useErrorRedirectHandler() {
  const router = useRouter();

  const handleError = (err) => {
    const status = err?.status ?? err?.response?.status;
    const to = ErrorRedirectMap[status];
    if (to) return router.push(to);
  };

  return { handleError };
}
