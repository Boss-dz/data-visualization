import BasicScatter from "../Components/BasicScatter";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Histogramme from "../Components/Histogramme";
import Sidebar from "../Components/Sidebar";
import style from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.page}>
        <Header />
        <div className={style.charts}>
          <div className={style.chartContainer}>
            <Histogramme />
            <Button nav='/histogram'>Details</Button>
          </div>
          <div className={style.chartContainer}>
            <BasicScatter />
            <Button nav='/scatter-chart'>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
