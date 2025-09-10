//api data requests
//tracker service
const axios = require("axios");
const BASE_URL = "https://public-api.tracker.gg/v2/";
const API_KEY = process.env.API_KEY;

const headers = {
    "TRN-Api-Key": API_KEY,
};

/**
 * @param { string } game - es: "valorant", "apex", "fortnite"
 * @param { string } username - player username
 * @return { Promise<Object>} formatted data
 */
async function getPlayerStats(game, username) {
    try {
        const url = `${BASE_URL}${game}/standard/profile/xbl/${username}`;

        const response = await axios.get(url, { headers });

        // const stats = response.data;
        // console.log(stats);
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getPlayerStats };
