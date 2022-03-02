import {Fragment, useState} from "react";
import {useRouter} from "next/router";
//ui
import Image from 'next/image'
import cn from 'classnames';
import {Avatar} from "@mui/material";
import LocaleSwitcher from "./LocaleSwitcher";



// COMPONENT: <Navbar/>

const Navbar = ({user, signOut, data, searchValue}) => {
    // settings
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [searching, setSearching] = useState(false)
    const pointer = {cursor: 'pointer'}


    // LEFT SIDE OF NAVBAR
    const leftSide = (
        <div className={'left-side-navbar-container'}>
            <Image onClick={() => setSearching(!searching)} src={'/search.png'}  alt={'dehef-tech'} width={'30px'} height={'30px'}/>
            { !searching ?
                <h4>{data.search.toUpperCase()}</h4>
                : <input className={'search-input'} value={searchValue} placeholder={data.search.toUpperCase()}/>}
        </div>
    )



    // CENTER OF NAVBAR: LOGO

    const menu = <div className="menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>

    const logo = (
        <div className={'logo-container'}>
            <img onClick={() => user && router.push('/posts', '/posts', {locale: router.locale})  } src={'/logo.png'} alt={'logo'}/>
            <div className={'row align-center'}>
                <button style={pointer} className={'m-r-1'} onClick={() => setIsOpen(state => !state)}>
                    {menu}
                </button>
            </div>
        </div>
    )


    // RIGHT SIDE OF NAVBAR


    const logButton = user ?
        <h4 style={pointer} onClick={() => signOut()}>{data.signOut.toUpperCase()}</h4>
        : <div>{data.signIn.toUpperCase()}</div>

    const avatar = user ?
        <Avatar alt="alt" src={user.image}/>
        : <img className={'img-right-side-navbar'} src={'/profile.png'} alt={'profile'}/>

    const rightSide = (
        <div className={'right-side-navbar-container'}>
            {logButton}
            {avatar}
            <LocaleSwitcher/>
        </div>
    )

    const fakeLinks = data.fakeLinks
        .map(fl =>  <h4 style={pointer} key={fl} className="fake-link">{fl.toUpperCase()}</h4>)


    // MENU BOX: OPEN WITH STATE
    const menuBox = (
        <div className={cn('menu-container', {'fixed': isOpen})}>

            <LocaleSwitcher/>
            {logButton}
            {fakeLinks}
        </div>
    )

    return (
        <Fragment>
            <div className={cn('navbar-container', {'fixedOnTop': isOpen})}>
                {isOpen && menuBox}
                <div className={'navbar center'}>
                    {leftSide}
                    {logo}
                    {rightSide}
                </div>

                <div className={'fake-links-container center'}>
                    {fakeLinks}
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;