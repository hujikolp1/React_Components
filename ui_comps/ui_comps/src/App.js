import "typeface-roboto";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const headerFooterStyle = {
  padding: 16,
  textAlign: "center"
};
const mainStyle = {
  padding: 32,
  textAlign: "center"
};
const navStyle = { marginLeft: 5 };

export default function App() {
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
    </div>
  );
}