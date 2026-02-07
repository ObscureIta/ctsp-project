import { BrowserRouter } from 'react-router';
import AppLayout from './layout/app-layout';
import { CarouselProvider } from './domain/carousel/carousel-provider';

const App = () => {
  return (
    <BrowserRouter basename="/ctsp-project">
      <CarouselProvider>
        <AppLayout />
      </CarouselProvider>
    </BrowserRouter>
  );
};

export default App;
