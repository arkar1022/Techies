import "./App.css";
import { Navbar, Footer, Scrolltop } from "./components";
import {
  Home,
  Courses,
  Course_detail,
  Contact,
  About,
  Signup,
  Login,
  Profile,
} from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Scrolltop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course_detail" element={<Course_detail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
