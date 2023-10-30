import 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Painting, Library, Tavern, Home, Sculpture, Bookcase } from '../pages';

const AppRouter = () => {
  return (
    <div tw="p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/library" element={<Library />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/sculpture" element={<Sculpture />} />
          <Route path="/bookcase" element={<Bookcase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
