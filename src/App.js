import ErrorBoundary from 'components/ErrorBoundary';
import { withPhotosContext } from 'context/photos';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from 'pages/HomePage';


function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
        <HomePage />
    </ErrorBoundary>
  );
}

export default withPhotosContext(App);
