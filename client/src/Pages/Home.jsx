// import { Container, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import todoImage from "../Assets/todo.jpg";
import chatImage from "../Assets/chat.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <>
      <Box id={"Features"} className="features" sx={{ flexGrow: 1 }}>
        <Grid
          container
          id="feature-grid"
          justifyContent={"center"}
          alignItems={"center"}
          rowSpacing={1}
          height={"calc(100vh - 80px)"}
          columnSpacing={{ md: 3 }}
        >
          <Grid xs={9} md={5} xl={4}>
            <div className="todo-statement">
              <h2>
                Do all of the <span className="things">things</span> in one
                place.
              </h2>
            </div>
            <div>
              <p className="decleration">
                Itemize is a simple and easy to use task manager. Its perfect
                for keeping track of your daily tasks, or for managing larger
                projects.
              </p>
            </div>
          </Grid>
          <Grid xs={9} md={5} xl={4}>
            <div className="todo-div">
              <img id="todo-image" src={todoImage} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box id={"Customers"} sx={{ flexGrow: 1 }}>
        <Grid
          id="customer-grid"
          container
          justifyContent={"center"}
          alignItems={"center"}
          rowSpacing={1}
          height={"calc(100vh - 80px)"}
          columnSpacing={{ md: 3 }}
        >
          <Grid xs={9} md={5} xl={4}>
            <div className="chat-div">
              <img id="chat-image" src={chatImage} />
            </div>
          </Grid>
          <Grid xs={9} md={5} xl={4}>
            <div className="chat-statement">
              <h2>
                Chat with your <span className="team">team</span> while you
                work.
              </h2>
            </div>
            <div>
              <p className="chat-decleration">
                Itemize is a simple and easy to use chat application. Its
                perfect for keeping track of your daily tasks, or for managing
                larger projects.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box id={"Integrations"} sx={{ flexGrow: 1 }}>
        <Grid
          id="integration-grid"
          container
          justifyContent={"center"}
          alignItems={"center"}
          rowSpacing={1}
          height={"calc(100vh - 80px)"}
          columnSpacing={{ md: 3 }}
        >
          <Grid xs={9} md={5} xl={4}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={9} md={5} xl={4}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
