const container = document.querySelector(".topics-container");

const topics = [
    "Introduction to Python",
    "Variables & Data Types",
    "Operators",
    "Control Flow",
    "Loops",
    "Functions",
    "Lists",
    "Tuples",
    "Dictionaries",
    "Sets",
    "Strings",
    "Modules",
    "Libraries",
    "File Handling",
    "Error Handling",
    "Object Oriented Programming",
    "Classes & Objects",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction",
    "Recursion",
    "Algorithms",
    "Data Structures",
    "Searching Algorithms",
    "Sorting Algorithms",
    "Python Projects",
    "APIs in Python",
    "Databases in Python",
    "Final Revision"
];

topics.forEach((t, i) => {
    container.innerHTML += `
        <a href="topics/topic${i+1}.html">
            <div class="topic-box">${i+1}. ${t}</div>
        </a>
    `;
});
