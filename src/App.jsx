import HMR from "./pages/HMR";
import TideTurner from "./pages/TideTurner"
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<TideTurner />} />
      <Route path="/hmr" element={<HMR />} />
    </Routes>
    </>
  )
}

export default App
