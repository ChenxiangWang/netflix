import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import { IfNotLoggedIn, IfNotAuthenticated } from "./components/helpers/routes";
import * as ROUTES from "./constants/routers";
import { useAuthListener } from "./hooks";

function App() {
  const user = useAuthListener();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route element={<IfNotLoggedIn user={user} to={ROUTES.BROWSE} />}>
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        </Route>
        <Route element={<IfNotAuthenticated user={user} to={ROUTES.HOME} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
