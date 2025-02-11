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

import { useState } from 'react';

import { useLocation, useParams } from 'react-router';
import axios from 'axios';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1,2,3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function SearchResults() {

  const [shows, setShows] = useState(null);
  const { userID } = useParams();

  React.useEffect(() => {
    axios.get(
      `http://localhost:8000/shows` 
    )
    .then(
      (response) => {
        setShows(response.data);
      },
      (error) => {
        console.log("ERROR GETTING SHOWS");
      }
    )
  }, []); 
  console.log(userID);
  console.log(shows);

    const location = useLocation();
    console.log(location.state);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button variant="outined" href="#searchPage">Search For Movies!</Button>
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
              Search Results
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {location.state ? location.state.movieQueryText : ""}
            </Typography>
          <Button variant="contained" href="#homePage" >Back to Home Page</Button>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            { shows ? shows.map((show) => (
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
      </main>
    </ThemeProvider>
  );
}