import { BarChart } from "@mui/x-charts/BarChart";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import style from "./Histogramme.module.css";
import { useLocation } from "react-router-dom";

export default function Histogramme() {
  const [chartData, setChartData] = useState([]);
  const [xAxisData, setXAxisData] = useState([]);
  const location = useLocation()

  useEffect(() => {
    // Charger le fichier CSV
    Papa.parse("../../data/data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        // Extraire les pays
        const countries = result.data.map((row) => row.Country);

        // Compter les entreprises par pays
        const countryCounts = countries.reduce((acc, country) => {
          acc[country] = (acc[country] || 0) + 1;
          return acc;
        }, {});

        // Trier les pays par nombre d'entreprises (optionnel)
        const sortedData = Object.entries(countryCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10); // Garder les 10 premiers pays

        // Préparer les données pour le graphique
        setXAxisData(sortedData.map(([country]) => country));
        setChartData(sortedData.map(([, count]) => count));
      },
    });
  }, []);

  return (
    <BarChart
      className={style.container}
      series={[{ data: chartData }]}
      height={location.pathname === "/histogram" ? 300 : 400}
      width={location.pathname === "/histogram" ? 1000 : 500}
      xAxis={[{ data: xAxisData, scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
