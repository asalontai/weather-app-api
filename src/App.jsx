import Humidity from './components/Humidity'
import Search from './components/Search'
import Weather from './components/Weather'
import Wind from './components/Wind'

function App() {
  return (
    <div className="bg-blue-500 p-10 w-560 mx-auto rounded-2xl	text-center mt-32">
      <Search />
      <Weather />
      <div className="flex space-x-40 mx-auto mt-11">
        <Humidity />
        <Wind />
      </div>
    </div>
  )
}

export default App
