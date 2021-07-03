let marks = document.getElementById('marks');
let marks_2 = document.getElementById('marks_2');
let names = document.getElementById('names');
let add = document.getElementById('add');
let alert = document.getElementById('alert');


let data = [];
let studentData = (e) => {
    // e.preventDefault();
    let students = {
        Name: names.value,
        // Mark: parseInt(marks.value)
        Marks: {
            English: parseInt(marks.value),
            Math: parseInt(marks_2.value)
        }
    }
    data.push(students);
    console.log(data)
    document.querySelector("#form").reset();
    let dataaa = document.getElementById('stdData');
    // dataaa.innerHTML = (data)
    alert.style.display = "block";
    dataaa.innerHTML = ("\n" + JSON.stringify(data, '\t', 1));


}
add.addEventListener('click', studentData);
