import "./ZakazTable.css";

import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback } from "react";
import { BsFillPencilFill } from "react-icons/bs";

import deleteIcon from "../../Assets/Img/Delete.svg";

const ZakazTable = () => {
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
  return (
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
              <button className="delete-btn" >
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
          <tr>
            <td className="fructs" data-title="Mevalar">
              Model C
            </td>
            <td></td>
            <td className="icons-td">
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
  );
};

export default ZakazTable;
