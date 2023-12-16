import './App.css'

export function TwitterFollowCard({ name, userName, follow, formatUserName }) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    alt="avatar de usuario" src={`https://unavatar.io/github/${userName}`} />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>
                        {formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>seguir</button>
            </aside>
        </article>
    )
}