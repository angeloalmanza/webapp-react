import { NavLink } from "react-router-dom";

const HeaderLayout = () => {
    const navLinks = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/movies",
            title: "Film",
        },
    ];

    return (
        <>
            <ul>
              {navLinks.map((curLink, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={curLink.path}
                  >
                    {curLink.title}
                  </NavLink>
                </li>
              ))}
            </ul>
        </>
    )
}

export default HeaderLayout;