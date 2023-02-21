import "./Sidebar.css";
import MatrasLogo from "../../Assets/Img/matras.svg";
import buyurtma from "../../Assets/Img/buyurtma.svg";
import mahsulot from "../../Assets/Img/mahsulot.svg";
import { Link } from "react-router-dom";
import { IoMdReorder } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosConstruct } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import Technology from "../Technology/Technology";


const Sidebar = () => {
  const handleAddClass = (event) => {
    const links = document.querySelectorAll(".sidebar-active");

    links.forEach((link) => {
      link.classList.remove("sidebar-active");
    });
    event.currentTarget.classList.add("sidebar-active");
  };

  return (
    <section className="sidebar">
      <div className="sidebar-top">
        <button className="menu-btn">
          <IoMdReorder className="menu-icon" />
        </button>
        <Link to="/qwewe" className="sidebar-logo">
          <img
            src={MatrasLogo}
            alt="basco logosi bor"
            className="sidebar-img"
          />
        </Link>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link
            onClick={handleAddClass}
            to="/buyurtmalar"
            className="sidebar-link sidebar-active"
          >
            <img src={buyurtma} alt="buyurtma" className="sidebar-icon" />
            <p className="sidebar-title">Буюртмалар</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link onClick={handleAddClass} to="/akt" className="sidebar-link">
            <BsFillPersonFill />
            <p className="sidebar-title">Customers</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link onClick={handleAddClass} to="/zakaz" className="sidebar-link">
            <IoMdReorder className="zakaz-icon" />
            <p className="sidebar-title">Toifalar</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            onClick={handleAddClass}
            to="/mahsulotlar"
            className="sidebar-link"
          >
            <img src={mahsulot} alt="mahsulot" className="sidebar-icon" />
            <p className="sidebar-title">Mahsulotlar</p>
          </Link>
        </li>

        <li className="sidebar-item">
          <Link
            onClick={handleAddClass}
            to="/technology"
            className="sidebar-link"
          >
            
            <IoIosConstruct />
            <p className="sidebar-title">Texnologiyalar </p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            onClick={handleAddClass}
            to="/location"
            className="sidebar-link"
          >
            
            <ImLocation />
            <p className="sidebar-title">Location </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
