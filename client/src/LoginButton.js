import React from 'react'
import TrackSearch from './TrackSearch'
import { Link } from 'react-router-dom'
import DjLogin from './DjLogin'
import SpotifyUserLogin from './SpotifyUserLogin'

const code = new URLSearchParams(window.location.search).get('code')

// at this point, the user has selected whether they are a DJ or a listener
// so if they're a dj, they need to login with google 
// if they're a listener, they need to login with spotify
export default function LoginButton( { userSelection }) {
    return (
        <div>
            {userSelection === 'dj' ? < DjLogin /> : (
                code ? <TrackSearch code={code} /> : <SpotifyUserLogin />
            )}
        </div>
    )
}
