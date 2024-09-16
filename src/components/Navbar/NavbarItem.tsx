import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
interface INavbarItemProps {
  itemText: string,
  icon: ReactNode,
  navigatePath: string,
}

const NavbarItem = ({itemText, icon, navigatePath }: INavbarItemProps) => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate(navigatePath)
  }

    return(
        <li className="navbar__item" onClick={clickHandler}>
            {icon}
        <p className="item__name">{itemText}</p>
      </li>
    )
}

export default NavbarItem