import React, { useState } from "react";
import './styles/sidebar.css';

function Sidebar({apiFunction,menus}){
    const [submenuOpen, setSubmenuOpen] = useState(false);
    return(
        // LETS PLACE THE CODE HERE
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block alert alert-secondary">
        <div className="position-sticky">
            <ul className="nav flex-column">
            {menus.map(menu => (
                <li className="nav-item" key={menu.id}>
                    {menu.subMenuItems.length > 0 ? (
                        <button
                            className="nav-link nav-a mainmenu"
                            data-bs-toggle="collapse"
                            data-bs-target={`#submenu${menu.id}`}
                            aria-expanded={submenuOpen}
                            onClick={() => setSubmenuOpen(!submenuOpen)}
                        >
                            {submenuOpen ? (
                                <i className="fa fa-chevron-down ms-auto space-right"></i>
                            ) : (
                                <i className="fa fa-chevron-right ms-auto space-right"></i>
                            )}
                            {menu.menuTitle}
                        </button>
                    ) : (
                        <a className="nav-link nav-a mainmenu" href="#" onClick={()=>apiFunction(menu.id)}>
                            {menu.menuTitle}
                        </a>
                    )}
                    {menu.subMenuItems.length > 0 && (
                        <div className={`collapse ${submenuOpen ? 'show' : ''}`} id={`submenu${menu.id}`}>
                            <ul className="submenu list-unstyled fw-normal pb-1 small">
                                {menu.subMenuItems.map((subMenuItem, index) => (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link nav-a submenu-spacing" href="#">
                                            {subMenuItem}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
            </ul>
        </div>
    </nav>

    );
}

export default Sidebar;







