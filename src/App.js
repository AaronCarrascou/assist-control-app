
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Contracts from './components/Contracts/Contracts';
import Employees from './components/Employees/Employees';
import Positions from './components/Positions/Positions';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/contracts" element={<Contracts />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
