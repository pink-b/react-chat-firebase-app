import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '..';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });
        } catch (error) {
            console.error("Ошибка входа: ", error); // Обработка ошибок
        }
    };

    return (
        <Container>
            <Grid 
                container 
                style={{ height: window.innerHeight - 200 }} 
                alignItems={"center"} 
                justifyContent={"center"}
            >
                <Grid
                    style={{ width: 400, background: 'lightgray' }} 
                    container 
                    alignItems={'center'} 
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button variant={"outlined"} onClick={login}> {/* Добавьте обработчик onClick */}
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;