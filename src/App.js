import './App.scss';
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import AllBooks from "./components/allBooks/AllBooks";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={<Pages/>}/>
                <Route path={"/books"} element={<AllBooks/>}/>

        </Routes>

    <Footer/>
    </div>
  );
}

export default App;
