export default function Header() {
    return (
        <header className='header'>
            <div className="logo-container">
             <img src='/src/assets/react.svg' className= 'nav-logo' alt="React logo" />
             <h2 className="logo-text">ReactFacts</h2>
            </div>
           <nav> 
                <ol className="nav-list">
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ol>
           </nav>
        </header>
    )
}