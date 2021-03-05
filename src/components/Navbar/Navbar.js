import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Style'
import {IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyles'
const Navbar = ( ) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{color: '#1d0606', size:'4.2vh'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                    <NavIcon/>
                        AllGames
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                Search Game
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                Popular Games
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>
                                About Us
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
