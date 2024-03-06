import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './containers/home/Home';
import Contact from "./containers/contact/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
