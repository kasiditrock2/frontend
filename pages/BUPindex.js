import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import NoSsr from "@material-ui/core/NoSsr";
import Box from "@material-ui/core/Box";
import { TextField } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Home() {
  return (
    <div>
      <head>
        <title>รับรักเขามาแต่เขาเอาคืนไปแล้ว</title>
      </head>
      <div>
        <center>
          <h1>Mr. Kasidit Phosai</h1>
          <br />
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |
          <Link href="about">
            <a>About</a>
          </Link>{" "}
          |
          <Link href="service">
            <a>Services</a>
          </Link>{" "}
          |
          <Link href="product/P002">
            <a>products</a>
          </Link>
          <br />
          <TextField id="" type="text" label="Standard" />
          <br />
          <br />
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <br />
          <br />
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <br />
          <br />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <br />
          <Fab size="small" color="secondary" aria-label="add">
            +
          </Fab>
          <br />
          <CardContent>Word of the Day</CardContent>
          <br />
          <List
            component="nav"
            aria-label="main mailbox folders"
            background-color="primary"
          >
            {" "}
            Test List
          </List>
          <br />
          .Progress
          <CircularProgress />
          <CircularProgress color="secondary" />
          <NoSsr>
            <Box p={2} bgcolor="secondary.main" color="primary.contrastText">
              Client only
            </Box>
          </NoSsr>
          <br />
          {/* const classes = useStyles(); return ( */}
          {/* <div className={classes.root}> */}
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <Tabs aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs> 

        </center>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));