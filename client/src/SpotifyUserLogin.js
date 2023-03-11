import React from 'react'

import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fdccf4b2a8084588965ddadce8ed6ba7&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-library-read%20user-library-modify%20user-top-read%20user-read-recently-played%20user-follow-read%20user-follow-modify"

export default function SpotifyUserLogin() {
  return <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <a className="btn btn-success btn-lg" href={AUTH_URL}>
        login with spotify
    </a>
  </Container>
}