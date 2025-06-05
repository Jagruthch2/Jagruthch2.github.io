const showLogin=()=>{
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></input></p>
    <p><input type="password" id="txtPass"></input></p>
    <p><button onclick="showHome()">Log In</button></p>
    <p><button onclick="showRegister()">Create Account</button></p>
    </div>
    `
    root.innerHTML=str 
}

const showRegister=()=>{
    let str=`
    <div class='App-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id=txtPass"></p>
    <button>Register</button>
    <p><button onclick="showLogin()">LogIn</button></p>
    </div>
    `
    root.innerHTML=str
}
const showHome=()=>{
    let str=`
    <h1>Welcome<h1>
    `
    root.innerHTML=str
}