let retrieveAccount = JSON.parse(localStorage.getItem("retrieveAccount")) || [];

let btn_reg = document.getElementById('btn_reg');

let username = document.getElementById('username');
let password = document.getElementById('password');
let conpass = document.getElementById('conpass');

initializeEvent();

function registerAcc() {
    username = document.getElementById('username');
    password = document.getElementById('password');
    conpass = document.getElementById('conpass');

    let regAccount = {
        id: GenerateUniqueId(),
        username: username.value,
        password: btoa(password.value),
        confirm: btoa(conpass.value)
    };

    if (regAccount.username === "" || regAccount.password === "" || regAccount.confirm === "")
        alert("No Input");
    else if (regAccount.password != regAccount.confirm)
        alert("Password and Confirm Password do not match!");
    else {
        let isExisting = retrieveAccount.find(
            (m) =>
                m.username == regAccount.username &&
                m.password == regAccount.password
        );
        if (isExisting) {
            alert('Account Is Already Existing!');
        } else {
            retrieveAccount.push(regAccount);
            localStorage.setItem("retrieveAccount", JSON.stringify(retrieveAccount));
            alert("Successfully Registered!");
            window.location.assign('login.html');
        }
    }
}

function GenerateUniqueId() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, "0");
    } while (localStorage.getItem(id)); // Check if ID already exists in localStorage
    return id;
}

function initializeEvent() {
    btn_reg.addEventListener('click', () => {
        registerAcc()
    });
}