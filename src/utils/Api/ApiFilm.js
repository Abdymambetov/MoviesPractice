export async function getMovies(){
    // const dataMovies = await fetch('https://api.nomoreparties.co/beatfilm-movies')
    // .then((response) => {
    //     console.log(response.json());
    //     return response.json();
    // }).catch(e => {
    //     console.error('getMovies', e);
    // });
    // return dataMovies;
    try {
        const response = await fetch('https://api.nomoreparties.co/beatfilm-movies');
        const dataMovies = await response.json();
        return dataMovies;
    } catch (error) {
        console.error('getMovies', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
}