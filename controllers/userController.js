const UserDB = require("../connection");

const getCurrentWeekLeaderboard = (req, res) => {

    const query = 'SELECT * FROM userScore WHERE WEEK(TimeStamp)=WEEK(CURRENT_TIMESTAMP) ORDER BY score desc LIMIT 200';

    try{
        UserDB.query(query, (error, results, fields) => {
            if (error) {
                console.error('Error executing query: ' + error.stack);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.json(results);
        });
    }
    catch(err){
        console.error('Error executing query: ' + error.stack);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const getLastWeekCountryLeaderboard = (req, res) => {
    //data is available for following countries
    //india , australia , bangladesh , brazil , canada , china , egypt , france , hongkong , japan , mauritius , mexico , newzealand , pakistan , srilanka , usa , zimbabwe
    const { country } = req.params;

    const countryObj = {india: "IN" , australia:"AU" , bangladesh:"BD" , brazil:"BR" , canada:"CA" , china:"CN" , egypt:"EG" , france:"FR" , hongkong:"HK" , japan:"JP" , mauritius:"MU" , mexico:"MX" , newzealand:"NZ" , pakistan:"PK" , srilanka:"LK" , usa:"US" , zimbabwe:"ZW"};

    const query = `SELECT * FROM userScore WHERE WEEK(TimeStamp)=WEEK(CURRENT_TIMESTAMP)-1 AND Country=? ORDER BY score desc LIMIT 200`;

    try{
        UserDB.query(query, [countryObj[country]], (error, results, fields) => {
            if (error) {
                console.error('Error executing query: ' + error.stack);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.json(results);
        });
    }
    catch(err){
        console.error('Error executing query: ' + error.stack);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const getRankByID = (req, res) => {
    const { userid } = req.params;

    const query = `SELECT (COUNT(UID)+1) as "RANK" FROM userScore WHERE Score > (SELECT Score FROM userScore WHERE UID=?) AND WEEK(TimeStamp)=WEEK(CURRENT_TIMESTAMP);`;

    try{
        UserDB.query(query, [userid], (error, results, fields) => {
            if (error) {
                console.error('Error executing query: ' + error.stack);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.json(results);
        });
    }
    catch(err){
        console.error('Error executing query: ' + error.stack);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getCurrentWeekLeaderboard,
    getLastWeekCountryLeaderboard,
    getRankByID
};