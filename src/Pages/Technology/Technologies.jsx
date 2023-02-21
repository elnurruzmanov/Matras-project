import Header from "../../Components/Header/Header";
import Technology from "../../Components/Technology/Technology";
import "./MahsulotlarPage.css";

const Technologies = () => {
  return (
    <>
      <Header />
      <Technology />
      <div className="products-bottom">
        <button className="products-btn">
          <span>Qo'shish</span>
        </button>
      </div>
    </>
  );
};
export default Technologies;
