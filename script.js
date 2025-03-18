document.addEventListener("DOMContentLoaded", function() {
    let name = localStorage.getItem("userName") || "Guest";
    let dob = localStorage.getItem("userDOB");

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayDOB").textContent = dob || "Not provided";

    if (dob) {
        let birthDate = new Date(dob.split("-").reverse().join("-"));
        let now = new Date();
        let ageMilliseconds = now - birthDate;
        
        let years = Math.floor(ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        let days = Math.floor(ageMilliseconds / (1000 * 60 * 60 * 24));
        let hours = Math.floor(ageMilliseconds / (1000 * 60 * 60));
        let seconds = Math.floor(ageMilliseconds / 1000);

        document.getElementById("yearsOld").textContent = years;
        document.getElementById("daysOld").textContent = days;
        document.getElementById("hoursOld").textContent = hours;
        document.getElementById("secondsOld").textContent = seconds;
    }

    // 🎊 Confetti effect on load
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 100
        });
    }, 500);

    // 🎁 Surprise Message
    document.getElementById("messageButton").addEventListener("click", function() {
        let messages = [
            "🎈 You are an amazing person, and today is all about you!",
            "🎂 May your day be as bright and beautiful as your smile!",
            "🎁 Sending you all the happiness and love on your special day!",
            "💖 You are one in a million, and today we celebrate YOU!",
            "🎉 Happy Birthday! May this year bring you endless joy!"
        ];
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById("birthdayMessage").textContent = randomMessage;
    });

    // 🎯 Form handling
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = codeInput.value.trim();
        if (userInput === secretCode) {
            resultDiv.innerHTML = 'Baby';
            window.location.href = nextPageUrl; // Redirect to new page
        } else {
            resultDiv.innerHTML = 'LESSSSSSSS GOOOOOOOOOO!!!!!!';
        }
    });

    // 🚀 Service Worker Registration (with path correction)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/1st-app/service-worker.js')  // Ensure correct path
            .then((reg) => console.log('Service Worker Registered ✅', reg))
            .catch((error) => console.error('Service Worker Registration Failed ❌', error));
    }
});
