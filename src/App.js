import "./App.scss";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";
import Home from "./components/home/pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Provider } from "react-redux";
import store from "./controller/store";
import Details from "./components/home/details/Details";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart/:id" Component={Details} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
