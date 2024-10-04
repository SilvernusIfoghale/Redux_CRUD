import Create from "./Create";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./Update";

export default function App() {
  return (
    <div className="w-full h-full flex justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}
