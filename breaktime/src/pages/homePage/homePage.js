/*
James Platt homePage.js
This page makes heavy use of components from Material UI and uses the album template as a souce, which can
be found here
https://github.com/mui/material-ui/tree/v5.14.20/docs/data/material/getting-started/templates/album
*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, Navigate } from 'react-router';

import axios from "axios";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1,2,3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function HomePage(props) {

  const location = useLocation();

  const [watched, setWatched] = React.useState(null);
  const [watching, setWatching] = React.useState(null);
  const [planToWatch, setPlanToWatch] = React.useState(null);

  const userID = location.state ? location.state.userID : null;
  console.log(userID);
  //get watched

  React.useEffect(() => {
    axios.put(
      `http://localhost:8000/showList/listHas/${userID}`, 
      {
        type : "watched"
      }
    )
    .then(
      (response) => {
        setWatched(response.data);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []); 

  React.useEffect(() => {
    axios.put(
      `http://localhost:8000/showList/listHas/${userID}`, 
      {
        type : "watching"
      }
    )
    .then(
      (response) => {
        setWatching(response.data);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []);
  React.useEffect(() => {
    axios.put(
      `http://localhost:8000/showList/listHas/${userID}`, 
      {
        type : "planToWatch"
      }
    )
    .then(
      (response) => {
        setPlanToWatch(response.data);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []); 

  // if(userID === null){
  //   return <Navigate to="/" />
  // }


  console.log(watched);
  console.log(watching);
  console.log(planToWatch);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button variant="outined" href={`/#/searchPage/${userID}`}>Search For Movies!</Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to Break Time!
            </Typography>
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h"
              align="left"
              color="text.primary"
            >
              Watched Movies
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            { watched ? watched.map((show) => (
              <Grid item key={show} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {show.Title}
                    </Typography>
                    <Typography>
                      {show.Descript}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/#/movieInfo/${show.ShowID}/${userID}`}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            )) : <></>}
          </Grid>
        </Container>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h"
              align="left"
              color="text.primary"
            >
              Watching
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {watching ? watching.map((show) => (
              <Grid item key={show} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {show.Title}
                    </Typography>
                    <Typography>
                      {show.Descript}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/#/movieInfo/${show.ShowID}/${userID}`}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            )) : <></>}
          </Grid>
        </Container>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h"
              align="left"
              color="text.primary"
            >
              Plan To Watch
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {planToWatch ? planToWatch.map((show) => (
              <Grid item key={show} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {show.Title}
                    </Typography>
                    <Typography>
                      {show.Descript}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"href={`/#/movieInfo/${show.ShowID}/${userID}`} >View</Button>
                  </CardActions>
                </Card>
              </Grid>
            )) : <></>}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}