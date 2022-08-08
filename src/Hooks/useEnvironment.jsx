require("dotenv").config();

const useEnvironment = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    return { API_KEY };
}

export default useEnvironment