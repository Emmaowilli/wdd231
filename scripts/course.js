const courses = [
    { name: 'CSE 110', credits: 3, completed: false },
    { name: 'WDD 130', credits: 3, completed: true },
    { name: 'CSE 111', credits: 3, completed: false },
    { name: 'CSE 210', credits: 3, completed: true },
    { name: 'WDD 131', credits: 3, completed: false },
    { name: 'WDD 231', credits: 3, completed: false }
];

document.getElementById('all-courses').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('cse'));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('wdd'));

function displayCourses(filter) {
    const coursesDiv = document.getElementById('courses');
    coursesDiv.innerHTML = '';
    let filteredCourses = courses;
    if (filter === 'cse') {
        filteredCourses = courses.filter(c => c.name.startsWith('CSE'));
    } else if (filter === 'wdd') {
        filteredCourses = courses.filter(c => c.name.startsWith('WDD'));
    }
    filteredCourses.forEach(course => {
        const courseElem = document.createElement('div');
        courseElem.classList.add('course');
        if (course.completed) {
            courseElem.classList.add('completed');
        }
        courseElem.textContent = course.name;
        coursesDiv.appendChild(courseElem);
    });
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

displayCourses('all');