import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { db, serverTimestamp } from '../firebase'; // ✅ Correct Firestore import
import { collection, addDoc } from "firebase/firestore"; // ✅ Needed to add data

export default function Predict() {
  const [form, setForm] = useState({
    Age: "",
    Sex: "M",
    ChestPainType: "ATA",
    RestingBP: "",
    Cholesterol: "",
    FastingBS: "0",
    RestingECG: "Normal",
    MaxHR: "",
    ExerciseAngina: "N",
    Oldpeak: "",
    ST_Slope: "Up",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the prediction request
      const res = await axios.post("http://localhost:5000/predict", form);
      const predictionData = res.data;
      setResult(predictionData);

      // Save the prediction data to Firebase
      await addDoc(collection(db, "predictions"), {
        ...form,
        prediction: predictionData.prediction,
        probability: predictionData.probability,
        timestamp: serverTimestamp(), // ✅ Modular syntax
      });
    } catch (err) {
      alert("Prediction failed. Please check your backend.");
    }
  };

  const selectOptions = {
    Sex: ["M", "F"],
    ChestPainType: ["ATA", "NAP", "ASY", "TA"],
    FastingBS: ["0", "1"],
    RestingECG: ["Normal", "ST", "LVH"],
    ExerciseAngina: ["Y", "N"],
    ST_Slope: ["Up", "Flat", "Down"],
  };

  return (
    <motion.div
      className="min-h-screen p-6 bg-gray-900 text-white flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Enter Patient Details
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {Object.entries(form).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="font-medium text-gray-300 mb-2">{key}</label>

              {selectOptions[key] ? (
                <select
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                >
                  {selectOptions[key].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  required
                />
              )}
            </div>
          ))}

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Predict
          </motion.button>
        </form>

        {result && (
          <motion.div
            className="mt-8 p-6 border border-green-500 rounded-lg bg-green-800 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              {result.prediction}
            </h3>
            <p className="text-lg text-green-200">
              Probability: {(result.probability * 100).toFixed(2)}%
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
