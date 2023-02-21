import Header from "../../Components/Header/Header";
import MahsulotlarTable from "../../Components/MahsulotlarTable/MahsulotlarTable";
import "./MahsulotlarPage.css";

const MahsulotlarPage = () => {
  return (
    <>
      <Header />
      <MahsulotlarTable />
      <div className="products-bottom">
        <button className="products-btn">
          <span>Qo'shish</span>
        </button>
      </div>
    </>
  );
};
export default MahsulotlarPage;
