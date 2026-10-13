/* ================= LOGIN ================= */

function togglePassword() {

    const password = document.getElementById("password");

    if (!password) {
        return;
    }

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}


function forgotPassword() {

    alert(
        "Please contact your faculty or administrator to reset your password."
    );

}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const registerNumber =
            document.getElementById("registerNumber").value.trim();

        const password =
            document.getElementById("password").value.trim();


        if (
            registerNumber === "24102A030133" &&
            password === "1234"
        ) {

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Register Number or Password!");

        }

    });

}


/* ================= DASHBOARD ================= */



/* ================= DASHBOARD ================= */

let sectionHistory = [];
let currentSection = null;

function showSection(sectionId, clickedButton) {
    const sections = document.querySelectorAll(".page-section");
    const selectedSection = document.getElementById(sectionId);

    if (!selectedSection) return;

    if (currentSection === null) {
        const activeSection = document.querySelector(".page-section.active-section");
        if (activeSection) {
            currentSection = activeSection.id;
        }
    }

    if (currentSection !== sectionId) {
        if (currentSection !== null) {
            sectionHistory.push(currentSection);
        }
        currentSection = sectionId;
    }

    sections.forEach(function(section) {
        section.classList.remove("active-section");
    });

    selectedSection.classList.add("active-section");

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {
        item.classList.remove("active");

        const action = item.getAttribute("onclick") || "";
        if (action.includes("'" + sectionId + "'") ||
            action.includes('"' + sectionId + '"')) {
            item.classList.add("active");
        }
    });

    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.classList.remove("open");
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key !== "Escape") return;

    const sidebar = document.getElementById("sidebar");

    if (sidebar && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        return;
    }

    if (sectionHistory.length > 0) {
        const previousSection = sectionHistory.pop();

        currentSection = null;
        showSection(previousSection);
    }
});



function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    if (sidebar) {

        sidebar.classList.toggle("open");

    }

}


/* ================= MODULES ================= */

function openModule(number) {

    showSection("modules");

    alert(
        "Module " + number +
        " selected. Detailed module content can be added here."
    );

}


function startModule(number) {

    alert(
        "Opening Module " +
        number +
        "..."
    );

}


/* ================= RESOURCES ================= */

function resourceMessage(name) {

    alert(
        name +
        " will be added to your Resources section."
    );

}


/* ================= AI ================= */

function askAI() {

    const input =
        document.getElementById("aiQuestion");

    if (!input) {
        return;
    }

    const question =
        input.value.trim();


    if (question === "") {

        alert("Please enter your question.");

        return;

    }


    alert(
        "AI Assistant received your question:\n\n" +
        question +
        "\n\nAI integration can be connected here."
    );


    input.value = "";

}


/* ================= LOGOUT ================= */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (confirmLogout) {

        window.location.href = "index.html";

    }

}