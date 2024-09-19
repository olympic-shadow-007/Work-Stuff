// Function to create a popup window with the authorize note
document.getElementById("authButton").addEventListener("click", function() {
    const width = 450;
    const height = 420;
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
                div {
                    margin: 0;
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
            <div>What is the type of contract:</div>
            <div>How was failure was verified:</div>
            <div>What was covered by the contract:</div>
            <div>List any PNLC items:</div>
            <div>What part was used and why:</div>
            <div>How was labor verified:</div>
            <div>Has claim history been reviewed:</div>
            <div>Is SR needed or been reviewed:</div>
            <div>Are there are any related TSB's:</div>
            <div>Are there any OOP Costs?</div> 
            <div>List the cost difference:</div>
            <div>Did we attempt to contact the CH about OOP cost:</div>
            <div>If unsuccessful, has note and task been set:</div>
            <div>Who was auth number given to:</div>
            <div>List payment method:</div>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the status note
document.getElementById("statusButton").addEventListener("click", function() {
    const width = 350;
    const height = 250;
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
                div {
                    margin: 0;
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
            <div>Why is claim delayed:</div>
            <div>Is CH aware of delay:</div>
            <div>What is needed from CH or RF:</div>
            <div>What are the next steps in the process:</div>
            <div>Any conversations that need to happen:</div>
            <div>What have you completed already:</div>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the labor negotiation note
document.getElementById("laborButton").addEventListener("click", function() {
    const width = 350;
    const height = 550; 
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
                div {
                    margin-bottom: 10px;
                }
                input {
                    width: 100%;
                    padding: 10px;
                    margin-top: 5px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
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
            <div>
                Current labor rate:<br>
                <input type="text" id="laborRate" placeholder="Enter current labor rate (e.g., $50)">
            </div>
            <div>
                Avg labor rate:<br>
                <input type="text" id="avgLaborRate" placeholder="Enter average labor rate (e.g., $45)">
            </div>
            <div>
                Flexible on rate:<br>
                <input type="text" id="flexibleRate" placeholder="Enter flexibility on rate">
            </div>
            <div>
                Distance used:<br>
                <input type="text" id="distanceUsed" placeholder="Enter distance used">
            </div>
            <div>
                How many reports:<br>
                <input type="text" id="reportsCount" placeholder="Enter number of reports">
            </div>
            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy inputs to the clipboard
                document.getElementById('copyButton').addEventListener('click', function() {
                    const laborRate = document.getElementById('laborRate').value;
                    const avgLaborRate = document.getElementById('avgLaborRate').value;
                    const flexibleRate = document.getElementById('flexibleRate').value;
                    const distanceUsed = document.getElementById('distanceUsed').value;
                    const reportsCount = document.getElementById('reportsCount').value;

                    const allInfo = 
                        "Current labor rate: " + laborRate + "\\n" +
                        "Avg labor rate: " + avgLaborRate + "\\n" +
                        "Flexible on rate: " + flexibleRate + "\\n" +
                        "Distance used: " + distanceUsed + "\\n" +
                        "How many reports: " + reportsCount;

                    // Use the navigator.clipboard API to copy the text
                    navigator.clipboard.writeText(allInfo)
                        .then(() => {
                            alert('Information copied to clipboard!');
                        })
                        .catch(err => {
                            console.error('Could not copy text: ', err);
                            alert('Failed to copy text.');
                        });
                });
            </script>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the authorize note
document.getElementById("paymentInfoButton").addEventListener("click", function() {
    const width = 450;
    const height = 475;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Payment Info", `width=${width},height=${height},top=${top},left=${left}`);

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
                    font-size: 20px;
                    text-align: center;
                    margin-bottom: 20px;
                }
                h2 {
                    font-size: 16px;
                    text-align: center;
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
            <h1>Info Needed for Payment</h1>
            <h2>Payments email or fax</h2>
            <p>Advise final invoice will need to include:</p>
            <li>CH Name</li>
            <li>Full VIN</li>
            <li>Year/Make/Model</li>
            <li>Vehicle mileage</li>
            <li>RF name and address</li>
            <li>Parts and labor breakdown</li>
            <li>CH Signature</li>
            <p>Set expectation for payment by EOD if recieved before 3pm MT</p>
            <p>If recieved after 3pm MT payment will be made next day</p>
            <p>Don't forget to use Auth # in subject line</p>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close();
});

//Function to launch main websites
document.getElementById('launchButton').addEventListener('click', function() {
    // Array of URLs you want to open
    let urls = [
        'https://lemonsquad.com/login',
        'https://www.faxvin.com/vin-decoder',
        'https://plq.fortedata.com/',
        'https://www.imcparts.net/webapp/wcs/stores/servlet/LogonForm?storeId=10651&catalogId=10651&langId=-1&viewRedirect=TermsAndConditionsView&partNumber=',
        'https://www.prodemand.com/#|||||||||||||||||/Home'
    ];

    // Loop through each URL and open it in a new tab
    urls.forEach(function(url) {
        window.open(url, '_blank');
    });
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

// Function to clear the input fields in the notepads
function clearInputcaller() {
    document.getElementById('callerName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('vin').value = '';
    document.getElementById('vehicleMileage').value ='';
    document.getElementById('laborRate').value = '';
    document.getElementById('avgLaborRate').value = '';
    document.getElementById('negRate').value = '';
    document.getElementById('acomments').value = '';
}

function clearInputPart() {
    document.getElementById('contractType').value = '';
    document.getElementById('claimNo').value = '';
    document.getElementById('msrp').value = '';
    document.getElementById('partCost').value = '';
    document.getElementById('bcomments').value = '';
}

function clearInputScratch() {
    document.getElementById('bottomComments').value = '';
}
