import React, { useState } from 'react';
import SpotifyUserLogin from './SpotifyUserLogin';
import TrackSearch from './TrackSearch';
import DjLogin from './DjLogin';
import LoginButton from './LoginButton';
import './tailwind.css';
import UserSelection from './UserSelection';

const code = new URLSearchParams(window.location.search).get('code')

export default function HomePage() {
  const [userSelection, setUserSelection] = useState(null);

  const handleUserSelection = (selection) => {
    setUserSelection(selection);
  };

  return (
    <div>
      <h1>crowdsurf</h1>

      {userSelection ? (
        userSelection === 'listener' ? (
          code ? <TrackSearch code={code} /> : <SpotifyUserLogin />
        ) : <DjLogin />
      ) : (<UserSelection onUserSelection={handleUserSelection} />)}

      {/* {userSelection ? 
        
        (userSelection === 'listener') ? (
          
          {code ? <TrackSearch code={code} /> : <SpotifyUserLogin />}
        ) : 
        ( )
        <LoginButton userSelection={userSelection} />
      ) : (
        <UserSelection onUserSelection={handleUserSelection} />
      )} */}
    </div>
  );
}