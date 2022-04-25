import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Menu from "Components/Menu/Menu";
import Footer from "Components/Footer/Footer";
import ErrorInterceptor from "Interceptors/ErrorInterceptor";
import AuthContext from "Services/AuthContext";

function UserApp() {
  const navigate = useNavigate();
  const [bar, setBar] = React.useState(true);
  const { logOut } = React.useContext(AuthContext);

  //Checks for path to customize the UI
  // URL detection
  let location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/404") {
      setBar(false);
    } else {
      setBar(true);
    }
  }, [location]);

  return (
    <>
      <ErrorInterceptor logOut={logOut}>
        {/* Menu will be shown in all the routes if bar is true */}
        {bar && <Menu />}

        {/* Website routes */}
        <div className="app-container" id="app-container">
          <Outlet />
          {bar && <Footer />}
        </div>
      </ErrorInterceptor>
    </>
  );
}

export default UserApp;
