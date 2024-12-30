import Header from "../Components/Header";
import Histogramme from "../Components/Histogramme";
import Sidebar from "../Components/Sidebar";
import Caption from "../Components/Caption";
import style from "./HistogrammePage.module.css";
import Description from "../Components/Description";
export default function HistogrammePage() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.page}>
        <Header />
        <div className={style.details}>
          <Histogramme />
          <Caption>
            Histogramme montrant les 10 pays ayant le plus grand nombre
            d'entreprises parmi les 2000 plus grandes entreprises mondiales.
          </Caption>
          <Description>
            L'objectif de ce diagramme est de fournir une vue comparative des
            pays les plus représentés dans le classement des grandes entreprises
            mondiales. Cela permet d'identifier les nations qui dominent
            l'économie mondiale en termes de nombre d'entreprises majeures. Les
            pays sont triés par ordre décroissant, avec le pays ayant le plus
            grand nombre d'entreprises à gauche, et les autres suivant en ordre
            décroissant vers la droite.
          </Description>
        </div>
      </div>
    </div>
  );
}
