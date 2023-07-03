import './App.scss';
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";
import Header from "./components/header/header";


import Cart from "./components/myCart/Cart";
import {Route, Routes} from "react-router-dom";
import AllBooks from "./components/allBooks/AllBooks";
import DetailPage from "./components/datailPage/datailPage";
import About from "./components/aboutUs/about";
import {useState} from "react";

function App() {
    const [props,setProps] = useState([])
    function createCart(obj){
        let newCart = [...props]
        newCart.push(obj)
        setProps(newCart)
    }
  return (
    <div className="App">
      <Header/>
        <Routes>
                    <Route path={'/'} element={<Pages/>}/>
                    <Route path={'/cart'} element={<Cart props ={props}/>}/>
                    <Route path={"/books"} element={<AllBooks/>}/>
                    <Route path={"/books/:id"} element={<DetailPage createCart ={createCart}/>}/>
                    <Route path={"/about"} element={<About/>}/>

        </Routes>


    <Footer/>
    </div>
  );
}

export default App;
