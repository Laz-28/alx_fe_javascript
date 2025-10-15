// ✅ Array of quotes with "text" and "category" properties
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" }
];

// ✅ Reference the quote display section and the button
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

// ✅ Show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = `"${randomQuote.text}" — <strong>${randomQuote.category}</strong>`;
}

// ✅ Create Add Quote Form dynamically
function createAddQuoteForm() {
  const formContainer = document.createElement("div");
  formContainer.id = "addQuoteForm";

  const quoteInput = document.createElement("input");
  quoteInput.type = "text";
  quoteInput.id = "newQuoteText";
  quoteInput.placeholder = "Enter a new quote";

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.id = "newQuoteCategory";
  categoryInput.placeholder = "Enter quote category";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Quote";
  addBtn.addEventListener("click", addQuote);

  formContainer.appendChild(quoteInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addBtn);

  document.body.appendChild(formContainer);
}

// ✅ Add a new quote to the array and update DOM
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (!newQuoteText || !newQuoteCategory) {
    alert("Please fill in both fields!");
    return;
  }

  // Add new quote to array
  const newQuoteObj = { text: newQuoteText, category: newQuoteCategory };
  quotes.push(newQuoteObj);

  // Update the DOM
  quoteDisplay.innerHTML = `"${newQuoteObj.text}" — <strong>${newQuoteObj.category}</strong>`;

  // Clear input fields
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

// ✅ Event listener for the "Show New Quote" button
newQuoteBtn.addEventListener("click", showRandomQuote);

// ✅ Initialize form and first quote display on page load
window.onload = function () {
  createAddQuoteForm();
  showRandomQuote();
};

