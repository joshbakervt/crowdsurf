import 'bootstrap/dist/css/bootstrap.min.css' 
import UserLogin from './UserLogin'
import TrackSearch from './TrackSearch'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return ( 
      code ? <TrackSearch code={code} /> : <UserLogin />
  ) 
}
export default App
