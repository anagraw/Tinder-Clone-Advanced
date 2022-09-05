import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'

const Nav=({minimal,authToken,setShowModal,showModal}) =>{
    const handleClick =() =>{
        setShowModal(true)
    }
    return (
        <nav minimal={false} authToken={authToken}>
            <div className="logo-container">
                <img className="logo" src={minimal?colorLogo:whiteLogo}/>
            </div>
            {!authToken && !minimal &&<button className='nav-button' onClick={handleClick} disabled={showModal}>Log in</button>}
        </nav>
    )
}
export default Nav 