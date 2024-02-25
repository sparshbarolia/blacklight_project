const express = require("express");

const {getCurrentWeekLeaderboard , getLastWeekCountryLeaderboard , getRankByID} = require("../controllers/userController")

const router = express.Router();


router.get('/leaderboard/currentweek', getCurrentWeekLeaderboard);

router.get('/leaderboard/lastweek/:country', getLastWeekCountryLeaderboard);

router.get('/rank/currentweek/:userid', getRankByID);

module.exports = router;