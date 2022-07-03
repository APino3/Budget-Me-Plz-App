//Change routes, have success/fail message append to the page rather than the alert? //
console.log(`I'm here`);

async function signupFormHandler(event)  {
    event.preventDefault();
    
    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const pay_day = document.querySelector('#pay_day-signup').value.trim();
    const monthly_income = document.querySelector('#monthly-income-signup').value.trim();
    const checking = document.querySelector('#checking-signup').value.trim();
    const savings = document.querySelector('#saving-signup').value.trim();
    const credit_card = document.querySelector('#credit_card-signup').value.trim();
    const new_checking = document.querySelector('#new_checking-signup').value.trim();

    console.log('clicked!!!');

    if (firstName && lastName && email && password && pay_day && monthly_income && checking && savings && credit_card && new_checking) {
        // let user = {
        //     first_name: firstName,
        //     last_name: lastName,
        //     email: email,
        //     password: password,
        //     pay_day: "mm/dd/yyyy",
        //     monthly_income: 0,
        //     checking: 0,
        //     savings: 0,
        //     credit_card: 0,
        //     bills_before: 0,
        //     new_checking: 0,
        // };

        const response = await fetch("/user", {
            method: 'post',
            // body: JSON.stringify(user),
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                pay_day,
                monthly_income,
                checking,
                savings,
                credit_card,
                new_checking
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/user");
        } else {
            alert(
                "User already exists. Please log in or sign up with a different email."
            );
        }
    }
};    

document.querySelector("#signup-button").addEventListener("click", signupFormHandler);