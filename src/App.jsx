import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Footer from './Universal/Footer'
import BlogLandingPage from './pages/BlogPage/BlogLandingPage'
import Watch from './pages/ProductPage/Watch';
// import Header from './components/blog/header'
// import ProductDisplay from './components/blog/product display'


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Homepage Route */}
        <Route 
          path="/" 
          element={
            <>
              <Homepage />
              {/* Uncomment Footer if needed */}
              {/* <Footer /> */}
            </>
          } 
        />

        {/* Blog Landing Page Route */}
        <Route 
          path="/blogs" 
          element={
            <>
              <BlogLandingPage />
              {/* <Footer /> */}
            </>
          } 
        />

        {/* Watch routing */}
        <Route 
          path="/watch" 
          element={
            <>
              <Watch />
              {/* <Footer /> */}
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;