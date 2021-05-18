import "typeface-roboto";

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import First from "./First";
import Second from "./Second";
import Third from "./Third";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import FormGroup from "@material-ui/core/FormGroup";
import TextInput from "./TextInput";
import Selector from "./Selector";

import Container from "@material-ui/core/Container";

const headerFooterStyle = {
  padding: 16,
  textAlign: "center"
};

const mainStyle = {
  padding: 32,
  textAlign: "center"
};

const navStyle = { marginLeft: 5 };

const uitheme = createMuiTheme({
  typography: {
    fontSize: 11
  },
  overrides: {
    MuiMenuItem: {
      root: {
        marginLeft: 15,
        marginRight: 15
      }
    }
  }
});

const makeButtonStyles = makeStyles(theme => ({
  root: { margin: theme.spacing(1) },
  contained: { borderRadius: theme.shape.borderRadius + 2 },
  sizeSmall: { fontWeight: theme.typography.fontWeightLight }
}));

function TabContainer({ value }) {
  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab label="Item One" component={Link} to="/" />
        <Tab label="Item Two" component={Link} to="/page2" />
        <Tab label="Item Three" component={Link} to="/page3" />
      </Tabs>
    </AppBar>
  );
}

// ----------- Main App -----------

export default function App({links}) {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");
  const [open, setOpen] = useState(false);


  const buttonStyles = makeButtonStyles();

  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }
    setOpen(!open);
  }

  const tabContentStyle = {
    padding: 16
  };

  TabContainer = ({ value }) => {
    return (
      <AppBar position="static">
        <Tabs value={value}>
          <Tab label="Item One" component={Link} to="/" />
          <Tab label="Item Two" component={Link} to="/page2" />
          <Tab label="Item Three" component={Link} to="/page3" />
        </Tabs>
      </AppBar>
    );
  }

  const textStyle = {
    backgroundColor: "#cfe8fc",
    margin: 5,
    textAlign: "center"
  };

  return (
    <div style={{ flexGrow: 1 }}>

    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <TabContainer value={0} />
            <Typography component="div" style={tabContentStyle}>
              Item One
            </Typography>
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <React.Fragment>
            <TabContainer value={1} />
            <Typography component="div" style={tabContentStyle}>
              Item Two
            </Typography>
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <React.Fragment>
            <TabContainer value={2} />
            <Typography component="div" style={tabContentStyle}>
              Item Three
            </Typography>
          </React.Fragment>
        )}
      />
    </Router>

      <Router>
        <Button onClick={toggleDrawer}>Open Nav</Button>
        <section>
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
        </section>
        <Drawer open={open} onClose={toggleDrawer}>
          <div
            style={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {links.map(link => (
                <ListItem button key={link.url} component={Link} to={link.url}>
                  <Switch>
                    <Route
                      exact
                      path={link.url}
                      render={() => (
                        <ListItemText
                          primary={link.name}
                          primaryTypographyProps={{ color: "primary" }}
                        />
                      )}
                    />
                    <Route
                      path="/"
                      render={() => <ListItemText primary={link.name} />}
                    />
                  </Switch>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Router>

      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Typography Title</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Grid container spacing={4} direction="column">
              <Grid item xs={12}>
                <Typography style={navStyle}>Grid Item 1</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Grid Item 2</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Grid Item 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Grid Item 4</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Typography 1</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Typography 2</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Typography 3</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Typography 4</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Footer</Typography>
          </Paper>
        </Grid>
      </Grid>

      <div>
        <FormControlLabel
          label={`Checkbox ${checkbox ? "(checked)" : ""}`}
          control={
            <Checkbox
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
          }
        />
        <br></br>
        <FormControl component="fieldset">
          <FormLabel component="legend">{radio}</FormLabel>
          <RadioGroup value={radio} onChange={e => setRadio(e.target.value)}>
            <FormControlLabel value="First" label="First" control={<Radio />} />
            <FormControlLabel value="Second" label="Second" control={<Radio />} />
            <FormControlLabel value="Third" label="Third" control={<Radio />} />
          </RadioGroup>
        </FormControl>
      </div>

      {/* <ThemeProvider theme={uitheme}>
        <Menu anchorEl={document} open={true}>
          <MenuItem>First Item</MenuItem>
          <MenuItem>Second Item</MenuItem>
          <MenuItem>Third Item</MenuItem>
        </Menu>
      </ThemeProvider> */}

      <React.Fragment>
        <Button classes={buttonStyles}>First</Button>
        <Button classes={buttonStyles} variant="contained">
          Second
        </Button>
        <Button classes={buttonStyles} size="small" variant="outlined">
          Third
        </Button>
      </React.Fragment>

      <FormGroup style={{ width: 200, margin: 10 }}>
        <TextInput />
        <Selector />
      </FormGroup>

      <React.Fragment>
        <Container maxWidth="sm">
          <Typography style={textStyle}>sm SMALL</Typography>
        </Container>
        <Container maxWidth="md">
          <Typography style={textStyle}>md MEDIUM</Typography>
        </Container>
        <Container maxWidth="lg">
          <Typography style={textStyle}>lg LARGE</Typography>
        </Container>
      </React.Fragment>

    </div>
  );
}

App.defaultProps = {
  links: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" }
  ]
};