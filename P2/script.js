const users = [];
let user={}
const showLogin = () => {
  let str = `
    <div>
    <h1>Login Form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='validateUser()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onClick='showLogin()'>Already a Member? Login here...</button>
    `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p><select id="options">
     <option value=0>--select--</option>
      <option value=1>Deposit</option>
      <option value=2>Withdraw</option>
      <option value=3>Fund Transfer</option>
      </select></p>
      <p>
      <input type='number' id='txtAmount'>
      </p>
      <p><button onClick="process(user)">Submit</button>

    <button onclick='showLogin()'>Logout</button>
    <div id="processMessage" style="color:red"></div>
    <hr>
    <div id="balance">
      <p>Current balance:${user.balance};
    </div>
    <hr>
    <div id="transfer"></div>
    `;
  root.innerHTML = str;
};

const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance:0
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
   user = users.find(
    (e) => e.email === email && e.pass === pass
  )
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};

const process=(user)=>{
  let element=document.getElementById("options");
  let value=element.value;
  let text=document.getElementById("processMessage");
  let amount=Number(document.getElementById("txtAmount").value);
  let balance=document.getElementById("balance");
  if(value==0){
    text.innerHTML=`Please select the appropriate option ${user.name}`;
  }else if(value==1){
    user.balance=Number(user.balance)+amount;
    text.innerHTML=`Transaction Succesful`;
    balance.innerHTML=`<p>Current Balance = ${user.balance}</p>`;

  }else if(value==2){
    if(user.balance>=amount){
      user.balance=user.balance-amount;
      balance.innerHTML=`<p>Current Balance = ${user.balance}</p>`;
    }else{
      text.innerHTML=`Insufficient Funds`;
    }
  }else if(value==3){
    let count=1;
    let str="<div>"
    str+=`
    <h1>Fund Transfer</h1>
    <p><select id="otherusers">
    <option value=0>--select--</option>`
    users.map((otheruser)=>{
        if(otheruser!=user){
          str+=`<option value=${count++}>${otheruser.name}</option>`
        }
      })
    let otherUser=document.getElementById("otherusers");  
    str+="</select></p><button onClick='fundTransfer(user,otherUser,amount)'>Submit</button></div>"
    let transferdiv=document.getElementById("transfer");
    transferdiv.innerHTML=str;
  }
}  
function fundTransfer() {
    let selectedIndex = document.getElementById("otherusers").value;
    let amount = Number(document.getElementById("txtAmount").value);
    let text = document.getElementById("processMessage");
    let balance = document.getElementById("balance");

    if (selectedIndex == "-1") {
        text.innerHTML = "Please select a user to transfer funds";
        return;
    }

    let otherUser = users[selectedIndex];

    if (user.balance >= amount) {
        user.balance -= amount;
        otherUser.balance += amount;
        balance.innerHTML = `<p>Current Balance = ${user.balance}</p>`;
        text.innerHTML = `Fund Transfer Successful to ${otherUser.name}`;
    } else {
        text.innerHTML = "Insufficient Funds for Transfer";
    }
}
