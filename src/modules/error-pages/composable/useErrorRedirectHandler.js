import { useRouter } from 'vue-router';

export function useErrorRedirectHandler() {
  const router = useRouter();
  const notFoundRouteName = 'not-found';

  const handleError = (err) => {
    const status = err?.status ?? err?.response?.status;
    switch (status) {
      case 404:
        return router.push({ name: notFoundRouteName });
    }
  };

  return { handleError };
}
