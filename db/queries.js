const USER_DETAILS = `
    SELECT 
        user_id AS "userID",
        email_addr AS "email",
        created_at AS "createdAt",
        home_country AS "country"
    FROM 
        user_details`;

exports.userDetails = (db) => db.any(USER_DETAILS);

const USER_ACTIVITY = `
    SELECT 
        user_id AS "userID",
        activity_id AS "activityID",
        active_at AS "activeAt",
        located_at AS "locatedAt"
    FROM 
        user_activity`;

exports.userActivity = (db) => db.any(USER_ACTIVITY);
