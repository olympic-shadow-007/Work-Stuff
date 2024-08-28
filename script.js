// Function to clear the input
function clearInput() {
    document.getElementById('callerName').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('vin').value = '';
    document.getElementById('comments').value = '';
}

// Function to launch labor rate script
document.getElementById("laborButton").addEventListener("click", function() {
    // Set the dimensions of the new window
    const width = 400;
    const height = 300;

    // Calculate the position to center the window
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    // Create a new window (pop-up) with specific dimensions
    let newWindow = window.open("", "Negotiation Script", `width=${width},height=${height},top=${top},left=${left}`);

    // Initialize question index
    let questionIndex = 0;
    const questions = [
        {
            text: "What is the current posted labor rate at your Repair Facility?",
            type: "number",
            id: "laborRate",
            placeholder: "Enter labor rate"
        },
        {
            text: "If the labor rate is less than $100, please confirm.",
            type: "text",
            id: "confirmation",
            placeholder: "Yes/No"
        },
        {
            text: "Then, what is the proposed new rate?",
            type: "number",
            id: "newRate",
            placeholder: "Enter new rate"
        }
    ];

    function displayQuestion() {
        // Clear the new window content
        newWindow.document.body.innerHTML = '';
        
        // Check if there are more questions
        if (questionIndex < questions.length) {
            const question = questions[questionIndex];

            // Add question text and input field to the new window
            newWindow.document.write(`
                <h1>Labor Rate Negotiation</h1>
                <p>${question.text}</p>
                <input type="${question.type}" id="${question.id}" placeholder="${question.placeholder}" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <button id="nextButton">Next</button>
            `);
            
            // Attach event listener to the Next button
            newWindow.document.getElementById("nextButton").addEventListener("click", handleNext);
        } else {
            newWindow.document.write('<p>Thank you for your input!</p>');
        }
    }

    function handleNext() {
        // Log the answer before proceeding
        const answer = newWindow.document.getElementById(questions[questionIndex].id).value;
        console.log(`${questions[questionIndex].text} Answer: ${answer}`);
        
        // Increment question index and display next question
        questionIndex++;
        displayQuestion();
    }

    // Display the first question
    displayQuestion();

    newWindow.document.close();
});

// Function to handle submission of negotiation
function submitNegotiation(newWindow) {
    const laborRate = newWindow.document.getElementById('laborRate').value;
    const confirmation = newWindow.document.getElementById('confirmation').value;
    const newRate = newWindow.document.getElementById('newRate').value;

    // Log or process the input values as needed
    console.log(`Labor Rate: ${laborRate}, Confirmation: ${confirmation}, Proposed New Rate: ${newRate}`);

    // Optionally, you can close the new window after submission
    newWindow.close();
}

let display = document.getElementById('display');
let resultLog = document.getElementById('resultLog');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return; 
    if (isOperator(currentInput.slice(-1))) {
        currentInput = currentInput.slice(0, -1); 
    }
    currentInput += operator;
    display.value = currentInput;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        display.value = result;
        logResult(`${currentInput} = ${result}`);
        currentInput = result.toString(); 
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function logResult(entry) {
    resultLog.value += entry + "\n";
    resultLog.scrollTop = resultLog.scrollHeight;
}

function clearLog() {
    resultLog.value = '';
}

function handleKeyPress(event) {
    const key = event.key;

    if (!isNaN(key)) {
        // If the key is a number
        appendNumber(key);
    } else if (isOperator(key)) {
        // If the key is an operator
        appendOperator(key);
    } else if (key === 'Enter') {
        // If the key is Enter (calculate result)
        calculateResult();
    } else if (key === 'Backspace') {
        // If the key is Backspace (clear the last input)
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (key === 'Escape') {
        // If the key is Escape (clear the display)
        clearDisplay();
    } else if (key === '.') {
        // If the key is a decimal point
        appendNumber(key);
    }
}

// Attach the keydown event listener to the window
window.addEventListener('keydown', handleKeyPress);
