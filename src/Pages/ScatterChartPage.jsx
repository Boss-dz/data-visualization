import style from './ScatterChartPage.module.css'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import BasicScatter from '../Components/BasicScatter'
import Caption from '../Components/Caption'
import Description from '../Components/Description'
export default function ScatterChartPage() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.page}>
        <Header />
        <div className={style.details}>
          <BasicScatter />
          <Caption>
            Le diagramme de dispersion illustre la relation entre les ventes
            (Sales) et les profits (Profit) des entreprises.
          </Caption>
          <Description>
            L'objectif principal de ce diagramme de dispersion est d'explorer et
            de comprendre la relation entre les ventes (chiffre d'affaires) et
            les profits (bénéfices) des entreprises. En visualisant ces deux
            variables, ce graphique permet d'identifier si les entreprises qui
            réalisent des ventes élevées génèrent également des profits
            importants, ou si d'autres facteurs influencent leur rentabilité.
          </Description>
        </div>
      </div>
    </div>
  );
}
