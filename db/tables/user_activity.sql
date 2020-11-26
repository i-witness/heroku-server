CREATE TABLE user_activity (
    activity_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id TEXT NOT NULL,
    active_at TEXT NOT NULL, -- Date in simplified extended ISO format (ISO 8601)
    located_at TEXT NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
            REFERENCES user_details(user_id)
);

INSERT INTO user_activity (
    user_id,
    active_at,
    located_at
) VALUES (
    'wrap-pest-blunt-route',
    '2011-10-05T14:48:00.000Z',
    'Beursstraat 6, 1012 JV Amsterdam, Netherlands'
);