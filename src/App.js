import 'antd/dist/antd.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
// import 'antd/dist/antd.dark.min.css';
import HomePage from 'pages/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
