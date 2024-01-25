import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
