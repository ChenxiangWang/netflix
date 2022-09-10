import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_IN}></Route>
        <Route exact path={ROUTES.SIGN_UP}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
