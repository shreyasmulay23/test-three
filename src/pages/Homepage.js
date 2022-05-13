import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container, CircularProgress } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import axios from "axios";
import { apiContext } from "../config/api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      width: "50ch"
    }
  },
  containerStyle: {
    marginTop: 15
  },
  button: {
    marginLeft: 15,
    marginTop: 15,
    width: "5%",
    alignItems: "center"
  }
}));

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAll = async (query) => {
    setLoading(true);
    try {
      const searchAll = await axios.get(apiContext.searchByNames(query));
      console.log(searchAll.data);
      const filteredList = searchAll.data.filter((it) =>
        it.type.startsWith("quadruped")
      );
      console.log(filteredList);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  const handleClick = async () => {
    console.log(searchQuery);
    await fetchAll(searchQuery);
  };
  const classes = useStyles();
  return (
    <>
      <Container className={classes.containerStyle}>
        <Typography variant="subtitle2" gutterBottom>
          See what we have available in our supported engines & API. Browse
          through endless possibilities.
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            style={{ marginTop: 15 }}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            id="modelSearch"
            label="Search 3D Model"
            variant="outlined"
          />
          <Button
            className={classes.button}
            onClick={() => handleClick()}
            variant="contained"
            color="primary"
            startIcon={<SearchOutlined />}
          ></Button>
        </form>
      </Container>
      <Container>
        {loading ? (
          <CircularProgress
            style={{ color: "#00ff4d" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>Inside Container...</>
        )}
      </Container>
    </>
  );
};

export default Homepage;
