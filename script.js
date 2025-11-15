// Topics List
const topics = {
    "AI Basics": "AI is the development of systems that can think and learn like humans.",
    "Introduction to Computers": "Computers process data and perform operations automatically.",
    "Operating Systems": "OS manages hardware and software resources.",
    "Computer Hardware": "Includes CPU, RAM, motherboard, storage devices, etc.",
    "Networking Basics": "Networking allows devices to communicate over a network.",
    "Internet & Web": "The internet is a global network connecting millions of computers.",
    "Programming Logic": "Programming logic includes loops, conditions, variables, etc.",
    "C Programming": "C is a powerful low-level programming language.",
    "Python Basics": "Python is a beginner-friendly, multipurpose language.",
    "Java Basics": "Java is an object-oriented programming language.",
    "Databases": "Databases store structured information for quick access.",
    "SQL Queries": "SQL is used to store, retrieve, and modify data in databases.",
    "Computer Security": "Security protects systems from digital attacks.",
    "Cryptography": "Cryptography ensures secure communication.",
    "Machine Learning": "ML allows systems to learn patterns and improve accuracy.",
    "Computer Vision": "CV helps machines interpret images and videos.",
    "Web Development": "Building websites using HTML, CSS, JavaScript.",
    "Cloud Computing": "Cloud delivers computing services over the internet.",
    "Cyber Laws": "Cyber laws protect users from online crimes.",
    "Future of Computing": "AI, quantum computing, and automation."
};

// Insert topics into sidebar
const list = document.getElementById("topicList");

Object.keys(topics).forEach(topic => {
    let li = document.createElement("li");
    li.textContent = topic;

    li.onclick = () => showTopic(topic);
    list.appendChild(li);
});

// Search Function
document.getElementById("searchInput").addEventListener("input", function () {
    const search = this.value.toLowerCase();
    const items = document.querySelectorAll("#topicList li");

    items.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(search) ? "block" : "none";
    });
});

// Show Topic Content
function showTopic(topic) {
    document.querySelector(".welcome-card").style.display = "none";

    const box = document.getElementById("contentBox");
    const title = document.getElementById("topicTitle");
    const info = document.getElementById("topicInfo");

    title.textContent = topic;
    info.textContent = topics[topic];

    box.classList.remove("hidden");

    // Smooth animation
    setTimeout(() => {
        box.classList.add("show");
    }, 10);
}
