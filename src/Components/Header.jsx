import { useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/" && (
        <div className={style.title}>Overview :</div>
      )}
      {location.pathname === "/histogram" && (
        <div className={style.title}>
          Les pays ayant le plus grand nombre d'entreprises :
        </div>
      )}
      {location.pathname === "/pie-chart" && (
        <div className={style.title}>
          Les pays ayant la plus grande valeur marchande cumulée :
        </div>
      )}
      {location.pathname === "/scatter-chart" && (
        <div className={style.title}>
          la relation entre les ventes et les profits des entreprises :
        </div>
      )}

      <div className={style.search}>
        <CiSearch size={30} />
        <input type="text" placeholder="Search here" />
      </div>
    </div>
  );
}
