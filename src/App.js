import './App.scss';
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";
import Header from "./components/header/header";
import Burger from "./components/burger-menu/burger";


function App() {
  return (
    <div className="App">
      <Header/>
      <Pages/>
    <Footer/>
        <Burger/>
    </div>
  );
}

export default App;
