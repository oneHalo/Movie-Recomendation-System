/*
James Platt review.js
This page makes heavy use of Material ui components
https://mui.com/
*/
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const defaultTheme = createTheme();


const
    ReviewPage = () => {

        const navigate = useNavigate();
        const { userID, showID } = useParams();
        const handleSubmit = (event) => {

            event.preventDefault();
            const data = new FormData(event.currentTarget);
            console.log({
                ShowID: showID,
                UserID : userID,
                title: data.get("Title"),
                rating: data.get("Number"),
                comments: data.get("Comments")
            });
            //submit review
        axios.post(
            "http://localhost:8000/review", {
                UserID : userID,
                ShowID :showID,
                Title : data.get("Title"),
                Rating : data.get("Rating"),
                Comments : data.get("Comments"),
            
            }
            ).then(
            (response) => {
                //if credentials are good move to next page
                // console.log(response.data);
                console.log(response.data);
                // navigate("/homePage", {state: { userID: response.data.UserID }});
            },
            (error) => {
                console.log(error);
            }
    )
            
        };

        return(
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth = "sm">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '80vh' }}
                    >
                    <Grid item xs={3}>
                        <Typography variant='h3' sx={{textAlign: "center"}}>
                        Leave a Review!
                        </Typography>
                        <Typography paragraph={true} sx={{fontSize: '1.3em'}}>
                            Enter your review details below
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Title"
                                label="Movie Title"
                                name="Title"
                                autoFocus
                            />
                            <TextField
                                id="Number"
                                label="Rating"
                                type="number"
                                name="Number"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextareaAutosize id="Comments" name="Comments" minRows={3} placeholder="Write your review here" />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Submit
                            </Button>
                        </Box>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4}}
                            sx={{justifyContent:'center'}}
                        >
                          
                            <Button variant="contained" href={`#homePage/${userID}`} >
                                Go back to home page
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
        )
    }

export{
    ReviewPage
};