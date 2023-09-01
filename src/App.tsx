import { Route, Routes } from "react-router-dom";
import { NotFound, Rooms, Neighborhood, Attractions, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/neighborhood" element={<Neighborhood />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
