import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router';

const defaultTheme = createTheme();


const
    SearchPage = () => {

        const navigate = useNavigate();
        const handleSubmit = (event) => {

            event.preventDefault();
            const data = new FormData(event.currentTarget);
            console.log({
            search: data.get('search'),
            });
            navigate("/searchResults", {state: {movieQueryText : data.get("search")}});
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
                        Contact Me!
                        </Typography>
                        <Typography paragraph={true} sx={{fontSize: '1.3em'}}>
                            The best way to get in contact with me is through
                            my email or my linkedIn account, which both can be
                            found below. If you would like to take a look at my
                            resume, please feel free to aswell!
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="search"
                                    label="Movie Title"
                                    name="search"
                                    autoFocus
                                    />
                        </Box>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4}}
                            sx={{justifyContent:'center'}}
                        >
                          
                            <Button variant="contained" href={"#homePage"} >
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
    SearchPage
};