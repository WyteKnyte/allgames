import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from './Style'
import {IconContext} from 'react-icons/lib'
const Navbar = ( ) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
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
                            <NavLinks to='/search-game'>
                                Search Game
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/popular-games'>
                                Popular Games
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/new-games'>
                                New Games
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
