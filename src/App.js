import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './containers/home/Home';
import Contact from "./containers/contact/Contact";
import Header from "./components/common/header/Header";

import BloggerHelper from "./helpers/BloggerHelper";
import LocalStorageHelper from "./helpers/LocalStorageHelper";

const App = () => {
  
  useEffect(() => {
    if( localStorage.getItem(LocalStorageHelper.BLOG_DATA) == null ){
      localStorage.setItem(LocalStorageHelper.BLOG_DATA, JSON.stringify(BloggerHelper.BLOG_DATA));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
