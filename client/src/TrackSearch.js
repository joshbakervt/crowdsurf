import { useState, useEffect } from 'react'
import useAuth from './useAuth'
import { Container, Form, Button } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'

const spotifyApi = new SpotifyWebApi({
  clientId: 'd9b1b2b0b5e64b3e9b1b2b0b5e62b3e9',
})

export default function TrackSearch({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)

  useEffect(() => {
    // make sure we set our access token whenever accessToken changes
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce(
          (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          },
          track.album.images[0]
        )
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images[0].url,
        }
      }))
    })
    return () => cancel = true
  }, [search, accessToken])

  const handleTrackClick = (track) => {
    setSelectedTrack(track)
  }

  const handleBackButtonClick = () => {
    setSelectedTrack(null)
  }

  const handleSubmitRequest = () => {
    // Implement your code for submitting the track request here
    console.log('Track request submitted:', selectedTrack)
  }

  if (selectedTrack) {
    return (
      <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>
        <Button variant="link" onClick={handleBackButtonClick}>
          back
        </Button>
        <div className="d-flex flex-column align-items-center mt-4">
          <img src={selectedTrack.albumUrl} style={{ height: '150px', width: '150px' }} />
          <div className="mt-3">
            <div>{selectedTrack.title}</div>
            <div className="text-muted">{selectedTrack.artist}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Button onClick={handleSubmitRequest}>submit request</Button>
        </div>
      </Container>
    )
  }

  return (
    <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>
      <Form.Control
        type="search"
        placeholder="search for a track or artist"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
        {searchResults.map(track =>
          <TrackSearchResult 
          track={track} 
          key={track.uri} 
          onSelect={handleTrackClick} />
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        &copy; 2023 crowdsurf
      </div>
  </Container>
  )
}