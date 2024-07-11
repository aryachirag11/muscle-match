export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const respone = await fetch(url, options);
    const data = await respone.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
