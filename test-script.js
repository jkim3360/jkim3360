document.body.appendChild(document.createElement('chat-app'))

class ChatApp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    handleSubmit() {
      const input = this.querySelector('.chat-input');
      const message = input.value.trim();
  
      if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message';
        messageDiv.textContent = message;
        
        const messages = this.querySelectorAll('.chat-message')
        messages[messages.length - 1].insertAdjacentElement('afterend', messageDiv);
        input.value = ''; // Clear the input field
      }
    }
  
    render() {
      this.innerHTML = `
        <div class="chat-app">
          <div class="chat-message">Hello, welcome to the chat!</div>
          <div class="chat-message">How can I help you?</div>
          <input type="text" class="chat-input" placeholder="Type your message...">
          <button class="submit-button">Submit</button>
        </div>
      `;
      // Add event listener after rendering to ensure chatApp is defined
      this.querySelector('.submit-button').addEventListener('click', this.handleSubmit.bind(this));
    }
  }
  
  customElements.define('chat-app', ChatApp);