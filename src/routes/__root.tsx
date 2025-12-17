import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '@/context/auth';
import { Toaster } from '@/components/ui/sonner';
import UserLayout from '@/layout/user';
import CaptchaProvider from '@/context/captcha';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CaptchaProvider>
        <AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <UserLayout>
            <Outlet />
          </UserLayout>
          <Toaster/>
        </AuthProvider>
      </CaptchaProvider>
    </QueryClientProvider>
  );
}
