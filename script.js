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

function showSection(sectionId, clickedButton) {

    const sections =
        document.querySelectorAll(".page-section");

    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add("active-section");

    }


    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {

        item.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    const sidebar =
        document.getElementById("sidebar");

    if (sidebar) {

        sidebar.classList.remove("open");

    }

}


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