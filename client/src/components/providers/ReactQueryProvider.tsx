'use client'

// named imports
import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider