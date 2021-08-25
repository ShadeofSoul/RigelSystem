import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductList from "./components/Content/Products/ProductList";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <Switch>
              <Route exact path='/animals' component={ProductList} />
            </Switch>
            <div style={{ position: "relative" }}>
              <Routes />
            </div>
          </ProductContextProvider>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
