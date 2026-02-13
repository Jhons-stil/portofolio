import "./App.css";

import MyProjects from "./components/Projek/Projek";
import Main from "./components/Main/Main";

import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navbar/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navigation />

      <Main />

      <MyProjects />

      <Footer />
    </div>
  );
}

export default App;
