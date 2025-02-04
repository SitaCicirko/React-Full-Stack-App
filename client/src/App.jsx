import { Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Hiking Trails App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Trail</Link>
      </nav>
      <Routes>
        <Route element={<Content />} path="/" />
        <Route element={<Form />} path="/add" />
      </Routes>
    </div>
  );
}
