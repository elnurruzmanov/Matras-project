import "./Location.css";

import { createRef, useCallback } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";

import deleteIcon from "../../Assets/Img/Delete.svg";
import Header from "../Header/Header";

const Location = () => {
  const ref = createRef();
  const scrollToBottomOfList = useCallback(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [ref]);

  const handleButtonClick = useCallback(() => {
    scrollToBottomOfList();
  }, []);

  const [accountModal, setAccountModal] = useState(false);
  function openAccountModal() {
    setAccountModal(!accountModal);
  }

  let [array, setArray]=useState([])
  let [inputData, setInputData]=useState({name:'', number:''})
  
  function data(e){
    setInputData({...setInputData, [e.target.name]:e.target.value})
  }
  return (
    <>
      <Header />
      <main className="zakaz-main">
        <table>
          <thead>
            <tr>
              <th>Toifalar</th>
            </tr>
          </thead>

          <tbody className="tbody" ref={ref}>
            <tr>
              <td className="fructs" data-title="Mevalar">
                Model C
              </td>
              <td></td>
              <td className="icons">
                <button
                  className="delete-btn"
                  onChange={data}
                  
                >
                
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
                <BsFillPencilFill />
              </td>
            </tr>
            <tr>
              <td className="fructs" data-title="Mevalar">
                Model C
              </td>
              <td></td>
              <td className="icons" onChange={data} >
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
                <BsFillPencilFill />
              </td>
            </tr>
            <tr>
              <td className="fructs" data-title="Mevalar">
                Model C
              </td>
              <td></td>
              <td className="icons-td"  >
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
                <BsFillPencilFill />
              </td>
            </tr>
            <tr>
              <td className="fructs" data-title="Mevalar">
                Model C
              </td>
              <td></td>
              <td className="icons">
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
                <BsFillPencilFill />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Location;
