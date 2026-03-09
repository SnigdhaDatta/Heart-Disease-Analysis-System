from __future__ import annotations

import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

try:
    # Works when executed as package module: backend.app:app
    from .predictor import HeartPredictor
    from .schemas import PatientData
except ImportError:
    # Works when executed from backend directory: app:app
    from predictor import HeartPredictor
    from schemas import PatientData


app = FastAPI(title="Heart Disease Monitoring API (SVM)")

allowed_origins_env = os.getenv("ALLOWED_ORIGINS", "*")
allowed_origins = [o.strip() for o in allowed_origins_env.split(",") if o.strip()] or ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    predictor = HeartPredictor()
except Exception as exc:
    predictor = None
    load_error = str(exc)
else:
    load_error = None


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "Heart Disease Monitoring API is running."}


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok" if predictor is not None else "degraded"}


@app.post("/predict")
def predict(data: PatientData) -> dict[str, float | int | str | bool]:
    if predictor is None:
        raise HTTPException(status_code=500, detail=f"Error loading model assets: {load_error}")

    return predictor.predict(data.model_dump())
