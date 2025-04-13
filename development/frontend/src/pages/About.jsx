import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen w-full">
    <motion.div
      className="min-h-screen px-6 py-10 max-w-4xl mx-auto text-white bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">
        About This Project
      </h2>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">💡 Project Goal</h3>
        <p className="text-gray-300 leading-relaxed">
          This project aims to predict a patient's risk of heart disease using deep learning. 
          It allows users to input clinical parameters and instantly receive a prediction with a probability score. 
          Built for ease-of-use, it's perfect for both medical professionals and general users curious about cardiovascular health.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">📊 Dataset Used</h3>
        <p className="text-gray-300 mb-2">
          We use the <strong>Heart Disease UCI Dataset</strong> available on Kaggle. 
          It contains anonymized health records for over 900 patients, including medical metrics commonly used in cardiology.
        </p>
        <a
          href="https://www.kaggle.com/code/omarmohamedsayed/heart-failure-prediction/notebook"
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Kaggle Dataset Link
        </a>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">🧠 Dataset Features (with Detailed Explanation)</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-3">
          <li><strong>Age</strong>: Age of the patient in years.</li>

          <li><strong>Sex</strong>: Gender of the patient.
            <ul className="list-disc ml-6">
              <li><code>M</code> = Male</li>
              <li><code>F</code> = Female</li>
            </ul>
          </li>

          <li><strong>ChestPainType</strong>: Type of chest pain experienced by the patient.
            <ul className="list-disc ml-6">
              <li><code>TA</code>: Typical Angina (classic chest pain related to heart)</li>
              <li><code>ATA</code>: Atypical Angina (non-classic chest pain)</li>
              <li><code>NAP</code>: Non-Anginal Pain (not heart-related)</li>
              <li><code>ASY</code>: Asymptomatic (no pain but other symptoms)</li>
            </ul>
          </li>

          <li><strong>RestingBP</strong>: Resting Blood Pressure in mm Hg. Normal range: <code>90-120 systolic</code>.
            <ul className="list-disc ml-6">
              <li><code>&lt;90</code>: Low (Hypotension)</li>
              <li><code>90-120</code>: Normal</li>
              <li><code>120-140</code>: Elevated</li>
              <li><code>&gt;140</code>: High (Hypertension)</li>
            </ul>
          </li>

          <li><strong>Cholesterol</strong>: Serum cholesterol level (mg/dL).
            <ul className="list-disc ml-6">
              <li><code>&lt;200</code>: Desirable</li>
              <li><code>200-239</code>: Borderline High</li>
              <li><code>&gt;240</code>: High</li>
            </ul>
          </li>

          <li><strong>FastingBS</strong>: Fasting blood sugar status.
            <ul className="list-disc ml-6">
              <li><code>0</code>: &lt; 120 mg/dL (Normal)</li>
              <li><code>1</code>: &gt; 120 mg/dL (Elevated/Diabetic)</li>
            </ul>
          </li>

          <li><strong>RestingECG</strong>: ECG result at rest.
            <ul className="list-disc ml-6">
              <li><code>Normal</code>: Normal</li>
              <li><code>ST</code>: Having ST-T wave abnormality</li>
              <li><code>LVH</code>: Left Ventricular Hypertrophy</li>
            </ul>
          </li>

          <li><strong>MaxHR</strong>: Maximum Heart Rate achieved during physical activity. Normal range: <code>60-200 bpm</code>.</li>

          <li><strong>ExerciseAngina</strong>: Chest pain during exercise.
            <ul className="list-disc ml-6">
              <li><code>Y</code>: Yes (Pain present)</li>
              <li><code>N</code>: No</li>
            </ul>
          </li>

          <li><strong>Oldpeak</strong>: ST depression induced by exercise compared to rest.
            <ul className="list-disc ml-6">
              <li>Higher values suggest more severe ischemia</li>
              <li>Measured in mm of depression</li>
            </ul>
          </li>

          <li><strong>ST_Slope</strong>: Slope of the ST segment during peak exercise.
            <ul className="list-disc ml-6">
              <li><code>Up</code>: Upsloping (normal)</li>
              <li><code>Flat</code>: Flat (may suggest ischemia)</li>
              <li><code>Down</code>: Downsloping (stronger indicator of heart problems)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li><strong>Frontend:</strong> React.js, Tailwind CSS, Framer Motion</li>
          <li><strong>Backend:</strong> Flask (Python), Keras, Scikit-learn</li>
          <li><strong>Model:</strong> Deep learning Sequential model</li>
          <li><strong>Deployment:</strong> Localhost for testing; production-ready architecture</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">🚀 Features</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>Dropdown menus for categorical fields</li>
          <li>Animated transitions with Framer Motion</li>
          <li>Probability-based predictions</li>
          <li>Clean layout with mobile responsiveness</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">🔗 GitHub Repositories</h3>
        <ul className="list-disc pl-5 text-blue-400 space-y-2">
          <li>
            <a
              href="https://github.com/your-username/heart-disease-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Frontend Repository
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-username/heart-disease-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Backend Repository
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-2">📬 Contact</h3>
        <p className="text-gray-300">
          <strong>Name:</strong> Toshan kanwar (Developer)<br />
          <strong>Email:</strong>{' '}
          <a href="mailto:contact@toshankanwar.website" className="text-blue-400 underline">
          contact@toshankanwar.website
          </a><br />
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/
          </a>
        </p>
      </section>
    </motion.div>
    </div>
  );
}
