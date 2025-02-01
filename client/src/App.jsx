import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import { Form } from "./components/Form";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </div>
  );
}
