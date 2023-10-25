import 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Tavern from '../pages/Tavern';

const AppRouter = () => {
  return (
    <div tw="p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tavern" element={<Tavern />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
