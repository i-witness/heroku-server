CREATE TABLE user_details (
    user_id TEXT PRIMARY KEY NOT NULL,
    email_addr TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL, -- Date and time in UTC.
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
    '2020-11-26 17:13:56',
    'NL'
);

INSERT INTO user_details (
    user_id,
    email_addr,
    created_at,
    home_country
) VALUES (
    'sweat-drag-meal-wheel',
    'dkucharski@hotmail.co.uk',
    '2020-11-26 17:18:03',
    'UK'
);