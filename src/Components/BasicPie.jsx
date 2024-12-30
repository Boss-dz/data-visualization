import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Papa from "papaparse";
import style from './BasicPie.module.css'

export default function BasicPie() {
  const [chartData, setChartData] = useState([]);
  const colors = [
    "#FF5713",
    "#33FF57", 
    "#3357FF", 
    "#FF33A1", 
    "#33FFF5", 
    "#F5FF33", 
    "#A133FF", 
    "#FF9C33", 
    "#33FFA1", 
    "#5733FF", 
  ];


  useEffect(() => {
    // Charger le fichier CSV
    Papa.parse("../../data/data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const rawData = result.data;

        rawData.forEach((row) => {
          row["Market Value"] = parseFloat(
            row["Market Value"]?.replace("$", "").replace(" B", "") || 0
          );
        });

        // Agréger la valeur marchande par pays
        const marketValueByCountry = rawData.reduce((acc, row) => {
          const country = row["Country"];
          const marketValue = row["Market Value"] || 0;

          if (!acc[country]) {
            acc[country] = 0;
          }
          acc[country] += marketValue;
          return acc;
        }, {});

        // Préparer les données pour le PieChart
        const formattedData = Object.entries(marketValueByCountry)
          .map(([country, value], index) => ({
            id: index,
            value,
            label:country,
          }))
          .sort((a, b) => b.value - a.value) // Trier par valeur décroissante
          .slice(0, 10); // Garder les 10 premiers pays

        setChartData(formattedData);
      },
    });
  }, []);

  return (
    <div className={style.container}>
      <PieChart
        colors={colors}
        series={[
          {
            data: chartData,
          },
        ]}
        width={900}
        height={300}
        className={style.pie}
      />
    </div>
  );
}
