class User {
  username;
  email;
  #password;
  #phoneNumber;
  constructor(username, email, password, phoneNumber) {
    this.username = username;
    this.email = email;
    this.#password = password;
    this.#phoneNumber = phoneNumber;
  }
  set username(username) {
    this.username = username;
  }

  get username() {
    return this.username;
  }

  set email(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set password(password) {
    this.#password = password;
  }

  get password() {
    return this.#password;
  }

  set phoneNumber(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }
}

function checkOnlyDigit(str) {
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii < 48 || ascii > 57) {
      return false;
    }
  }
  return true;
}

let menu = ["Insert", "Show"];

let arrObj = [];
let choice = "";
do {
  choice = prompt(`Enter Your Menu\n1. Insert\n2. Show`);
  console.log(typeof choice);

  switch (Number(choice)) {
    case 1:
      let userObj = new User();
      let tempName = "";
      let tempemail,
        temppassword,
        tempphoneNumber = "";
      while (!tempName) {
        tempName = prompt(`What is your username?`);
        if (tempName.length <= 0) {
          tempName = null;
        } else {
          userObj.username = tempName;
        }
      }
      while (!tempemail) {
        tempemail = prompt(`What is your email?`);

        if (tempemail.length <= 0 || !tempemail.includes("@")) {
          alert(`Invalid Format`);
          tempemail = null;
        } else {
          if (arrObj.length > 0) {
            for (let i = 0; i < arrObj.length; i++) {
              if (arrObj[i].email === tempemail) {
                alert(`Email has been registered`);
                tempemail = null;
              }
            }
          }
          userObj.email = tempemail;
        }
      }
      while (!temppassword) {
        temppassword = prompt(`What is your password?`);
        if (temppassword.length < 4 || temppassword.length > 10) {
          alert(`Invalid Password!`);
          temppassword = null;
        } else {
          userObj.password = temppassword;
        }
      }
      while (tempphoneNumber === "") {
        tempphoneNumber = prompt(`What is your phone number?`);
        if (tempphoneNumber.length <= 0 || !checkOnlyDigit(tempphoneNumber)) {
          tempphoneNumber = "";
        } else {
          userObj.phoneNumber = tempphoneNumber;
        }
      }
      arrObj.push(userObj);
      choice = "-1";
      break;
    case 2:
      console.log(arrObj);
      let tempStr = "";
      for (let i = 0; i < arrObj.length; i++) {
        tempStr += `${i + 1} ${arrObj[i].username} ${arrObj[i].phoneNumber}\n`;
      }
      alert(tempStr);
      choice = "-1";
      break;
    case 0:
      alert(`You exit the program`);
      break;
    default:
      alert(`Invalid input`);
      break;
  }
} while ((Number(choice) < 1 || Number(choice) > 2) && Number(choice) !== 0);
