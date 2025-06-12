import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main_page from './components/main_page/main_page';
import Header from './components/header/header';
import ProductDetail from './components/productDetail/productDetail';
import Footer from './components/Footer/Footer';
import { Drawer } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { calculateBasket, removeFromBasket } from "./redux/basketSlice";

function App() {
  const dispatch = useDispatch();

  const { cards, totalPrice } = useSelector((state) => state.basket);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  useEffect(() => {
    dispatch(calculateBasket());
  }, [cards, dispatch]);

  return (
    <>
      <Header onBasketClick={toggleDrawer} />

      <Routes>
        <Route path='/' element={<Main_page />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
      </Routes>

      <Footer />

      <Drawer
        className='drawer'
        anchor='right'
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div>
          {cards.length > 0 ? (
            <>
              {cards.map((item) => (
                <div className="basket-item" key={item.id}>
                  <img className="basket-img" src={item.Image} alt={item.title} />
                  <div style={{ flexGrow: 1 }}>
                    <p className="basket-title">{item.title} ({item.quantity})</p>
                    <p className="basket-price">{item.price} ₺</p>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeFromBasket(item.id))}
                  >
                    Sil
                  </button>
                </div>
              ))}
              <div style={{ padding: '10px', fontWeight: 'bold' }}>
                Toplam: {totalPrice} ₺
              </div>
            </>
          ) : (
            <p>Səbət boşdur</p>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default App;
  