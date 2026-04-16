import './App.css'
import MovieCard from "./components/MovieCard.jsx"

function App() {
  return (
    <>
      <MovieCard movie={{title: "Tims Film", release_date: "2024",url: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"}}/>
      <MovieCard movie={{title: "Cristiano GOAT",url:"https://imgcdn.stablediffusionweb.com/2024/11/21/4af75f36-1e82-4b07-b901-5f5fa22493bb.jpg"}}/>
    </>
  )
}



export default App
