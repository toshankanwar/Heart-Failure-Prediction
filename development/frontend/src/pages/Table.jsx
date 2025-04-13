import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function Table() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "predictions"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPredictions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const headers = [
    "Age", "Sex", "Chest Pain", "RestingBP", "Cholesterol",
    "FastingBS", "RestingECG", "MaxHR", "ExerciseAngina", "Oldpeak",
    "ST_Slope", "prediction", "probability", "timestamp"
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Prediction Results</h2>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-xl p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 text-left capitalize">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction) => (
              <tr key={prediction.id}>
                <td className="px-4 py-2">{prediction.Age}</td>
                <td className="px-4 py-2">{prediction.Sex}</td>
                <td className="px-4 py-2">{prediction.ChestPainType}</td>
                <td className="px-4 py-2">{prediction.RestingBP}</td>
                <td className="px-4 py-2">{prediction.Cholesterol}</td>
                <td className="px-4 py-2">{prediction.FastingBS}</td>
                <td className="px-4 py-2">{prediction.RestingECG}</td>
                <td className="px-4 py-2">{prediction.MaxHR}</td>
                <td className="px-4 py-2">{prediction.ExerciseAngina}</td>
                <td className="px-4 py-2">{prediction.Oldpeak}</td>
                <td className="px-4 py-2">{prediction.ST_Slope}</td>
                <td className="px-4 py-2">{prediction.prediction}</td>
                <td className="px-4 py-2">
                  {(prediction.probability * 100).toFixed(2)}%
                </td>
                <td className="px-4 py-2">
                  {prediction.timestamp?.toDate
                    ? new Date(prediction.timestamp.toDate()).toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Button */}
      <button
        className="mt-6 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => {
          const csvHeaders = headers.join(",");
          const csvContent =
            csvHeaders +
            "\n" +
            predictions
              .map((prediction) =>
                [
                  prediction.Age,
                  prediction.Sex,
                  prediction.ChestPainType,
                  prediction.RestingBP,
                  prediction.Cholesterol,
                  prediction.FastingBS,
                  prediction.RestingECG,
                  prediction.MaxHR,
                  prediction.ExerciseAngina,
                  prediction.Oldpeak,
                  prediction.ST_Slope,
                  prediction.prediction,
                  `${(prediction.probability * 100).toFixed(2)}%`,
                  prediction.timestamp?.toDate
                    ? new Date(prediction.timestamp.toDate()).toLocaleString()
                    : "N/A",
                ].join(",")
              )
              .join("\n");

          const blob = new Blob([csvContent], { type: "text/csv" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "predictions.csv";
          link.click();
        }}
      >
        Download Data as CSV
      </button>
    </div>
  );
}
