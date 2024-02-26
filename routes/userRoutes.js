const express = require("express");

const {getCurrentWeekLeaderboard , getLastWeekCountryLeaderboard , getRankByID} = require("../controllers/userController")

const router = express.Router();

// Display current week leaderboard (Top 200)
router.get('/leaderboard/currentweek', getCurrentWeekLeaderboard);

// Display last week leaderboard given a country by the user (Top 200)
router.get('/leaderboard/lastweek/:country', getLastWeekCountryLeaderboard);

// Fetch user rank, given the userId
router.get('/rank/currentweek/:userid', getRankByID);

module.exports = router;