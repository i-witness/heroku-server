const USER_ACTIVITY = `
    INSERT
    INTO user_activity (
        user_id,
        active_at,
        located_at
    ) VALUES (
        $1, $2, $3
    )
`;

exports.userActivity = (db, userID, locatedAt) => {
  const now = new Date();
  db.none(USER_ACTIVITY, [userID, now.toISOString(), locatedAt]);
};
