import { BrowserRouter} from 'react-router-dom';

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern br-cover bg-no-repeat bg-center"></div>
          <Navbar />
          <Hero />
      </div>
    </BrowserRouter>
  )
};

export default App;
