import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar col-md-3 col-lg-2  ${sidebarClass}`}>
      {/* ... (existing code) */}
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item text-white" key={navigationLink.id}>
              <NavLink
                to={`/${navigationLink.title.toLowerCase()}`}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? 'active' : ''
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
