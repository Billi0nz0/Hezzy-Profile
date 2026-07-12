const greetEl = document.getElementById("greetings")

const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetEl.textContent = `Good Morning!`;
    } else if (currentHour < 17) {
        greetEl.textContent = `Good Afternoon!`;
    } else {
        greetEl.textContent = `Good Evening!`;
    }
