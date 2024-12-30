import { Link, useLocation } from "react-router-dom";
import style from "./Sidebar.module.css";

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style.title}>
        <img src="/public/image.svg" alt="ALT" />
        <p>Haoua</p>
      </div>
      <ul className={style.list}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? style.active : style.link}
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            to="/histogram"
            className={
              location.pathname === "/histogram" ? style.active : style.link
            }
          >
            Histogram
          </Link>
        </li>
        <li>
          <Link
            to="/pie-chart"
            className={
              location.pathname === "/pie-chart" ? style.active : style.link
            }
          >
            Pie Chart
          </Link>
        </li>
        <li>
          <Link
            to="/scatter-chart"
            className={
              location.pathname === "/scatter-chart" ? style.active : style.link
            }
          >
            Scatter Chart
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
