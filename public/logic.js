const socket = io()
const button = document.getElementById('button')
const messageinput = document.getElementById('message')
const allmessages = document.getElementById('allmessages')

socket.on('message', message => {
console.log(message);

// Initialize card element
const card = document.createElement('div');
card.classList.add('card', 'mb-3'); 

// Initialize card body
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

// Initialize paragraph element inside card body
const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.innerText = message;

// Append paragraph to card body
cardBody.appendChild(cardText);

// Append card body to card
card.appendChild(cardBody);

// Append card to messages container
allmessages.appendChild(card);
});

// Event handler
button.addEventListener('click',event =>{
    const message = messageinput.value
    console.log(message)
    socket.emit('user-message',message)

})