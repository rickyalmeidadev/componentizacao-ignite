import { MovieCard } from './MovieCard'

import '../styles/content.scss'

type Movie = {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

type Props = {
  title: string
  movies: Movie[]
}

export function Content({ title, movies }: Props): JSX.Element {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span>{title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
