import { Routes,Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import HistogrammePage from "./Pages/HistogrammePage";
import PieChartPage from "./Pages/PieChartPage";
import ScatterChartPage from "./Pages/ScatterChartPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/histogram" element={<HistogrammePage />} />
      <Route path="/pie-chart" element={<PieChartPage />} />
      <Route path="/scatter-chart" element={<ScatterChartPage />} />
    </Routes>
  );
}

export default App;
