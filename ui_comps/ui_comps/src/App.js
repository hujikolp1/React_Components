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

const useButtonStyles = makeStyles(theme => ({
  root: { margin: theme.spacing(1) },
  contained: { borderRadius: theme.shape.borderRadius + 2 },
  sizeSmall: { fontWeight: theme.typography.fontWeightLight }
}));


export default function App() {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");

  return (
    <div style={{ flexGrow: 1 }}>

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

    </div>
  );
}