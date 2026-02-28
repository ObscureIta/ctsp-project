import { BrowserRouter } from 'react-router';
import AppLayout from './layout/app-layout';
import { CarouselProvider } from './domain/carousel/carousel-provider';
import { TimerProvider } from './domain/timer/timer-provider';

const App = () => {
  return (
    <BrowserRouter basename="/ctsp-project">
      <CarouselProvider>
        <TimerProvider>
          <AppLayout />
        </TimerProvider>
      </CarouselProvider>
    </BrowserRouter>
  );
};

export default App;
