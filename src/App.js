import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Nav />
      <main style={{ padding: "70px",marginTop:"80px"}}> {/* Adjust padding as needed */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Exercise" element={<ExerciseDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
