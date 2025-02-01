import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <h1>Hiking Trails App</h1>
      <Routes>
        <Route element={<Content />} path="/" />
        <Route element={<Form />} path="/add" />
      </Routes>
    </div>
  );
}
