const getExercices = async () => {

    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a37dd5b70amsh7ea8a1f5269a327p16d6cdjsnaa71a6469b77',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        console.log(result.length);
        return result
    } catch (error) {
        console.error(error);
        return error;
    }
}

export default getExercices;