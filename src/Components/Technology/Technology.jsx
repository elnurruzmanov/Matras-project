import "./Technology.css";
import deleteIcon from "../../Assets/Img/Delete.svg";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import Header from "../Header/Header";

const Technology = () => {
  const ref = createRef();
  const scrollToBottomOfList = useCallback(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [ref]);

  const handleButtonClick = useCallback(() => {
    scrollToBottomOfList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
   <Header />
    <main className="tecnology-main" id="#technology">
      
      <table>
        <thead>
          <tr>
            <th>Nomlari</th>
            <th>Matn</th>
            <th>Video </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody className="tbody" ref={ref}>
          <tr>
            <td data-title="Product names">Menory foam</td>
            <td data-title="Types">Enim urna...</td>
            <td data-title="Prise">youtube.com...</td>
            
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td data-title="Product names">Menory foam</td>
            <td data-title="Types">Enim urna...</td>
            <td data-title="Prise">youtube.com...</td>
            
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td data-title="Product names">Menory foam</td>
            <td data-title="Types">Enim urna...</td>
            <td data-title="Prise">youtube.com...</td>
            
            <td>
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td data-title="Product names">Menory foam</td>
            <td data-title="Types">Enim urna...</td>
            <td data-title="Prise">youtube.com...</td>
            
            <td className="delete-matras">
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" className="delete-icon" />
              </button>
              <BsFillPencilFill className="changeText" />
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
        </tbody>
      </table>
    </main>
    </>
  );
};

export default Technology;
