import "./App.css";
import {Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Header from "./components/Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {auth} from "./firebase";
import {setUser} from "./redux/UserSlice";
import Athoroty from "./components/Athoroty";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <Athoroty>
              <Header />
              <Home />
            </Athoroty>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
