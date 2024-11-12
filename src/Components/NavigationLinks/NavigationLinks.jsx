import "./NavigationLinks.css"
import { NavLink } from "react-router-dom";

export const NavigationLinks = () => {
  return (
    <nav>
       <NavLink to="/home" className={ ({isActive}) =>  
      isActive ? "activeLink" : "nonactiveLink"
      } >Hlavní stránka</NavLink>
        <NavLink to="/about" className={ ({isActive}) =>  
      isActive ? "activeLink" : "nonactiveLink"
      } >O nás</NavLink>
        <NavLink to="/pobocky" className={ ({isActive}) =>  
      isActive ? "activeLink" : "nonactiveLink"
      } >Pobočky</NavLink>
        <NavLink to="/contact" className={ ({isActive}) =>  
      isActive ? "activeLink" : "nonactiveLink"
      } >Kontakt</NavLink>
    </nav>
  )
}

