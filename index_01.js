// let names = document.getElementById("names");
// let marks = document.getElementById("marks");
// let add = document.getElementById("add");
// let data = document.getElementsByClassName("data");


// let student = [];
// let studentData = {
//     stdName: names.value,
//     stdMarks: marks.value
// }
// student.push(studentData);
// add.addEventListener('click', () => {
//     console.log(student);

// })


let movies = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev) => {
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value
    }
    movies.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added', { movies });
    let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
    pre.textContent = JSON.stringify(movies);

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(movies));
}
btn = document.getElementById('btn');
btn.addEventListener('click', addMovie);
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn').addEventListener('click', addMovie);
// });