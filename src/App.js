import "./App.css";
import Experience from "./Containers/Experience/Experience";
import Header from "./Containers/Header/Header";
import Navbar from "./Containers/NavBar/Navbar";
import Testimonial from "./Containers/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Experience />
      <Testimonial />
    </div>
  );
}

export default App;
