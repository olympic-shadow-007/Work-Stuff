// Function to create a popup window with the authorize note
document.getElementById("authButton").addEventListener("click", function() {
    const width = 500;
    const height = 700;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Auth Note", `width=${width},height=${height},top=${top},left=${left}`);

    // Inject content into the new window
    newWindow.document.write(`
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }
                h1 {
                    font-size: 18px;
                    text-align: center;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 14px;
                    line-height: 1.5;
                    margin-bottom: 10px;
                }
                button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    background-color: #902424;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #781c1c;
                }
            </style>
        </head>
        <body>
            <h1>Authorize Note</h1>
            <p>What type of contract?</p>
            <p>Adjuster must state how failure was verified, I.E. inspection, photos, RF Diag (brief snap shot):</p>
            <p>Adjuster must list what was covered by the contract:</p>
            <p>Adjuster must list any PNLC items:</p>
            <p>Adjuster must note what part was used and why?</p>
            <p>Adjuster must note how labor was verified:</p>
            <p>Adjuster must state how failure was verified, I.E. inspection, photos, RF Diag (brief snap shot):</p>
            <p>Adjuster must note if claim history has been reviewed:</p>
            <p>Adjuster must note if SR are needed or has been reviewed:</p>
            <p>Adjuster must note if there are any related TSB's:</p>
            <p>Adjuster must note any OOP Costs and list the cost difference:</p>
            <p>Adjuster must note they made the attempt to contact the CH about oop cost; if unsuccessful, adjuster must note a task has been performed:</p>
            <p>Adjuster must note who auth'd number was given to and list payment method:</p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the status note
document.getElementById("statusButton").addEventListener("click", function() {
    const width = 400;
    const height = 350;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Status Note", `width=${width},height=${height},top=${top},left=${left}`);

    // Inject content into the new window
    newWindow.document.write(`
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }
                h1 {
                    font-size: 18px;
                    text-align: center;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 14px;
                    line-height: 1.5;
                    margin-bottom: 10px;
                }
                button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    background-color: #902424;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #781c1c;
                }
            </style>
        </head>
        <body>
            <h1>Status Note</h1>
            <p>Why is claim delayed?</p>
            <p>Is CH aware of delay?</p>
            <p>What is needed from CH or RF?</p>
            <p>What are the next steps in the process?</p>
            <p>Any conversations that need to happen?</p>
            <p>What have you completed already?</p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the labor negotiation note
document.getElementById("laborButton").addEventListener("click", function() {
    const width = 400;
    const height = 300;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Labor Negotiation Note", `width=${width},height=${height},top=${top},left=${left}`);

    // Inject content into the new window
    newWindow.document.write(`
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }
                h1 {
                    font-size: 18px;
                    text-align: center;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 14px;
                    line-height: 1.5;
                    margin-bottom: 10px;
                }
                button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    background-color: #902424;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #781c1c;
                }
            </style>
        </head>
        <body>
            <h1>Labor Negotiation Note</h1>
            <p>Current labor rate:</p>
            <p>Flexible on rate:</p>
            <p>Avg labor rate:</p>
            <p>Distance used:</p>
            <p>How many reports:</p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to launch labor rate negotiation script
document.getElementById("laborNegButton").addEventListener("click", function() {
    const width = 400;
    const height = 300;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Negotiation Script", `width=${width},height=${height},top=${top},left=${left}`);

    // Wait for the new window to fully load before injecting content
    newWindow.document.write(`
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }
                h1 {
                    font-size: 20px;
                    color: #444;
                    text-align: center;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 16px;
                    margin-bottom: 10px;
                    text-align: center;
                }
                input[type="text"], input[type="number"] {
                    width: calc(100% - 20px);
                    padding: 8px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 14px;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                button {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    background-color: #902424;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #781c1c;
                }
            </style>
        </head>
        <body>
            <h1>Labor Rate Negotiation</h1>
            <p>Loading...</p>
        </body>
        </html>
    `);

    newWindow.document.close(); 
    newWindow.onload = function() {
        let laborRate, avgLaborRate, newLaborRate;

        function displayQuestion(text, inputType = 'text', callback) {
            newWindow.document.body.innerHTML = `
                <h1>Labor Rate Negotiation</h1>
                <p>${text}</p>
                <input type="${inputType}" id="response" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <button id="nextButton">Next</button>
            `;

            newWindow.document.getElementById("nextButton").addEventListener("click", function() {
                const response = newWindow.document.getElementById("response").value.trim();
                callback(response);
            });
        }

        function handleLaborRate() {
            displayQuestion("What is the current posted labor rate at your Repair Facility?", "number", function(response) {
                laborRate = parseFloat(response);
                handleAvgLaborRate();
            });
        }

        function handleAvgLaborRate() {
            displayQuestion("What is the average labor rate in the area?", "number", function(response) {
                avgLaborRate = parseFloat(response);
                compareRates();
            });
        }

        function compareRates() {
            if (laborRate <= avgLaborRate) {
                displayQuestion("Thanks for that, so most shops have been working with us by coming down on the hourly rate to help customers. Is there any flexibility for a lower hourly rate for this customer? (Y/N)", "text", function(response) {
                    if (['N', 'n', 'No', 'NO', 'no'].includes(response)) {
                        newWindow.document.body.innerHTML = `<p>No problem, thanks for considering it. I will update your repair facility profile to $${laborRate}.</p>`;
                    } else if (['Y', 'y', 'Yes', 'YES', 'yES', 'yEs', 'YeS', 'yes', 'YeS', 'yEs'].includes(response)) {
                        handleNewLaborRate();
                    }
                });
            } else {
                displayQuestion(`The average labor rate in your area is $${avgLaborRate}, are you able to match this? (Y/N)`, "text", function(response) {
                    if (['N', 'n', 'No', 'NO', 'no'].includes(response)) {
                        const difference = (laborRate + avgLaborRate)/2;
                        displayQuestion(`Are you able to match us at $${difference}? (Y/N)`, "text", function(response) {
                            if (['N', 'n', 'No', 'NO', 'no'].includes(response)) {
                                newWindow.document.body.innerHTML = `<p>No problem, thanks for considering it. I will update your repair facility profile to $${laborRate}. Please keep in mind that there could be other times during the claims process that we may ask you to negotiate pricing.</p>`;
                            } else if (['Y', 'y', 'Yes', 'YES', 'yES', 'yEs', 'YeS', 'yes', 'YeS', 'yEs'].includes(response)) {
                                newLaborRate = difference;
                                newWindow.document.body.innerHTML = `<p>Thank you. I have updated your repair facility profile and set the labor rate to $${newLaborRate}.</p>`;
                            }
                        });
                    } else if (['Y', 'y', 'Yes', 'YES', 'yES', 'yEs', 'YeS', 'yes', 'YeS', 'yEs'].includes(response)) {
                        newLaborRate = avgLaborRate;
                        newWindow.document.body.innerHTML = `<p>Thank you. I have updated your repair facility profile and set the labor rate to $${newLaborRate}.</p>`;
                    }
                });
            }
        }      

        function handleNewLaborRate() {
            displayQuestion("What is the new labor rate you would like to set?", "number", function(response) {
                newLaborRate = parseFloat(response);
                if (newLaborRate < laborRate) {
                    newWindow.document.body.innerHTML = `<p>Thanks! Your new labor rate is now set to $${newLaborRate}.</p>`;
                } else {
                    newWindow.document.body.innerHTML = `<p>The new labor rate has been updated to $${newLaborRate}. Thank you!</p>`;
                }
            });
        }

        handleLaborRate();
    };
});

// Function to clear the input fields in the notepad
function clearInput() {
    document.getElementById('callerName').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('vin').value = '';
    document.getElementById('vehicleMileage').value ='';
    document.getElementById('laborRate').value = '';
    document.getElementById('avgLaborRate').value = '';
    document.getElementById('negRate').value = '';
    document.getElementById('msrp').value = '';
    document.getElementById('partCost').value = '';
    document.getElementById('comments').value = '';
}

// Calculator Functions
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
        appendNumber(key);
    } else if (isOperator(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendNumber(key);
    }
}

// Attach the keydown event listener to the window
window.addEventListener('keydown', function(event) {
    if (document.activeElement.id === 'display') {
        handleKeyPress(event);
    }
});
