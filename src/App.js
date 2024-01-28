import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Store from "./routes/Store";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
