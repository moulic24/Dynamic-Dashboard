
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Performance from "./pages/Performance";
import Analytics from "./pages/Analytics/Analytics";
import News from "./pages/News/News";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Reports from "./pages/Reports/Reports";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
function App() {
  // const location = useLocation();
  const [closeMenu, setCloseMenu] = useState(false);  
  const [mode, setMode] = useState(() => {
        const appmode = localStorage.getItem('appmode');
        return appmode !== null ? JSON.parse(appmode) : false;
      });
      const changeMode = () =>{
        setMode((prevMode) => {
          const newMode = !prevMode;
          localStorage.setItem('appmode', newMode);
          return newMode;
        });
      }
  
      const handleCloseMenu = () => {
          setCloseMenu(!closeMenu);
      };
    return (
        <Router>
            <div className="App">
                <Topbar closeMenu={closeMenu} mode={mode} changeMode={changeMode}/>
                <Sidebar  closeMenu={closeMenu} handleCloseMenu={handleCloseMenu} mode={mode}/>

                <Routes>
                    <Route path="/" element={<Dashboard closeMenu={closeMenu} mode={mode} />} />
                    <Route path="/news" element={<News  mode={mode} closeMenu={closeMenu} />} />
                    <Route path="/performance" element={<Performance closeMenu={closeMenu} mode={mode} />} />
                    <Route path="/settings" element={<Settings mode={mode} changeMode={changeMode}/>} />
                    <Route path="/support" element={<Support mode={mode} changeMode={changeMode}/>} />
                    <Route path="/analytics" element={<Analytics closeMenu={closeMenu} mode={mode} />} />
                    <Route path="/reports" element={<Reports mode={mode} closeMenu={closeMenu}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
