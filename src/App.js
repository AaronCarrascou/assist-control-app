
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Contracts from './components/Contracts/Contracts';
import Employees from './components/Employees/Employees';
import Positions from './components/Positions/Positions';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Contracts />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
