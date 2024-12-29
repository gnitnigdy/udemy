class Student {
  #name;
  #username;
  #email;
  #password;
  #address;
  #phoneNumber;
  #program;
  constructor(name, email, phoneNumber, program) {
    this.#name = name;
    this.#email = email;
    this.#phoneNumber = phoneNumber;
    this.#program = program;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    if (name.length <= 0) {
      alert("Name cannot be empty!");
      return;
    } else {
      this.#name = name;
    }
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }

  set phoneNumber(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }

  set email(email) {
    this.#email = email;
  }

  set password(password) {
    this.#password = password;
  }

  get password() {
    return this.#password;
  }

  set username(username) {
    this.#username = username;
  }

  get username() {
    return this.#username;
  }

  get address() {
    return this.#address;
  }

  set address(address) {
    this.#address = address;
  }

  set program(program) {
    this.#program = program;
  }

  get program() {
    return this.#program;
  }
}

let purwadhikaStudent = new Student();

let tempName = "";
let tempEmail = "";
let tempPassword = "";
let tempUsername = "";
let tempAddress = "";
let tempPhoneNumber = "";
let tempProgram = "";

var x = "hello there!";
console.log(x.substring(x.length / 2)); // there!

while (tempName.length <= 0) {
  tempName = prompt("Fill in your name");
  purwadhikaStudent.name = tempName;
}

while (
  tempEmail.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) === null
) {
  tempEmail = prompt("Fill in your email");
  if (
    tempEmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) === null
  ) {
    alert("Invalid Email Address!");
    tempEmail = "";
  }
  purwadhikaStudent.email = tempEmail;
}

while (tempPassword.length < 6 || tempPassword.length > 10) {
  tempPassword = prompt("Fill in your password");
  purwadhikaStudent.password = tempPassword;
}

while (tempUsername.length <= 0) {
  let allUsername = ["ydamenta", "ydginting"];
  tempUsername = prompt("Fill in your username");
  if (allUsername.indexOf(tempUsername) === -1) {
    purwadhikaStudent.username = tempUsername;
  } else {
    alert("Username has been taken");
    tempUsername = "";
  }
}

while (tempAddress.length <= 0) {
  tempAddress = prompt("Fill in your address");
  purwadhikaStudent.address = tempAddress;
}

while (tempProgram === "") {
  let prog = ["JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD"];
  tempProgram = prompt("Fill in your program");
  if (prog.indexOf(tempProgram.toUpperCase()) === -1) {
    alert("Invalid Program!");
    tempProgram = "";
  } else {
    purwadhikaStudent.program = prog[prog.indexOf(tempProgram.toUpperCase())];
  }
}

while (tempPhoneNumber.match(/^\d+$/) === null) {
  tempPhoneNumber = prompt("Fill in your phone number");
  if (tempPhoneNumber < 8 || tempPhoneNumber.match(/^\d+$/) === null) {
    alert("Invalid Phone Number!");
    tempPhoneNumber = "";
  } else {
    purwadhikaStudent.phoneNumber = tempPhoneNumber;
  }
}
alert(
  `Student Name : ${purwadhikaStudent.name}\nStudent Username : ${
    purwadhikaStudent.username
  }\nStudent PhoneNumber: ${"*".repeat(
    6
  )}${purwadhikaStudent.phoneNumber.substring(
    purwadhikaStudent.phoneNumber.length / 2
  )}`
);
console.log(purwadhikaStudent);
