import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, getDocs, addDoc, FieldValue } from "firebase/firestore"; 

const Chat = () => {
    const {auth, db} = useContext(Context)
    const  [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    console.log(db);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages()
    }, [])
    
    // const [messages, loading] = useCollectionData(
    //     db.collection('messages')
    // )

    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
        //   console.log(`${doc.id} => ${doc.data()}`);
        });
        const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setMessages(newData);                
                console.log(messages, newData);
}

    // console.log(messages);
    

    const sendMessage = async () => {
        try {
            const docRef = await addDoc(collection(db, "messages"), {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              text: value,
            //   createdAt: FieldValue.serverTimestamp
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setValue('')
        
    }

    return (
        <Container>
        <Grid 
            container 
            style={{ height: window.innerHeight - 200, marginTop: 20 }} 
            alignItems={"center"} 
            justifyContent={"center"}
        >
            <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto', }}>
                {messages.map((message) => {
                    return <div style={
                        {margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px dashed',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5
                        }
                    }>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                })}
            </div>
            <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                    marginTop={'50px'}>
                        <TextField
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}/>
                        <Button 
                        variant={"outlined"}
                        onClick={sendMessage}>
                            Отправить
                            </Button>
                </Grid>
   
        </Grid>
    </Container>
    );
};

export default Chat;