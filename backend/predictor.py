from __future__ import annotations

from pathlib import Path

import joblib
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "best_heart_model_svm.joblib"
SCALER_PATH = BASE_DIR / "heart_scaler.joblib"
COLUMNS_PATH = BASE_DIR / "heart_model_columns.joblib"

NUMERICAL_COLS = [
    "Age",
    "BP",
    "Cholesterol",
    "FBS over 120",
    "EKG results",
    "Max HR",
    "Exercise angina",
    "ST depression",
    "Number of vessels fluro",
]

CATEGORICAL_COLS = ["Sex", "Chest pain type", "Slope of ST", "Thallium"]


class HeartPredictor:
    def __init__(self) -> None:
        self.model = joblib.load(MODEL_PATH)
        self.scaler = joblib.load(SCALER_PATH)
        self.model_columns = list(joblib.load(COLUMNS_PATH))

    @staticmethod
    def _format_payload(payload: dict[str, int | float]) -> dict[str, int | float]:
        return {
            "Age": payload["Age"],
            "Sex": payload["Sex"],
            "Chest pain type": payload["Chest_pain_type"],
            "BP": payload["BP"],
            "Cholesterol": payload["Cholesterol"],
            "FBS over 120": payload["FBS_over_120"],
            "EKG results": payload["EKG_results"],
            "Max HR": payload["Max_HR"],
            "Exercise angina": payload["Exercise_angina"],
            "ST depression": payload["ST_depression"],
            "Slope of ST": payload["Slope_of_ST"],
            "Number of vessels fluro": payload["Number_of_vessels_fluro"],
            "Thallium": payload["Thallium"],
        }

    @staticmethod
    def _risk_level(prediction: int, decision_score: float) -> str:
        if prediction != 1:
            return "Stable Low Risk. Regular monitoring recommended."
        if decision_score > 1.5:
            return "Immediate Hospitalization"
        if decision_score > 0.5:
            return "High Risk. Consult a doctor immediately and go under medication."
        return "Moderate Risk. Advised to consult a doctor."

    def predict(self, payload: dict[str, int | float]) -> dict[str, float | int | str | bool]:
        formatted_data = self._format_payload(payload)
        input_df = pd.DataFrame([formatted_data])
        encoded_df = pd.get_dummies(input_df, columns=CATEGORICAL_COLS)

        for col in self.model_columns:
            if col not in encoded_df.columns:
                encoded_df[col] = 0
        encoded_df = encoded_df[self.model_columns]

        encoded_df[NUMERICAL_COLS] = self.scaler.transform(encoded_df[NUMERICAL_COLS])

        prediction = int(self.model.predict(encoded_df)[0])
        decision_score = float(self.model.decision_function(encoded_df)[0])

        risk_level = self._risk_level(prediction, decision_score)

        hospitalization_required = risk_level == "Immediate Hospitalization"
        hospitalization_note = (
            "Immediate hospitalization advised"
            if hospitalization_required
            else "No immediate hospitalization required"
        )

        return {
            "prediction": "Presence" if prediction == 1 else "Absence",
            "risk_level": risk_level,
            "confidence_score": decision_score,
            "hospitalization_required": hospitalization_required,
            "hospitalization_note": hospitalization_note,
        }
