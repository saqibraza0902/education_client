import React from "react";
import Home from "./Pages/HomeComponents/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Pages/Courses/Course";
import Shop from "./Pages/Books/Shop";
import Events from "./Pages/Events/Events";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import FAQs from "./Pages/FAQS/FAQs";
import BookDetails from "./Pages/Books/BookDetails";
import EventDetails from "./Pages/Events/EventDetails";
import CoursesDetails from "./Pages/Courses/CoursesDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:_id" element={<CoursesDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/book" element={<BookDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:_id" element={<EventDetails />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
