let retrieveAccount = JSON.parse(localStorage.getItem("retrieveAccount")) || [];
let btn_login = document.getElementById('btn_login');
let username = document.getElementById('user');
let password = document.getElementById('pass');

initializeEvent();

function loginAcc() {
    username = document.getElementById('user');
    password = document.getElementById('pass');

    let loginAccount = {
        username: username.value,
        password: btoa(password.value)
    }

    console.log(loginAccount);

    let isExisting = retrieveAccount.find(
        (m) =>
            m.username == loginAccount.username
            &&
            m.password == loginAccount.password
    );
    console.log(retrieveAccount);

    if (isExisting) {
        // pass the username ID to the Todo Homepage
        alert('Login successfully!');
        localStorage.setItem("Username", loginAccount.username);
        window.location.href='todo.html'
        window.location.assign('todo.html');

        // console.log(passID);
    } else {
        alert('Incorrect Username/Password')
    }

}

function initializeEvent() {
    btn_login.addEventListener('click', () => {
        loginAcc();

    })

}


//btoa: encryption
//check console.log to see the encryption
// function login(user,pass){
//     let loginAccount = {
//         username: user.value,
//         password: btoa(pass.value),
//     };
//     // To know if the item from the local storage is equal to the inputs of the login
//     let isExisting = retrieveAccount.find(
//         (m) =>
//             m.username == loginAccount.username
//             &&
//             m.password == loginAccount.password
//     );
//     if(isExisting){
//         // pass the username ID to the Todo Homepage
//         alert('Login successfully!');
//         window.location.assign('todo.html');
//         // console.log(passID);
//     }else{
//         alert('Incorrect Username/Password')
//     }
// }


// function retrieveUserId(username){
//     // Count the amount of users in the local storage
//     for(let i = 0; i < localStorage.length; i++){
//         // Get the index of the user
//         let index = localStorage.key(i);
//         let item = localStorage.getItem(index);
//         // If an item is present in the local storage
//         if(item != null){
//             let user = JSON.parse(item);
//             // if the username has equal in the local storage.
//             if(user[0].username === username){
//                 return user[0].id;
//             }
//         }
//     }
//     return null;
// }