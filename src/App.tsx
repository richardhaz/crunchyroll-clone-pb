import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
