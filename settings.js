var dotenv = require('dotenv');

dotenv.load();

var settings = {};

settings.riot = {
  apiKey: process.env.RIOT_API_KEY,
  url: process.env.RIOT_API_URL || 'https://na.api.pvp.net/api'
};

settings.app = {
	port: process.env.PORT || 8080
}

module.exports = settings;