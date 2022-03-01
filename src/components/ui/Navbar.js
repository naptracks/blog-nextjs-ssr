import React, {Fragment, useState} from "react";
import {useRouter} from "next/router";
import cn from 'classnames';
import {Avatar} from "@mui/material";
import {route} from "next/dist/server/router";

// COMPONENT: <Navbar/>

const Navbar = ({user, signOut}) => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()


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
            <img onClick={() => router.push('/posts')} src={'logo.png'} alt={'logo'}/>
            <button onClick={() => setIsOpen(state => !state)}>
                MENU
            </button>
        </div>
    )


    // RIGHT SIDE OF NAVBAR

    const handleClick = () => {
        router.push('/')
        signOut()
    }

    const rightSide = (
        <div className={'right-side-navbar-container'}>
            {user ? <button onClick={() => signOut()}><h4>SIGN OUT</h4></button> : <button><h4>SIGN IN</h4></button>}
            {user ? <Avatar alt="alt" src={user.image}/> : <img className={'img-right-side-navbar'} src={'profile.png'} alt={'profile'}/>}
            <img className={'img-right-side-navbar'} src={'cart.png'} alt={'cart'}/>
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
        <Fragment>
            <div className={cn('navbar-container', {'fixedOnTop': isOpen})}>
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
        </Fragment>
    )
}

export default Navbar;