import 'bootstrap/dist/css/bootstrap.min.css' 
import SpotifyUserLogin from './SpotifyUserLogin'
import TrackSearch from './TrackSearch'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return ( 
      code ? <TrackSearch code={code} /> : <SpotifyUserLogin />
  ) 
}
export default App