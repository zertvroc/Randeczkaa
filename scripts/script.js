$("button").click(function() {
    $("#catsweating").addClass("hidden").removeClass("visible");
    $("#catflower, #catflower1").removeClass("hidden").addClass("visible");

    setTimeout(function() {
        window.location.href = 'sites/kalendarz.html'; // zamień 'nazwa_strony.html' na adres docelowy
    }, 2500);

});



document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('.photo_gallery > div');
    let isOptionSelected = false;

    divs.forEach(div => {
        div.addEventListener('click', function() {
            if (isOptionSelected) return;

            isOptionSelected = true;
            div.style.border = '2px solid blue';

            const selectedAnswer = div.querySelector('p').innerText;

            localStorage.setItem('userAnswer', selectedAnswer);

            const webhookUrl = 'https://discord.com/api/webhooks/1328822711778283560/x5skDYk1OsxNl-l2SAQ9dMTPZYGgCs8NAOz6EP0_TXiiAwcqp1Lwm-T0mzTVXcpGlaOj';
            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: `Użytkownik wybrał: ${selectedAnswer}` })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Wiadomość została wysłana.');
                    setTimeout(function() {
                        window.location.href = 'koncowka.html'; 
                    }, 2000);
                } else {
                    console.error('Błąd przy wysyłaniu wiadomości.');
                }
            })
            .catch(error => console.error('Błąd:', error));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const userAnswer = localStorage.getItem('userAnswer');

    console.log('Odpowiedź użytkownika:', userAnswer);
});