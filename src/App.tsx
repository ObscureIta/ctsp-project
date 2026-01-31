import { BrowserRouter } from 'react-router';
import AppLayout from './layout/app-layout';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
