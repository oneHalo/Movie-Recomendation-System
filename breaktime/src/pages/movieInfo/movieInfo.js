/*
James Platt movieInfo.js
This page makes heavy use of Material ui components
https://mui.com/
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

import axios from 'axios';

import { useState } from 'react';

import { useParams } from 'react-router';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1,2,3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function MovieInfo() {

  const { showID, userID } = useParams();

  const [show, setShow ] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState(null);
  const [reviews, setReviews] = useState(null);

  const addToList = (listType) => {
    //first make sure they have a list
    axios.post(
      `http://localhost:8000/showList/listHas/${userID}`,
      {
        type : listType,
        showID : showID
      }
    )
    .then(
      (response) => {
        console.log(`added to ${listType}`)
      },
      (error) => {
        console.log(error);
      }
    )

    // let hasList = false;
    // axios.get(
    //   `http://localhost:8000/showList/${listType}/${userID}`
    // )
    // .then(
    //   (response) => {
    //       console.log(response.data.length);
    //       if(response.data.size > 0){
    //         hasList = true;
    //         if(hasList){
    //           axios.post(
    //             `http://localhost:8000/showList/listHas/${userID}`,
    //             {
    //               type : listType,
    //               showID : showID
    //             }
    //           )
    //           .then(
    //             (response) => {
    //               console.log(`added to ${listType}`)
    //             },
    //             (error) => {
    //               console.log(error);
    //             }
    //           )
    //         }
    //       }
    //       else {
    //         axios.post(
    //           `http://localhost:8000/showList/${listType}/${userID}`
    //         )
    //         .then(
    //           (response) => {
    //             hasList = true;
    //             if(hasList){
                  
    //             }
    //           },
    //           (error) => {
    //             console.log(error);
    //           }
    //         )
    //       }
          
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )

    // console.log(hasList);
    
    
    
  }

  React.useEffect(() => {
    axios.get(
      `http://localhost:8000/shows/${showID}`
    )
    .then(
      (response) => {
        setShow(response.data[0]);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []);
  
  React.useEffect(() => {
    axios.get(
      `http://localhost:8000/actor/actsInShow/${showID}`
    )
    .then(
      (response) => {
        setActors(response.data);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []); 

  React.useEffect(() => {
    axios.get(
      `http://localhost:8000/director/directsShow/${showID}`
    )
    .then(
      (response) => {
        setDirectors(response.data);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []); 

  React.useEffect(() => {
    axios.get(
      `http://localhost:8000/review/${showID}`
    )
    .then(
      (response) => {
        setReviews(response.data);
      },
      (error) => {
        console.log("ERROR GETTING WATCHED SHOWS");
      }
    )
  }, []); 

  console.log(reviews);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button variant="outined" href= {`#homePage/${userID}`}>Back to Home Page</Button>
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
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="text.primary"
              gutterBottom
            >
              {show ? show.Title : ""}
            </Typography>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4}}
                sx={{justifyContent:'left'}}
            >
                <Button variant="contained" href="" onClick={() => {addToList("planToWatch")}}>
                    Add to Plan To Watch
                </Button>
                <Button variant="contained" href="" onClick={() => {addToList("watching")}}>
                    Add to Watching
                </Button>
                <Button variant="contained" href={""} onClick={() => {addToList("watched")} }>
                    Add to Watched
                </Button>
                 <Button variant="contained" href={`#/review/${userID}/${showID}`} >
                    Write a Review
                </Button>
            </Stack>
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.secondary"
            >
              Description
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              align="left"
              color="text.secondary"
            >
              {show ? show.Descript : ""}
            </Typography>
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.secondary"
            >
              Actors
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              align="left"
              color="text.secondary"
            >
              {actors ? actors.map((actor) => {
                  return actor.FirstName + " " + actor.LastName + "," 
              }) : ""}
            </Typography>
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h4"
              align="left"
              color="text.secondary"
            >
              Directors
            </Typography>
            <Typography
              component="h1"
              variant="body1"
              align="left"
              color="text.secondary"
            >
              {directors ? directors.map((director) => {
                  return director.FirstName + " " + director.LastName + "," 
              }) : ""}
            </Typography>
          </Container>
        </Box>
        <Box>
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.secondary"
            >
              Reviews
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {reviews ? reviews.map((review) => (
              <Grid item key={review} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {"Title : " + review.Title}
                    </Typography>
                    <Typography>
                      {"Comments : " + review.Comments} 
                    </Typography>
                    <Typography>
                      {"Consensus : " + review.Consensus} 
                    </Typography>
                    <Typography>
                      {"Overall Rating : " + review.Rating} 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )) : <></>}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}