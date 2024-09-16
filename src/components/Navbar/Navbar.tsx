import NavbarItem from "../Navbar/NavbarItem";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { FaMusic } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="navbar__list">
        <NavbarItem
          itemText={"Главная"}
          icon={<IoHome color="blue" size={30} />} navigatePath={"/main"}/>
        <NavbarItem
          itemText={"Профиль"}
          icon={<FaUser color="blue" size={30} />} navigatePath={"/profile"}/>
        <NavbarItem
          itemText={"Фотографии"}
          icon={<LuGalleryVerticalEnd color="blue" size={30} />} navigatePath={"#"}/>
        <NavbarItem
          itemText={"Музыка"}
          icon={<FaMusic color="blue" size={30} />} navigatePath={"#"}/>
        <NavbarItem
          itemText={"Сохраненные"}
          icon={<MdOutlineSaveAlt color="blue" size={30} />} navigatePath={"#"}/>
      </ul>
    </nav>
  );
};

export default Navbar;
