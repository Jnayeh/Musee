import axios from "axios";
import { jwtInterceptor } from "Interceptors/JWTInterceptor";
import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AdminAuthContext = React.createContext();

export function AdminAuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const logIn = (adminData) => {
    setLoading(true);
    let loginURL =
      process.env.REACT_APP_API_URL +
      process.env.REACT_APP_admin_route +
      "/loginAdmin";

    axios
      .post(loginURL, adminData)
      .then((res) => {
        setLoading(false);
        if (res) {
          //handle success
          let t = res.data.token;
          navigate("/admin", { replace: true });
          localStorage.setItem("token", t);
          Cookies.set("token", t);
          setToken(t);
          console.log("res: ", res);
        }
      })
      .catch((err) => {
        //handle error
        console.log(token);
        //console.log(err.response.data.error);
      });
  };
  const getUser = () => {
    setLoading(true);
    let DT = decodedToken();
    console.log(DT);
    if (DT.role === "administrateur") {
      axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "admins/" + DT.id,
      })
        .then(function (response) {
          //handle success
          setLoading(false);
          setUser(response);
        })
        .catch((err) => {
          //handle error
          setLoading(false);
          console.log(err);
        });
    }
  };

  const decodedToken = () => {
    if (token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    } else {
      return { error: "no token to decode" };
    }
  };
  const logOut = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
    console.log("Logged OUT");
  };

  // Add intercepors when the site opens
  React.useEffect(() => {
    let t = Cookies.get("token");
    setToken(t);
    return () => {
      axios.interceptors.request.eject(jwtInterceptor);
    };
  }, []);

  // Add interceptors that change added token
  React.useEffect(() => {
    jwtInterceptor();
  }, [jwtInterceptor]);

  // Get logged admin every time the token changes
  React.useEffect(() => {
    if (token) {
      getUser();
    }
    return () => {};
  }, [token]);

  return (
    <AdminAuthContext.Provider
      value={{
        token,
        user,
        isLoading,
        decodedToken,
        logIn,
        logOut,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}
export default AdminAuthContext;
