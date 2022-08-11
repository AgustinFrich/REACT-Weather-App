require("dotenv").config();

const useEnvironment = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;
  const CITY_URL = process.env.REACT_APP_CITY_URL;
  const RAPID_KEY = process.env.REACT_APP_CITY_RAPID_KEY;
  const RAPID_HOST = process.env.REACT_APP_CITY_RAPID_HOST;
  return { API_KEY, API_URL, CITY_URL, RAPID_KEY, RAPID_HOST };
};

export default useEnvironment;
