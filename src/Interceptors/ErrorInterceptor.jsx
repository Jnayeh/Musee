import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "Services/AuthContext";
import { Alert } from "@mui/material";
import { AlertSnack } from "Components/AlertSnack/AlertSnack";

const ErrorInterceptor = ({ children, logOut }) => {
  const [open, setOpen] = useState(false);
  const [openErr, setOpenErr] = useState(false);
  const [response, setResponse] = useState(null);
  const [err, setErr] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenErr(false);
  };

  /* useEffect(() => jwtInterceptor(token), [token]); */
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        console.log("success:", response);
        setResponse(response);
        setOpen(true);
        return response;
      },
      async (error) => {
        console.log("err :", error.response);
        setErr(error.response);
        setOpenErr(true);
        if (error.response.status === 403 || error.response.status === 401) {
          // auto logout if 401 response returned from api
          logOut();
        }
      }
    );
    return () => {};
  }, []);

  return (
    <>
      {open && (
        <AlertSnack
          open={open}
          autoHideDuration={6000}
          handleClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {response && response.data.success
              ? response.data.success
              : "Success!!"}
          </Alert>
        </AlertSnack>
      )}
      {openErr && (
        <AlertSnack
          open={openErr}
          autoHideDuration={6000}
          handleClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {err && err.data.error.message
              ? "Server Error: " + err.data.error.message
              : err && err.data.error
              ? err.data.error
              : "Erreur"}
          </Alert>
        </AlertSnack>
      )}
      {children}
    </>
  );
};

export default ErrorInterceptor;
