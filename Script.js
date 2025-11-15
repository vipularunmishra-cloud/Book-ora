// SEARCH FUNCTION
document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let topics = document.querySelectorAll(".topic");

    topics.forEach(t => {
        if (t.textContent.toLowerCase().includes(filter)) {
            t.style.display = "";
        } else {
            t.style.display = "none";
        }
    });
});

// POPUP MODAL LOGIC
let modal = document.getElementById("modal");
let modalTitle = document.getElementById("modalTitle");
let modalContent = document.getElementById("modalContent");

document.querySelectorAll(".topic").forEach(item => {
    item.addEventListener("click", function () {
        modalTitle.textContent = this.textContent;
        modalContent.textContent = this.dataset.content + " — Full details will be added later.";
        modal.classList.add("active");
    });
});

function closeModal() {
    modal.classList.remove("active");
}

// Close modal on outside click
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});
