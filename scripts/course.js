document.addEventListener('DOMContentLoaded', () => {
    const courseList = [
        { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
        { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
        { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: false },
        { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: false },
        { subject: "WDD", number: 131, title: "Dynamic Web Design", credits: 2, completed: false },
        { subject: "WDD", number: 231, title: "Web Frontend Development I", credits: 2, completed: false }
    ];

    const courseContainer = document.getElementById('course-list');
    const allCoursesBtn = document.getElementById('all-courses');
    const wddCoursesBtn = document.getElementById('wdd-courses');
    const cseCoursesBtn = document.getElementById('cse-courses');

    function displayCourses(courses) {
        courseContainer.innerHTML = '';
        courses.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            card.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                <p>${course.title}</p>
            `;
            courseContainer.appendChild(card);
        });
    }

    allCoursesBtn.addEventListener('click', () => displayCourses(courseList));
    wddCoursesBtn.addEventListener('click', () => {
        const wddCourses = courseList.filter(course => course.subject === 'WDD');
        displayCourses(wddCourses);
    });
    cseCoursesBtn.addEventListener('click', () => {
        const cseCourses = courseList.filter(course => course.subject === 'CSE');
        displayCourses(cseCourses);
    });

    // Initial display
    displayCourses(courseList);
});