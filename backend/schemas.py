from pydantic import BaseModel


class PatientData(BaseModel):
    Age: int
    Sex: int
    Chest_pain_type: int
    BP: int
    Cholesterol: int
    FBS_over_120: int
    EKG_results: int
    Max_HR: int
    Exercise_angina: int
    ST_depression: float
    Slope_of_ST: int
    Number_of_vessels_fluro: int
    Thallium: int
