// import { Container, Box, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import todoImage from "../Assets/todo.jpg";
import chatImage from "../Assets/chat.jpg";
import timeImage from "../Assets/time.jpg";

const Home = () => {
  return (
    <>
      <Box id="Features" className="features" sx={{ flexGrow: 1 }}>
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
      <Box id="Customers" sx={{ flexGrow: 1 }}>
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
      <Box id="Integrations" sx={{ flexGrow: 1 }}>
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
            <div className="time-statement">
              <h2>
                Spend the <span className="time">time</span> you have working
                smarter.
              </h2>
            </div>
            <div>
              <p className="time-decleration">
                Streamline your workflow by utilizing the tools provided to you.
                Make your life more efficient.
              </p>
            </div>
          </Grid>
          <Grid xs={9} md={5} xl={4}>
            <div id="time-div">
              <img id="time-image" src={timeImage} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
