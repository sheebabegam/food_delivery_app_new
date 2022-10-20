import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import restaurant from "../Data/restaurant.json";
import { Link } from "react-router-dom";
import res_b from "../../images/res_b.jpg";
import bg from "../../images/bg.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  imageBack: {
    height: 873,
    maxWidth: "100%",
    justifyContent: "flex-start",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start",
    },
  },

  mycontain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    marginRight: 50,
    borderRadius: 20,
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    boxShadow: ".2px .1px 4px 1px rgba(131,153,167,0.6)",

    "&:hover": {
      boxShadow: "0px 0px 6px 5px rgba(131,153,167,0.99)",
    },
  },

  card: {
    width: 445,
    // maxHeight: 450,
    borderRadius: 20,
  },

  media: {
    height: 340,
  },

  action: {
    display: "flex",
    justifyContent: "space-around",
  },

  pick: {
    fontSize: 40,
  },

  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.imageBack} style={{ width: "100%" }}>
        <Toolbar />
        <Typography
          variant="h6"
          paragraph
          align="center"
          sx={{
            fontSize: 45,
            fontFamily: "cursive",
            fontWeight: "bolder",
            color: "whitesmoke",
          }}
        >
          Pick your Restaurant
        </Typography>
        <Container className={classes.container}>
          {restaurant.map((product) => {
            return (
              <Box className={classes.box}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <Link to={{ pathname: "/menu" }} state={{ id: product }}>
                      <CardMedia
                        className={classes.media}
                        image={product.res_image}
                        title={product.res_name}
                      />
                    </Link>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          fontFamily: "cursive",
                          fontWeight: "bold",
                          color: "#6439ff",
                        }}
                      >
                        {product.res_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    className={classes.action}
                    style={{ marginBottom: "13px" }}
                  >
                    <Link to={{ pathname: "/menu" }} state={{ id: product }}>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          // navigate('/menu');
                          const restaurant_details = {
                            res_phone: product.res_phone,
                            res_name: product.res_name,
                            res_address: product.res_address,
                          };
                          console.log("restaurant_details", restaurant_details);
                          localStorage.setItem(
                            "restaurant_data",
                            JSON.stringify(restaurant_details)
                          );
                        }}
                        sx={{
                          fontFamily: "cursive",
                          fontWeight: "bold",
                          color: "#6439ff",
                          border: "1px solid #6439ff",
                          borderRadius: "10px",
                          padding: "7px",
                        }}
                      >
                        View Menu
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </Container>
      </Container>
    </div>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
