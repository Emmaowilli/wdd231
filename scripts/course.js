const courses = [
    { name: 'CSE 110', credits: 3, completed: false, current: false },
    { name: 'WDD 130', credits: 3, completed: true, current: false },
    { name: 'CSE 111', credits: 3, completed: false, current: false },
    { name: 'CSE 210', credits: 3, completed: true, current: false },
    { name: 'WDD 131', credits: 3, completed: false, current: false },
    { name: 'WDD 231', credits: 3, completed: false, current: true }
];

document.getElementById('all-courses').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('cse'));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('wdd'));

function displayCourses(filter) {
    console.log('Displaying courses with filter:', filter);
    const coursesDiv = document.getElementById('courses');
    coursesDiv.innerHTML = '';
    let filteredCourses = courses;
    if (filter === 'cse') {
        filteredCourses = courses.filter(c => c.name.startsWith('CSE'));
    } else if (filter === 'wdd') {
        filteredCourses = courses.filter(c => c.name.startsWith('WDD'));
    }
    filteredCourses.forEach(course => {
        const courseElem = document.createElement('button');
        courseElem.classList.add('course');
        if (course.completed) {
            courseElem.classList.add('completed');
        }
        if (course.current) {
            courseElem.classList.add('current');
        }
        courseElem.textContent = course.name;
        coursesDiv.appendChild(courseElem);
    });
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    console.log('Total credits:', totalCredits);
    document.getElementById('total-credits').textContent = totalCredits;
}

displayCourses('all');