import React, { useState } from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import AddPropertyModal from '../AddPropertyModal/AddPropertyModal';
import useAuthCheck from '../../hooks/useAuthCheck';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  const[modalOpened,setModalOpened] = useState(false);
  const {loginWithRedirect,isAuthenticated,user,logout} = useAuth0()
  const {validateLogin} =useAuthCheck()
  const handleAddPropertyClick =()=>{
    if(validateLogin()){
      setModalOpened(true);
    }
  }
  return (
    <section className='h-wrap'> 
        <div className='flexCenter paddings innerWidth h-container'>
        <Link to="/">
              <img src='./5.png' width={80}/></Link>
           
            <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
              <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
              <NavLink to="/properties">Properties</NavLink>          
                  <a href = "mailto:gudhkabinit@gmail.com">Contact</a>
                  {/* add property */}

                  <div onClick={handleAddPropertyClick}>
                    Add property
                  </div>
                    <AddPropertyModal
                      opened={modalOpened}
                      setModelOpened={setModalOpened}
                    />
                  {
                    !isAuthenticated?(
                    <button className='button' onClick={loginWithRedirect}>
                        Login
                    </button>):(
                      <ProfileMenu user={user} logout={logout}/>
                    )}
              </div>
            </OutsideClickHandler>
            

            <div className='menu-icon' onClick= {()=>setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  );
};

export default Header

