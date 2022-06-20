export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'cb270d8049mshff7f6c4f3736bd0p18f73djsn9e25973da165',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData = async ( url, options) => {

const response = await fetch(url, options);
const data = await response.json();

return data;
}