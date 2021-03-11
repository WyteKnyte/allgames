import date from 'date-and-time';

const base_url = 'https://api.rawg.io/api/';
const now = new Date();
const currentMonth = date.format(now, 'MM');
const currentDay = date.format(now, 'DD');
const currentYear = date.format(now, 'Y');

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
