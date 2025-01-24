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
            <ul className="list-unstyled">
              {navLinks.map((curLink, index) => (
                <li className="text-decoration-underline" key={index}>
                  <NavLink
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