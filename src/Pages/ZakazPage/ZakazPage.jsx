import ZakazHeader from "../../Components/ZakazHeader/ZakazHeader";
import ZakazTable from "../../Components/ZakazTable/ZakazTable";
import "../../Components/ZakazTable/ZakazTable.css";
import { useState } from "react";

const ZakazPage = () => {
  const [accountModal, setAccountModal] = useState(false);
  function openAccountModal() {
    setAccountModal(!accountModal);
  }
  return (
    <div className="zakaz-page">
      <ZakazHeader />
      <ZakazTable />

      <button className="zakaz-button" onClick={() => openAccountModal()}>
        <span>Qo'shish</span>
      </button>
    </div>
  );
};

export default ZakazPage;
