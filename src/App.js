import './App.scss';
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Pages/>
    <Footer/>
    </div>
  );
}

export default App;
