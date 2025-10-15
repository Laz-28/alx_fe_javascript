
  const quoteInput = document.getElementById('quoteInput');
  const categoryInput = document.getElementById('authorInput'); // renamed input used for category
  const addQuoteBtn = document.getElementById('addQuoteBtn');
  const quoteList = document.getElementById('quoteList');

  // Load quotes when page opens
  window.onload = displayQuotes;

  // Add quote event
  addQuoteBtn.addEventListener('click', addQuote);

  function addQuote() {
    const text = quoteInput.value.trim();
    const category = categoryInput.value.trim();

    if (text === '' || category === '') {
      alert('Please fill in both the quote and category.');
      return;
    }

    // Create quote object with required property names
    const quoteObj = { text, category };

    // Use timestamp as a unique key
    const key = 'quote_' + Date.now();

    // Store in localStorage
    localStorage.setItem(key, JSON.stringify(quoteObj));

    // Clear inputs
    quoteInput.value = '';
    categoryInput.value = '';

    // Refresh displayed quotes
    displayQuotes();
  }

  function displayQuotes() {
    quoteList.innerHTML = ''; // Clear current list

    // Loop through all localStorage items
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Only process keys that start with 'quote_'
      if (key.startsWith('quote_')) {
        const quoteObj = JSON.parse(localStorage.getItem(key));

        // Create a quote item
        const div = document.createElement('div');
        div.className = 'quote-item';
        div.innerHTML = `
          <span>"${quoteObj.text}"</span>
          <strong>- ${quoteObj.category}</strong>
          <button class="remove-btn" data-key="${key}">Remove</button>
        `;

        quoteList.appendChild(div);
      }
    }

    // Add event listener for remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', removeQuote);
    });
  }

  function removeQuote(event) {
    const key = event.target.getAttribute('data-key');
    localStorage.removeItem(key);
    displayQuotes(); // Refresh list
  }

