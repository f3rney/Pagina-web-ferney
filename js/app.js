class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        };

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox));

        sendButton.addEventListener('click', () => this.onSendButton(chatBox));

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox);
            }
        });
    }

    toggleState(chatbox) {
        this.state = !this.state;

        if (this.state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value.trim();
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 };
        this.messages.push(msg1);
        textField.value = '';
        this.updateChatText(chatbox);

        setTimeout(() => {
            this.generateResponse(chatbox);
        }, 1000);
    }

    generateResponse(chatbox) {
        let botMessage1 = "Hola, soy Cortana ¿en qué puedo ayudarte hoy?";
        let msg2 = { name: "Bot", message: botMessage1 };
        this.messages.push(msg2);

        let botMessage2 = "Seleccione la opción a consultar:";
        let msg3 = { name: "Bot", message: botMessage2 };
        this.messages.push(msg3);

        this.updateChatText(chatbox);

        setTimeout(() => {
            this.displayButtons(chatbox);
        }, 1000);
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function (item) {
            if (item.name === "Bot") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
        chatmessage.scrollTop = chatmessage.scrollHeight; // Scroll to bottom to show latest messages
    }

    displayButtons(chatbox) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button__container';

        const pedidoButton = document.createElement('button');
        pedidoButton.className = 'pedido__button'; // Cambiado de 'chatbox__button'
        pedidoButton.innerText = '1. Pedido';
        pedidoButton.addEventListener('click', () => this.handlePedidoButton(chatbox));

        const productosButton = document.createElement('button');
        productosButton.className = 'productos__button'; // Cambiado de 'chatbox__button'
        productosButton.innerText = '2. ASESOR';
        productosButton.addEventListener('click', () => this.handleProductosButton(chatbox));

        const promocionesButton = document.createElement('button');
        promocionesButton.className = 'promociones__button'; // Cambiado de 'chatbox__button'
        promocionesButton.innerText = '3. Promociones y Descuentos';
        promocionesButton.addEventListener('click', () => this.handlePromocionesButton(chatbox));

        buttonContainer.appendChild(pedidoButton);
        buttonContainer.appendChild(productosButton);
        buttonContainer.appendChild(promocionesButton);

        const buttonsMessage = `<div class="messages__item messages__item--visitor">${buttonContainer.outerHTML}</div>`;
        this.messages.push({ name: "Bot", message: buttonsMessage });
        this.updateChatText(chatbox);
    }

    handlePedidoButton(chatbox) {
        let msg = { name: "Bot", message: "Por favor ingrese el número de pedido." };
        this.messages.push(msg);
        this.updateChatText(chatbox);
    }

    handleProductosButton(chatbox) {
        let img = document.createElement('img');
        img.src = 'ruta/a/tu/imagen_de_productos_de_aseo.jpg'; // Asegúrate de reemplazar esta ruta con la correcta
        img.alt = 'Productos de Aseo';
        img.className = 'productos__image';

        const imgMessage = `<div class="messages__item messages__item--visitor"><img src="${img.src}" alt="${img.alt}" class="productos__image"></div>`;
        this.messages.push({ name: "Bot", message: imgMessage });
        this.updateChatText(chatbox);
    }

    handlePromocionesButton(chatbox) {
        let msg = { name: "Bot", message: "Descuentos y promociones simuladas." };
        this.messages.push(msg);
        this.updateChatText(chatbox);
    }
}

const chatbox = new Chatbox();
chatbox.display();
