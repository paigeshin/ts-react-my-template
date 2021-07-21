import React, { useEffect } from "react";
// import store from "../Store"
import setAuthToken from "../API/setAuthToken";
import Routes from "./Routes/Routes";

// Views

const App: React.FC = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  });

  return <Routes />;
};

export default App;
