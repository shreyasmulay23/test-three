import React from "react";
import { AppBar, Container, Toolbar } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <AppBar color="transparent" position="static">
      <Container style={{ display: "flex", alignItems: "center" }}>
        <Toolbar>
          <img
            src="https://uploads-ssl.webflow.com/6101e033eba551a09cbbe91c/61797f782c4de5ab8ee34cfc_AW_Logo_New_B_400x400.svg"
            loading="lazy"
            width="116"
            alt=""
            onClick={() => history.push("/")}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
