import './App.css'

export function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
          alt="avatar de usuario" src="https://unavatar.io/dribbble/omidnikrah" />

        <div className='tw-followCard-info'>
          <strong>fbn</strong>
          <span className='tw-followCard-infoUserName'>
            @mondongo</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>seguir</button>
      </aside>
    </article>
  )
}