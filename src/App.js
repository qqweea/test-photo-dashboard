import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from 'pages/HomePage';
import { withPhotosContext } from 'context/photos';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default withPhotosContext(App);
