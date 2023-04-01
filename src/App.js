import React from 'react'
import Home from './Components/HomeComponents/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Course from './Components/Courses/Course'
import Shop from './Components/Books/Shop'
import Events from './Components/Events/Events'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import FAQs from './Components/FAQS/FAQs'
import BookDetails from './Components/Books/BookDetails'
import EventDetails from './Components/Events/EventDetails'
import CoursesDetails from './Components/Courses/CoursesDetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/courses/:_id' element={<CoursesDetails />} />
        <Route path='/shop/:index' element={<Shop />} />
        <Route path='/shop/:index/:_id' element={<BookDetails />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:_id' element={<EventDetails />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/faqs' element={<FAQs />} />
      </Routes>
    </Router>
  )
}

export default App
