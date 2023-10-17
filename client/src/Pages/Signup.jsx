// import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SigninForm from "../Components/SigninForm";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <Box className="container" sx={{ height: "100vh" }}>
      <Grid container>
        <Grid xs={12} md={7}>
          <div className="slogan">
            <h1 className="start">Start</h1>
            <h1 className="tomorrow">Tomorrow</h1>
            <h1 className="today">Today</h1>
          </div>
        </Grid>
        <Grid xs={12} md={5}>
          <SigninForm handleNavigate={handleNavigate} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
