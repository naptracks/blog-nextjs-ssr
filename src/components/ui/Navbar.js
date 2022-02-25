import React from "react";


// COMPONENT: <Navbar/>
// Consume by <Layout/>

const Navbar = () => {

    const fakeLinks = ['new', 'for him', 'for her', 'home', 'gifts', 'sale', 'journal']

    const leftSide = (
        <div className={'left-side-navbar-container'}>
            <img src={'search.png'} alt={'dehef-tech'} width={'30px'} height={'30px'}/>
            <h4>SEARCH</h4>
        </div>
    )

    const logo = (
        <div className={'logo-container'}>
            <img src={'logo.png'} alt={'logo'} />
            <h4 className={'navbar-menu'}>MENU</h4>
        </div>
    )

    const rightSide = (
        <div className={'right-side-navbar-container'}>
            <h4>SIGN IN</h4>
            <img src={'profile.png'} alt={'profile'}/>
            <img src={'cart.png'} alt={'cart'}/>
        </div>
    )

    return (
        <div className={'navbar-container'}>
            <div className={'navbar center'}>
                {leftSide}
                {logo}
                {rightSide}
            </div>
                <div className={'fake-links-container center'}>
                    {
                        fakeLinks.map(fl => <h4 key={fl} className="fake-link">{fl.toUpperCase()}</h4>)
                    }
                </div>
        </div>
    )
}

export default Navbar;