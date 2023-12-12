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

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1,2,3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function MovieInfo() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button variant="outined" href="#homePage">Back to Home Page</Button>
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
              Movie Name
            </Typography>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4}}
                sx={{justifyContent:'left'}}
            >
                <Button variant="contained" href="">
                    Add to Plan To Watch
                </Button>
                <Button variant="contained" href="" >
                    Add to Watching
                </Button>
                <Button variant="contained" href={""} >
                    Add to Watched
                </Button>
                 <Button variant="contained" href={"#/review"} >
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
              Some text describing a bad movie
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
              Actors Names
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
              Actors Names
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}