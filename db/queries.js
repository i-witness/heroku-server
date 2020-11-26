const USER_DETAILS = `
    SELECT 
        user_id AS userID,
        email_addr AS email,
        created_at AS createdAt,
        home_country AS country
    FROM 
        user_details`;

exports.userDetails = (db) => db.any(USER_DETAILS);
