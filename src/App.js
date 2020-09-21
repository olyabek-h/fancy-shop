import React, { useEffect } from "react";
import "./App.css";
import Products from "./pages/products";
import ProductDetail from './pages/productDetail'
import Navbar from './components/navbar';
import { AppStateProvider } from './context/appStateContext';
import { DispatchProvider } from './context/dispatchContext';
import { reducer, INIT_STATE } from './stateManager/reducer';
import useThunkReducer from 'react-hook-thunk-reducer';
import Drawer from './components/drawer';
import MainLayout from './layout/mainLayout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';

function App() {
  const [state, dispatch] = useThunkReducer(reducer, INIT_STATE);

  return (
    <div>
      <DispatchProvider dispatch={dispatch} >
        <AppStateProvider state={state} >

          <MainLayout>

            <BrowserRouter>

              <Switch>

                <Route path='/products'>
                  <Products />
                </Route>

                <Route path='/detail/:id' >
                  <ProductDetail />
                </Route>

                <Route path='/'>
                  <Home />
                </Route>
                
              </Switch>

            </BrowserRouter>

          </MainLayout>

        </AppStateProvider>
      </DispatchProvider>
    </div >

  )
}

export default App;