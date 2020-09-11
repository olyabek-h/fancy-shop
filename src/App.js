import React from "react";
import "./App.css";
import Products from "./pages/products";
import Detail from './pages/detail'
import Navbar from './components/navbar';
import { AppStateProvider } from './context/appStateContext';
import { DispatchProvider } from './context/dispatchContext';
import { reducer, INIT_STATE } from './stateManager/reducer';
import useThunkReducer from 'react-hook-thunk-reducer';
import Drawer from './components/drawer';

function App() {
  const [state, dispatch] = useThunkReducer(reducer, INIT_STATE);
  const { isDrawerOpen } = state;
  return (
    <div>
      <DispatchProvider dispatch={dispatch} >
        <AppStateProvider state={state} >
          <Navbar />
          {isDrawerOpen && <Drawer />}
          <Products />

          {/* <Detail
        id='1'
        title="queen panel bed"
        price={10.99}
        image='/images/hero-bcg.jpeg'
        detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      /> */}

        </AppStateProvider>
      </DispatchProvider>
    </div >

  )
}

export default App;