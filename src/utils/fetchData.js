export const exerciseOptions = {
    method: 'GET',
	headers: {
		'x-rapidapi-key': 'e1a7f35187msh167fbf683a69eefp1a52a3jsnb58efce0aac8',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) =>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}