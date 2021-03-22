import { Button } from './Button'

import '../styles/sidebar.scss'

type Genre = {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

type Props = {
  genres: Genre[]
  selectedGenreId: number
  onSelectGenre: (id: number) => void
}

export function SideBar({ genres, selectedGenreId, onSelectGenre }: Props): JSX.Element {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
