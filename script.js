document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  fetch(`https://api.telegram.org/bot7060039648:AAGLLnEhldWDvH7wJVmgbf-uqeJdTV5Wv6U/sendMessage`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          chat_id: '1658346274',
          text: fullMessage,
          parse_mode: 'HTML'
      })
  })
  .then(response => response.json())
  .then(data => {
      alert('Message sent!');
      console.log(data);
  })
  .catch(error => console.error(error));
});
