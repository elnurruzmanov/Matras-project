import { createRef, useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import "./Table.css";
import Arrow from "../../Assets/Img/Arrow.png";
const Table = () => {
  const [tableModal, setTableModal] = useState(false);

  function openTableModal() {
    setTableModal(!tableModal);
  }

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
    <main className="buyurtmalar-main">
      <table>
        <thead className="zakaz-thead">
          <tr>
            <th>ID</th>
            <th>Ismi</th>
            <th>Telefon Raqami</th>
            <th>Mahsulot nomlari</th>
            <th>Miqdor</th>
            <th>Qayta aloqa</th>
          </tr>
        </thead>

        <tbody className="tbody" ref={ref}>
          <tr className="tr" id="tr1">
            <td data-title="ID">7</td>
            <td data-title="Sana">Jenny Wilson</td>
            <td data-title="Tovarlar Soni">+998 90 123 45 67</td>
            <td data-title="Jami Summa">Ortopedik Eko matras</td>
            <td className="select">
              {/* <button className="buttoncha button1">
                <span>Буюртма бериш</span>
              </button> */}
              4
            </td>
            <td>
              {/* <button className="table-completed--btn">
                <span
                  onClick={() => openTableModal()}
                  className="buyurtma-completed"
                >
                  Completed
                </span>
              </button> */}
              <input type="checkbox" className="toggle" />
            </td>
          </tr>
          <tr className="tr" id="tr1">
            <td data-title="ID">6</td>
            <td data-title="Sana">Robert Fox</td>
            <td data-title="Tovarlar Soni">+998 90 123 45 67</td>
            <td data-title="Jami Summa">Ortopedik Eko matras</td>
            <td className="select">
              {/* <button className="buttoncha button1">
                <span>Буюртма бериш</span>
              </button> */}
              4
            </td>
            <td>
              {/* <button className="table-uncompleted--btn">
                <span
                  onClick={() => openTableModal()}
                  className="buyurtma-uncompleted"
                >
                  UnCompleted
                </span>
              </button> */}
              <input type="checkbox" className="toggle" />
            </td>
          </tr>
          <tr className="tr" id="tr1">
            <td data-title="ID">3</td>
            <td data-title="Sana">Wade Warren</td>
            <td data-title="Tovarlar Soni">+998 90 123 45 67</td>
            <td data-title="Jami Summa">Ortopedik Eko matras</td>
            <td className="select">4</td>
            <td>
              {" "}
              <input type="checkbox" className="toggle" />
            </td>
          </tr>
          <tr className="tr" id="tr1">
            <td data-title="ID">3</td>
            <td data-title="Sana">Jane Cooper</td>
            <td data-title="Tovarlar Soni">+998 90 123 45 67</td>
            <td data-title="Jami Summa">Ortopedik Eko matras</td>
            <td className="select">4</td>
            <td>
              <input type="checkbox" className="toggle" />
            </td>
          </tr>
        </tbody>
      </table>

      <Modal className="modal table-modal" show={tableModal} w={800} mh={300}>
        <button
          className=" close-btn modalClose-btn"
          onClick={() => setTableModal()}
        >
          &times;
        </button>
        <ul className="modalTable-list">
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mahsulot turi</h2>
            <p className="modalTable-text">Tovar nomi</p>
            <p className="modalTable-olchov">Ostatka</p>
            <p className="modalTable-cost">Narxi</p>
            <p className="modalTable-count">Soni</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kdg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
          <li className="modalTable-item">
            <h2 className="modalTable-title">Mevalar</h2>
            <p className="modalTable-text">Olchalar</p>
            <p className="modalTable-olchov">105 Kg</p>
            <p className="modalTable-cost">1 600 000 сўм</p>
            <p className="modalTable-count">3</p>
          </li>
        </ul>
      </Modal>
    </main>
  );
};

export default Table;
