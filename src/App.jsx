import "./App.css";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header name="The Job board" />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
