import './App.scss';
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";
import Header from "./components/header/header";
import Cart from "./components/myCart/Cart";
import {Route, Routes} from "react-router-dom";
import AllBooks from "./components/allBooks/AllBooks";
import DetailPage from "./components/datailPage/datailPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Pages/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
                <Route path={"/books"} element={<AllBooks/>}/>
                <Route path={"/books/:id"} element={<DetailPage/>}/>
        </Routes>


    <Footer/>
    </div>
  );
}

export default App;
