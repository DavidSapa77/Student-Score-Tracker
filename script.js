const nameInput = document.querySelector("#nameInput");
const scoreInput = document.querySelector("#scoreInput");
const addBtn = document.querySelector("#addBtn");
const studentList = document.querySelector("#studentList");


const student = [];

function addStudent() {

    const name = nameInput.value;
    const score = +scoreInput.value;

    if (!name || !score) {
        return;
    }

    student.push({
        name,
        score
    })
    console.log(student);
    listStudent();
};

addBtn.addEventListener('click', (e) => {

    e.preventDefault()
    addStudent()
    nameInput.value = "";
    scoreInput.value = "";


});

function listStudent() {



    studentList.innerHTML = "";
    student.forEach((item, i) => {

        let element = document.createElement('li');
        let span = document.createElement('span');
        let btnDelete = document.createElement('button');

        element.appendChild(span);
        span.textContent = `${item.name}: ${item.score}`;
        btnDelete.style.backgroundColor = 'red';
        btnDelete.innerHTML = 'Delete';
        span.appendChild(btnDelete);

        studentList.appendChild(element);

        btnDelete.addEventListener('click', () => {

            studentList.removeChild(element);

            student.pop(i);
        })
    });




};