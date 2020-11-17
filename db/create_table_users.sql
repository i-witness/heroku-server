CREATE TABLE users (
    user_id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    ethnicity TEXT,
    gender TEXT,
    age_years INTEGER,
    nationality TEXT,
    education_level TEXT,
    home_country TEXT,
    home_postcode TEXT
);