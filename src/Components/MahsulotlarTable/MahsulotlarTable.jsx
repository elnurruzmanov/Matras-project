import "./MahsulotlarTable.css";
import deleteIcon from "../../Assets/Img/Delete.svg";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback } from "react";
import { BsFillPencilFill } from "react-icons/bs";

const MahsulotlarTable = () => {
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
    <main className="mahsulotlar-main">
      <table>
        <thead>
          <tr>
            <th>Mahsulot nomlari</th>
            <th>Toifalar</th>
            <th>Narxi </th>
            <th>Yuklama</th>
            <th>Razmeri</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="tbody" ref={ref}>
          <tr>
            <td data-title="Product names">Lux Soft Memory</td>
            <td data-title="Types">Model C</td>
            <td data-title="Prise">1 600 000</td>
            <td data-title="">150 kg</td>
            <td className="narxi">200 x 134 x 10</td>
            <td className="count-td">
              <input type="checkbox" className="toggle" />
            </td>
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
          </tr>
          <tr>
            <td data-title="Product names">Lux Soft Memory</td>
            <td data-title="Types">Model C</td>
            <td data-title="Prise">1 600 000</td>
            <td data-title="">150 kg</td>
            <td className="narxi">200 x 134 x 10</td>
            <td className="count-td">
              <input type="checkbox" className="toggle" />
            </td>
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
          </tr>
          <tr>
            <td data-title="Product names">Lux Soft Memory</td>
            <td data-title="Types">Model C</td>
            <td data-title="Prise">1 600 000</td>
            <td data-title="">150 kg</td>
            <td className="narxi">200 x 134 x 10</td>
            <td className="count-td">
              <input type="checkbox" className="toggle" />
            </td>
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
          </tr>
          <tr>
            <td data-title="Product names">Lux Soft Memory</td>
            <td data-title="Types">Model C</td>
            <td data-title="Prise">1 600 000</td>
            <td data-title="">150 kg</td>
            <td className="narxi">200 x 134 x 10</td>
            <td className="count-td">
              <input type="checkbox" className="toggle" />
            </td>
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default MahsulotlarTable;
