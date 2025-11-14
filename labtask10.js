document.getElementById('student-form').addEventListener('submit', addStudent);
document.getElementById('search').addEventListener('input', searchStudent);

function addStudent(event) {
    event.preventDefault();
    let studentName = document.getElementById('student-name').value.trim();
    if (!studentName) {
        alert("Please enter a student name");
        return;
    }
    let li = document.createElement('li');
    li.classList.add('student-item');
    let span = document.createElement('span');
    span.textContent = studentName;
    let edit = document.createElement('span');
    edit.textContent = "Edit";
    edit.classList.add('btn-edit');
    edit.addEventListener('click', () => editStudent(span));
    let del = document.createElement('span');
    del.textContent = "Delete";
    del.classList.add('btn-delete');
    del.addEventListener('click', () => li.remove());
    li.appendChild(span);
    li.appendChild(edit);
    li.appendChild(del);
    document.getElementById('student-list').appendChild(li);
    document.getElementById('student-name').value = "";
    document.getElementById('student-name').focus();
    updateCount();
}
function editStudent(spanElement) {
    let current = spanElement.textContent;
    let input = document.createElement("input");
    input.value = current;
    input.style.width = "70%";
    spanElement.replaceWith(input);
    input.focus();
    input.addEventListener("blur", () => {
        spanElement.textContent = input.value.trim() || current;
        input.replaceWith(spanElement);
    });
}
function searchStudent() {
    let searchText = document.getElementById('search').value.toLowerCase();
    let students = document.querySelectorAll('.student-item');
    students.forEach(student => {
        let name = student.firstChild.textContent.toLowerCase();
        student.style.display = name.includes(searchText) ? "flex" : "none";
    });
}
function updateCount() {
    let count = document.querySelectorAll('.student-item').length;
    document.getElementById('count').textContent = "Total Students: " + count;
}
