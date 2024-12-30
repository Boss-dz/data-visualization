import { ScatterChart } from "@mui/x-charts/ScatterChart";
import Papa from "papaparse";
import { useEffect,useState } from "react";
import style from './BasicScatter.module.css'
import { useLocation } from "react-router-dom";

export default function SalesProfitScatter() {
  const [data, setData] = useState([]);
  const location = useLocation()

  useEffect(() => {
    // Load and parse the CSV file
    const fetchData = async () => {
      const response = await fetch(
        "../../data/data.csv"
      );
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const cleanedData = result.data.map((row, index) => {
            const cleanValue = (value) => {
              if (typeof value === "string") {
                value = value.replace("$", "").replace(",", "").trim();
                if (value.includes("B"))
                  return parseFloat(value.replace("B", "")) * 1e9;
                if (value.includes("M"))
                  return parseFloat(value.replace("M", "")) * 1e6;
              }
              return parseFloat(value) || 0;
            };

            return {
              id: index.toString(),
              x: cleanValue(row["Sales"]),
              y: cleanValue(row["Profit"]),
            };
          });

          setData(
            cleanedData.filter((point) => point.x && point.y).slice(0, 10)
          );
        },
      });
    };

    fetchData();
  }, []);

  return (
    <ScatterChart
      className={style.container}
      margin={{ left: 60 }}
      width={location.pathname === "/scatter-chart" ? 1000 : 600}
      height={location.pathname === "/scatter-chart" ? 300 : 400}
      series={[
        {
          label: "Sales vs Profit",
          data: data,
        },
      ]}
      xAxis={[
        {
          scaleType: "linear",
          valueFormatter: (value) => `$${(value / 1e9).toFixed(1)}B`,
          label: "Sales (in billions)",
        },
      ]}
      yAxis={[
        {
          scaleType: "linear",
          valueFormatter: (value) => `$${(value / 1e9).toFixed(1)}B`,
          label: "",
          labelPlacement: "outside",
        },
      ]}
    />
  );
}
