import React from "react";
import Icon from "../Images/Icon-white.png";
import Icon1 from "../Images/Logo1.jpg";
import Logodarkactive from "../Images/logo-dark-active.png";
import Logowhiteactive from "../Images/logo-white-active.jpg";
// import Profile from "../Images/profile.png";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useLocation } from "react-router-dom";
import './Sidebar.css';
const Sidebar = ({closeMenu,handleCloseMenu,mode}) => {
    const location = useLocation();

    // const [closeMenu, setCloseMenu] = useState(false);

    // const handleCloseMenu = () => {
    //     setCloseMenu(!closeMenu);
    // };

    return (
        <div className={mode ? (closeMenu === false ? "sidebar dark1" : "sidebar active dark1") : (closeMenu === false ? "sidebar light" : "sidebar active light" )} >
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
           { (closeMenu === false ? <img style={{display:"flex", justifyContent:'center', alignItems:'center', paddingTop:'15px'}} src= {mode ? Icon1 : Icon}  width="220vw" height="70vh" alt="icon" className="logo" /> : <img style={{display:"flex", justifyContent:'center', alignItems:'center', paddingTop:'20px'}}  src= {mode ? Logowhiteactive : Logodarkactive}  width="150vw" height="50vh" alt="icon" className="logo" /> )}
            {/* <img style={{display:"flex", justifyContent:'center', alignItems:'center', paddingTop:'15px'}} src= {mode ? Icon1 : Icon}  width="220vw" height="70vh" alt="icon" className="logo" /> */}
                {/* <h2 className="title" style={{color:(mode) ? '#5c8d89' : '#74b49b'}}>evergreen. </h2> */}
           </div>

            <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>
            {/* <div
                className={
                    closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                }
            >
                <img src={Profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p style={{color:(mode) ? '#5c8d89' : '#74b49b'}} className="name">Hello, John👋</p> 
                    style={{color:(mode) ? 'black' : 'red'}}
                    <p style={{color:(mode) ? '#5c8d89' : '#74b49b'}}>johnsmith@gmail.com</p>
                </div>
            </div> */}
            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <img src={Dashboard} alt="dashboard" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/">dashboard</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/transactions"
                                ? "active"
                                : ""
                        }
                    >
                        <img src={Transactions} alt="transactions" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/analytics">Analytics</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/performance" ? "active" : ""
                        }
                    >
                        <img src={Performance} alt="Performance" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/performance">Bar Chart</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/news" ? "active" : ""
                        }
                    >
                        <img src={News} alt="News" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/news">Profile form</a>
                    </li>
                    {/* <li
                        className={
                            location.pathname === "/settings" ? "active" : ""
                        }
                    >
                        <img src={Settings} alt="Settings" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/settings">settings</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/support" ? "active" : ""
                        }
                    >
                        <img src={Support} alt="Support" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/support">support</a>
                    </li> */}
                    <li className={location.pathname === "/reports" ? "active" : ""}>
                        <img src={Dashboard} alt="reports" />
                        <a style={{color:(mode) ? '#5c8d89' : '#74b49b'}} href="/reports">Reports</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
