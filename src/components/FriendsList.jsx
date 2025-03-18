import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const { authUserInfo } = useContext(AuthContext);

  useEffect(() => {
    if (authUserInfo) {
      axios
        .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
          headers: {
            Authorization: authUserInfo.token,
          },
        })
        .then((response) => {
          setFriends(response.data);
        })
        .catch((error) => {
          console.error('Error fetching friends:', error);
        });
    }
  }, [authUserInfo]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
