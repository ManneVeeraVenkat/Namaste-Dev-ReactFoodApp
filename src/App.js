import React from "react";
import Header from "./components/Header";
import appStore from "./components/utilis/appStore";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
