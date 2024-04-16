import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import CourseDetail from "./CourseDetail";

function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
