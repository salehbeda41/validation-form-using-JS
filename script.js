// localStorage.getItem()
// localStorage.setItem()
// localStorage.removeItem()

var inputs = document.querySelectorAll('input:not(input[type="submit"])');
var btn = document.querySelector("#submit");
var form = document.querySelector("form")
console.log(form);
btn.addEventListener("click", validation);
var error;

function validation(event) {
    error = false;
    event.preventDefault();
    inputs.forEach(input => {
            if (!input.value.length) {
                console.log("lol");
                input.nextElementSibling.textContent = `${input.name} is required`;
                error = true;
                input.classList.add("errorBorder");


            } else {
                var email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                var email = document.querySelector('input[type="email"]');
                if (!email_pattern.test(email.value)) {
                    email.nextElementSibling.textContent = 'this email is invalid ex:example@gmail.com';
                    error = true;
                    input.classList.add("errorBorder");

                }
                //  else {
                //     error = false;
                // }
                var password_pattern = /[1-9a-zA-Z]{8,15}/;
                var password = document.querySelector('input[type="password"]');
                if (!password_pattern.test(password.value)) {
                    password.nextElementSibling.textContent = 'This password is invalid';
                    error = true;
                    input.classList.add("errorBorder");
                }
                // else {
                //     error = false;
                // }

                var confirm = document.querySelector("#confirmation");
                if (confirm.value != password.value) {
                    confirm.nextElementSibling.textContent = "Password do ot match"
                    error = true;
                    input.classList.add("errorBorder");
                }
                // else {
                //     error = false;
                // }


            }


        })
        // inputs.forEach(input => {
        //     if (input.value.length) {
        //         error = false;
        //     } else {
        //         error = true;
        //     }
        // });

    if (!error) {
        var users = localStorage.getItem('users');
        var id = 0;
        if (!users) {
            users = [];
            id = 1
        } else {
            users = JSON.parse(users);
            id = users[users.length - 1].id + 1;
        }
        users.push({
            id: id,
            username: document.querySelector('input[type="text"]'),
            Email: document.querySelector('input[type="email"]'),
            Password: document.querySelector('input[type="password"]')
        });
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "https://www.google.com";
    }

}
// inputs.foreach(addEventListener("click", () => {
//     .classList.add("inputBorder");
// })