CREATE TABLE user_details (
    user_id TEXT PRIMARY KEY NOT NULL,
    email_addr TEXT NOT NULL,
    created_at TEXT NOT NULL, -- Date in simplified extended ISO format (ISO 8601)
    home_country TEXT NOT NULL
);

INSERT INTO user_details (
    user_id,
    email_addr,
    created_at,
    home_country
) VALUES (
    'wrap-pest-blunt-route',
    'trashe.racer+iwitness@protonmail.com',
    '2011-10-05T14:48:00.000Z',
    'NL'
);
