import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import BasicPie from "../Components/BasicPie";
import Caption from "../Components/Caption";
import Description from "../Components/Description";
import style from "./PieChartPage.module.css";

export default function PieChartPage() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.page}>
        <Header />
        <div className={style.details}>
          <BasicPie />
          <Caption>
            Diagramme circulaire montrant les 10 pays ayant la plus grande
            valeur marchande cumulée parmi les entreprises mondiales.
          </Caption>
          <Description>
            Ce graphique met en évidence les pays qui dominent l'économie
            mondiale en termes de valeur marchande des entreprises. Il offre une
            vue comparative des contributions nationales et permet d'identifier
            les leaders économiques mondiaux. Les segments les plus grands
            indiquent les pays ayant la plus forte concentration de grandes
            entreprises en termes de valeur marchande.
          </Description>
        </div>
      </div>
    </div>
  );
}
