import React, { useState } from "react";
import { Link } from "react-router-dom";

import css from "./LoggedInNavbar.module.css";

import SearchBar from "../../../utils/SearchBar/SearchBar";
import LanguageChangeCard from "../../Cards/LanguageChangeCard/LanguageChangeCard";

import globeIcon from "/icons/globe.png";
import userEmptyIcon from "/icons/user-empty.png";
import hamburgerIcon from "/icons/hamburger.png";
import exitIcon from "/icons/exit.png";

const LoggedInNavbar = () => {
  let [menuState, setMenuState] = useState(false);
  let [showLanguageSettingsModal, setShowLanguageSettingsModal] =
    useState(false);

  return (
    <div className={css.navbar}>
      <button
        className={css.hamburgerMenuToggle}
        onClick={() => setMenuState((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <img src={hamburgerIcon} alt="menu icon" />
      </button>
      
      {/* Mobile Hamburger Menu */}
      <div className={`${css.hamburgerMenuBox} ${menuState ? css.active : ''}`}>
        {/* User Profile Section */}
        <Link to="/user/profile/settings/basic" className={css.mobileUserProfile} onClick={() => setMenuState(false)}>
          <img
            src="/icons/profile.png"
            alt="user profile"
            className={css.mobileUserProfileImg}
          />
          <div className={css.mobileUserInfo}>
            <div className={css.mobileUserName}>Chandragiri Manoj Krishna</div>
            <div className={css.mobileUserEmail}>manojkrishnachandragiri@gmail.com</div>
          </div>
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '1rem 0'}}></div>
        
        <div className={css.catDropdown}>Explore</div>
        <a className={css.hovBox} href="#">
          Udemy Business
        </a>
        <Link className={css.hovBox} to="/user/profile/courses" onClick={() => setMenuState(false)}>
          Instructor
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <Link className={css.hovBox} to="/user/my-courses/learning" onClick={() => setMenuState(false)}>
          My Learning
        </Link>
        <Link className={css.hovBox} to="/cart" onClick={() => setMenuState(false)}>
          My Cart
        </Link>
        <Link className={css.hovBox} to="/user/my-courses/wishlist" onClick={() => setMenuState(false)}>
          My Wishlist
        </Link>
        <Link className={css.hovBox} to="/user/profile/courses" onClick={() => setMenuState(false)}>
          Instructor Dashboard
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Notifications
        </Link>
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Messages
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <Link className={css.hovBox} to="/user/account" onClick={() => setMenuState(false)}>
          Account Settings
        </Link>
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Payment Methods
        </Link>
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Subscriptions
        </Link>
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Udemy Credits
        </Link>
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Purchase History
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <div className={css.hovBox} style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} onClick={() => setShowLanguageSettingsModal(true)}>
          <span>Language</span>
          <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span>English</span>
            <img src={globeIcon} alt="glob icon" style={{width: '16px', height: '16px'}} />
          </span>
        </div>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <Link className={css.hovBox} to="user/manoj-krishna-chandragiri/" onClick={() => setMenuState(false)}>
          Public Profile
        </Link>
        <Link className={css.hovBox} to="/user/profile/settings/basic" onClick={() => setMenuState(false)}>
          Edit Profile
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Help
        </Link>
        <Link className={css.hovBox} to="/" onClick={() => setMenuState(false)}>
          Logout
        </Link>
        
        <div style={{borderBottom: '1px solid var(--gray100)', margin: '0.5rem 0'}}></div>
        
        <div className={css.hovBox} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '0.5rem'}}>
          <div>
            <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>Udemy Business</div>
            <div style={{fontSize: '0.85rem', color: 'var(--gray)', marginTop: '0.25rem'}}>
              Bring learning to your company
            </div>
          </div>
          <img src={exitIcon} alt="exit icon" style={{width: '16px', height: '16px'}} />
        </div>
      </div>
      
      <div className={css.left}>
        <Link className={css.logoBox} to="/">
          <img src="/images/logo-udemy.svg" alt="logo" className={css.logo} />
        </Link>
      </div>
      <div className={css.right}>
        <div className={css.catDropdown}>Explore</div>
        <div className={css.searchBox}>
          <SearchBar />
        </div>
        <a className={css.hovBox} href="#">
          Udemy Business
        </a>
        <Link className={css.hovBox} to="/user/profile/courses">
          Instructor
        </Link>
        <Link className={css.hovBox} to="/user/my-courses">
          My Learning
        </Link>
        <Link to="/cart" className={css.cartBox}>
          <img
            className={css.cartIcon}
            src="/icons/heart.png"
            alt="wishlist icon"
          />
        </Link>
        <Link to="/cart" className={css.cartBox}>
          <img
            className={css.cartIcon}
            src="/icons/shopping-cart.png"
            alt="cart icon"
          />
        </Link>
        <div className={css.profile}>
          <img src="/icons/profile.png" className={css.profileIcon} />
          <div className={css.menuBox}>
            <div className={css.innerMenuBox}>
              <div className={css.prflDiv}>
                <Link to="/user/profile/settings/basic" className={css.user}>
                  <div className={css.leftUserDiv}>
                    <img
                      src="/icons/profile.png"
                      alt="user profile"
                      className={css.userProfileImg}
                    />
                  </div>
                  <div className={css.rightUserDiv}>
                    <div className={css.uname}>Chandragiri Manoj Krishna</div>
                    <div className={css.email}>manojkrishnachandragiri@gmail.com</div>
                  </div>
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/user/my-courses/learning" className={css.menuItem}>
                  My Learning
                </Link>
                <Link to="/cart" className={css.menuItem}>
                  My Cart
                </Link>
                <Link to="/user/my-courses/wishlist" className={css.menuItem}>
                  My Wishlist
                </Link>
                <Link to="/user/profile/courses" className={css.menuItem}>
                  Instructor Dashboard
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/" className={css.menuItem}>
                  Notifications
                </Link>
                <Link to="/" className={css.menuItem}>
                  Messages
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/user/account" className={css.menuItem}>
                  Account Settings
                </Link>
                <Link to="/" className={css.menuItem}>
                  Payment Methods
                </Link>
                <Link to="/" className={css.menuItem}>
                  Subscriptions
                </Link>
                <Link to="/" className={css.menuItem}>
                  Udemy Credits
                </Link>
                <Link to="/" className={css.menuItem}>
                  Purchase History
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <div className={css.menuItem2}>
                  <span onClick={() => setShowLanguageSettingsModal(true)}>
                    Language
                  </span>
                  <span onClick={() => setShowLanguageSettingsModal(true)}>
                    <span>English</span>
                    <img src={globeIcon} className={css.icon} alt="glob icon" />
                  </span>
                </div>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="user/manoj-krishna-chandragiri/" className={css.menuItem}>
                  Public Profile
                </Link>
                <Link
                  to="/user/profile/settings/basic"
                  className={css.menuItem}
                >
                  Edit Profile
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <Link to="/" className={css.menuItem}>
                  Help
                </Link>
                <Link to="/" className={css.menuItem}>
                  Logout
                </Link>
              </div>
              <hr className={css.hr} />
              <div className={css.prflDiv}>
                <div className={css.menuItem2}>
                  <span>
                    <div className={css.menuItemTxt1}>Udemy Business</div>
                    <div className={css.menuItemTxt2}>
                      Bring learning to your company
                    </div>
                  </span>
                  <span>
                    <img src={exitIcon} className={css.icon} alt="exit icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLanguageSettingsModal ? (
        <LanguageChangeCard setModal={setShowLanguageSettingsModal} />
      ) : null}
    </div>
  );
};

export default LoggedInNavbar;
