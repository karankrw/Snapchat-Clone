import React, { useState, useEffect } from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Avatar } from '@material-ui/core';
import { db, auth } from "./firebase";
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
//import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

function Chats() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            let arr = snapshot.docs.map(doc=>({id : doc.id,
                                            data : doc.data()}))
            console.log(arr)
            setPosts(arr)
        });
    },[])

    const takeSnap = () => {

    }
 
    return (
        <div className="chats">
            <div className="chats__header">
                 <Avatar className="chats__avatar" />
                 <div className="chats__search">
                    <SearchIcon />
                    <input placeholder="Friends" type="text" />
                 </div>
                 <ChatBubbleIcon className="chats__chatIcon" />
            </div>

            <div className="chats__posts">
                {posts.length !== 0 ?(posts.map(({id, 
                    data: { profilePic, username, timestamp, imageUrl, read }}) => {
                    return(
                    <Chat 
                        key = {id}
                        id = {id}
                        username = {username}
                        timestamp = {timestamp}
                        imageUrl = {imageUrl}
                        read = {read}
                        //profilePic = {profilePic}
                    />
                )
            }
                )):<h4>No snaps :(</h4>}
            </div>

            <RadioButtonUncheckedIcon 
                    className="chats__takePicIcon"
                    onClick={takeSnap}
                    fontSize='large'
            />
        </div>
    )
} 

export default Chats;