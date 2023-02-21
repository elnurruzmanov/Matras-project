import Header from "../../Components/Header/Header";
import Location from "../../Components/Location/Location";
import "./MahsulotlarPage.css";

const Technologies = () => {
  return (
    <>
      <Header />
      <Location />
      <div className="products-bottom">
        <button className="products-btn">
          <span>Qo'shish</span>
        </button>
      </div>
    </>
  );
};
export default Technologies;