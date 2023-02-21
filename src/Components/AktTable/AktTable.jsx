import "./AktTable.css";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback, useState } from "react";
import deleteIcon from "../../Assets/Img/Delete.svg";

import baseUrl from "../../api/api";
const AktTable = () => {
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

  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      window.localStorage.setItem("login", "+998913611633");
      const login = window.localStorage.getItem("login");

      console.log(firstDate, secondDate, login);
      const response = await baseUrl.post(
        "/webmijozsverka",
        {
          login,
          firstDate,
          secondDate,
        },
        {
          headers: {
            authorization: "Basic bW9iaWw6MTIz",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="akt-main">
        <table class="StandardTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sana</th>
              <th>Telefon Raqami</th>
              <th>Qayta aloqa</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="tbody" ref={ref}>
            <tr>
              <td data-title="ID">6</td>
              <td data-title="Sana">12:13-12.05.2021</td>
              <td data-title="number">+998 90 123 45 67</td>
              <td>
                <input type="checkbox" className="toggle" />
              </td>
              <td>
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td data-title="ID">7</td>
              <td data-title="Sana">12:13-12.05.2021</td>
              <td data-title="izoh">+998 90 123 45 67</td>
              <td>
                <input type="checkbox" className="toggle" />
              </td>
              <td>
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td data-title="ID">3</td>
              <td data-title="Sana">12:13-12.05.2021</td>
              <td data-title="izoh">+998 90 123 45 67</td>
              <td>
                <input type="checkbox" className="toggle" />
              </td>
              <td>
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td data-title="ID">3</td>
              <td data-title="Sana">12:13-12.05.2021</td>
              <td data-title="izoh">+998 90 123 45 67</td>
              <td>
                <input type="checkbox" className="toggle" />
              </td>
              <td>
                <button className="delete-btn">
                  <img src={deleteIcon} alt="delete" className="delete-icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};
export default AktTable;
