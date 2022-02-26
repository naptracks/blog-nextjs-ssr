import React, {useState} from "react";
import cn from 'classnames';

// COMPONENT: <Navbar/>
// Consume by <Layout/>

const Navbar = () => {

    const [isOpen, setIsOpen ] = useState(false)

    const fakeLinks = ['new', 'for him', 'for her', 'home', 'gifts', 'sale', 'journal']
        .map(fl => <h4 key={fl} className="fake-link">{fl.toUpperCase()}</h4>)



    // LEFT SIDE OF NAVBAR
    const leftSide = (
        <div className={'left-side-navbar-container'}>
            <img src={'search.png'} alt={'dehef-tech'} width={'30px'} height={'30px'}/>
            <h4>SEARCH</h4>
        </div>
    )
    // CENTER OF NAVBAR: LOGO
    const logo = (
        <div className={'logo-container'}>
            <img src={'logo.png'} alt={'logo'} />
            <button onClick={() => setIsOpen(state => !state)}>
                MENU
            </button>
        </div>
    )
    // RIGHT SIDE OF NAVBAR
    const rightSide = (
        <div className={'right-side-navbar-container'}>
            <h4>SIGN IN</h4>
            <img src={'profile.png'} alt={'profile'}/>
            <img src={'cart.png'} alt={'cart'}/>
        </div>
    )
    // MENU BOX: OPEN WITH STATE
    const menuBox = (
        <div className={cn('menu-container', {'open': isOpen})}>
            {fakeLinks}
            {leftSide}
            {rightSide}
        </div>
    )

    return (
        <div className={cn('navbar-container',{'fixedOnTop': isOpen})}>
                <div className={'navbar center'}>
                    {leftSide}
                    {logo}
                    {rightSide}
                </div>
                {menuBox}
                <div className={'fake-links-container center'}>
                    {fakeLinks}
                </div>
        </div>
    )
}

export default Navbar;