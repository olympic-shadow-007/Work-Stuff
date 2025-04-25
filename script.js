// Function to create a popup window with the labor rate negotiation note
document.getElementById("laborNegNote").addEventListener("click", function() {
    const width = 350;
    const height = 400; 
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Labor Rate Negotiation Note", `width=${width},height=${height},top=${top},left=${left}`);

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
                RF Contact:<br>
                <input type="text" id="contact" placeholder="Who are you talking to?">
            </div>
            <div>
                Posted Labor Rate:<br>
                <input type="number" id="posted" placeholder="Enter posted labor rate (e.g., $45)">
            </div>
            <div>
                Negotiated Rate:<br>
                <input type="number" id="negRate" placeholder="Enter negotiated rate (e.g., $45)">
            </div>
            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy inputs to the clipboard
                document.getElementById('copyButton').addEventListener('click', function() {
                    const contact = document.getElementById('contact').value;
                    const posted = document.getElementById('posted').value;
                    const negRate = document.getElementById('negRate').value;

                    const allInfo = 
                        "***Labor Negotiation Note***" + "\\n \\n" +
                        "RF Contact: " + contact + "\\n" +
                        "Posted Labor Rate: $" + posted + "\\n" +
                        "Negotiated Rate: $" + negRate + "\\n";

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

// Function to create a popup window with the CARFAX Review note
document.getElementById("carfaxReview").addEventListener("click", function() {
    const width = 400;
    const height = 620; 
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "CARFAX Review", `width=${width},height=${height},top=${top},left=${left}`);

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
                    margin-bottom: 15px;
                }
                label {
                    font-weight: bold;
                    display: block;
                    margin-bottom: 5px;
                }
                .radio-group input {
                    margin-right: 5px;
                }
                input[type="text"] {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                button {
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
            <h1>CARFAX Review</h1>
            <div>
                <label>Are there reports of branded/salvage title?</label>
                <div class="radio-group">
                    <input type="radio" name="branded" value="yes"> Yes
                    <input type="radio" name="branded" value="no"> No
                </div>
            </div>
            <div>
                <label>Are there any accidents reported?</label>
                <div class="radio-group">
                    <input type="radio" name="accidents" value="yes"> Yes
                    <input type="radio" name="accidents" value="no"> No
                </div>
            </div>
            <div>
                <label>Does the CH keep up with maintenance?</label>
                <div class="radio-group">
                    <input type="radio" name="maintenance" value="yes"> Yes
                    <input type="radio" name="maintenance" value="no"> No
                </div>
            </div>
            <div>
                <label>How many owners?</label>
                <input type="text" id="owners">
            </div>
            <div>
                <label>When did CH purchase the vehicle?</label>
                <input type="text" id="purchaseVehicle">
            </div>
            <div>
                <label>When did the CH purchase the contract?</label>
                <input type="text" id="purchaseContract">
            </div>
            <div>
                <label>Are there any SRs around when the contract was purchased?</label>
                <div class="radio-group">
                    <input type="radio" name="srs" value="yes"> Yes
                    <input type="radio" name="srs" value="no"> No
                </div>
            </div>
            <div>
                <label>Are there any red flags?</label>
                <div class="radio-group">
                    <input type="radio" name="redflags" value="yes"> Yes
                    <input type="radio" name="redflags" value="no"> No
                </div>
            </div>

            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                document.getElementById('copyButton').addEventListener('click', function() {
                    function getRadioValue(name) {
                        const radios = document.getElementsByName(name);
                        for (let i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                return radios[i].value;
                            }
                        }
                        return null;
                    }

                    const owners = document.getElementById("owners").value.trim();
                    const purchaseVehicle = document.getElementById("purchaseVehicle").value.trim();
                    const purchaseContract = document.getElementById("purchaseContract").value.trim();

                    let note = "";

                    const branded = getRadioValue("branded");
                    if (branded === "yes") {
                        note += "There are reports of a branded/salvage title. I sent the claim to client relations for review. ";
                    } else if (branded === "no") {
                        note += "There are no reports of branded/salvage title. ";
                    }

                    const accidents = getRadioValue("accidents");
                    if (accidents === "yes") {
                        note += "There are accidents reported. ";
                    } else if (accidents === "no") {
                        note += "There are no accidents reported. ";
                    }

                    const maintenance = getRadioValue("maintenance");
                    if (maintenance === "yes") {
                        note += "According to CARFAX, the CH keeps up with maintenance. ";
                    } else if (maintenance === "no") {
                        note += "There are few to no SRs reported on CARFAX. ";
                    }


                    if (owners || purchaseVehicle || purchaseContract) {
                        note += \`There are \${owners} reported owners. The CH purchased the vehicle in \${purchaseVehicle}. The CH purchased the contract on \${purchaseContract}. \`;
                    }

                    const srsAnswer = getRadioValue("srs");
                    if (srsAnswer === "yes") {
                        note += "There are SRs around the time of the contract purchase, and I will be reaching out to the CH to get those to verify this is not pre-existing. ";
                    } else if (srsAnswer === "no") {
                        note += "There were no SRs around when the contract was purchased. ";
                    }

                    if (getRadioValue("redflags") === "no") {
                        note += "There are no signs of red flags.";
                    }

                    const finalNote = note.trim();

                    if (finalNote === "") {
                        alert("Please fill out at least one field.");
                        return;
                    }

                    navigator.clipboard.writeText(finalNote)
                        .then(() => {
                            alert("CARFAX Review note copied to clipboard!");
                        })
                        .catch(err => {
                            console.error("Copy failed: ", err);
                            alert("Failed to copy to clipboard.");
                        });
                });
            </script>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the auth note
document.getElementById("authNote").addEventListener("click", function() {
    const width = 450;
    const height = 850; 
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
            <h1>Authorize Note</h1>
            <div>
                What is the type of contract: <br>
                <input type="text" id="contractType" placeholder="What is the type of contract?">
            </div>
            <div>
                How was failure was verified: <br>
                <input type="text" id="testPerformed" placeholder="What tests were performed?">
            </div>
            <div>
                What was covered by the contract: <br>
                <input type="text" id="coveredParts" placeholder="What parts were covered by the contract?">
            </div>
            <div>
                List any PNLC items:<br>
                <input type="text" id="PNLC" placeholder="List any PNLC items">
            </div>
            <div>
                What part was used and why: <br>
                <input type="text" id="whosPart" placeholder="Who's part was used and why?">
            </div>
            <div>
                How was labor verified: <br>
                <input type="text" id="verifyLabor" placeholder="Did you use Prodemand or Forte?">
            </div>
            <div>
                Has claim history been reviewed: <br>
                <input type="text" id="historyReview" placeholder="Did you review the claim history?">
            </div>
            <div>
                Is SR needed or been reviewed: <br>
                <input type="text" id="serviceReview" placeholder="Is there a SR that needs reviewed?">
            </div>
            <div>
                Are there are any related TSB's: <br>
                <input type="text" id="relatedTSB" placeholder="Are there any TSBs? For what?">
            </div>
            <div>
                List the part difference: <br>
                <input type="text" id="partsDifference" placeholder="How much is the part OOP?">
            </div>
            <div>
                List the labor difference: <br>
                <input type="text" id="laborDifference" placeholder="What is the labor OOP?">
            </div>
            <div>
                Has OOP task been set: <br>
                <input type="text" id="taskSet" placeholder="Has note and task been set?">
            </div>
            <div>
                Who was auth number given to: <br>
                <input type="text" id="saName" placeholder="What is the name of SA?">
            </div>
            <div>
                List payment method: <br>
                <input type="text" id="paymentMethod" placeholder="What is RF payment method?">
            </div>
            <div>
                Remaining LOL after this claim: <br>
                <input type="text" id="LOL" placeholder="Enter the remaining LOL">
            </div>
            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy inputs to the clipboard
                document.getElementById('copyButton').addEventListener('click', function() {
                    const contractType = document.getElementById('contractType').value;
                    const testPerformed = document.getElementById('testPerformed').value;
                    const coveredParts = document.getElementById('coveredParts').value;
                    const PNLC = document.getElementById('PNLC').value;
                    const whosPart = document.getElementById('whosPart').value;
                    const verifyLabor = document.getElementById('verifyLabor').value;
                    const historyReview = document.getElementById('historyReview').value;
                    const serviceReview = document.getElementById('serviceReview').value;
                    const relatedTSB = document.getElementById('relatedTSB').value;
                    const partsDifference = document.getElementById('partsDifference').value;
                    const laborDifference = document.getElementById('laborDifference').value;
                    const taskSet = document.getElementById('taskSet').value;
                    const saName = document.getElementById('saName').value;
                    const paymentMethod = document.getElementById('paymentMethod').value;
                    const LOL = document.getElementById('LOL').value;

                    const allInfo = 
                        "Type of contract: " + contractType + "\\n" +
                        "The failure was verified by: " + testPerformed + " (see breakdown for details)\\n" +
                        "The contract covered: " + coveredParts + "\\n" +
                        "List of PNLC items: " + PNLC + "\\n \\n" +
                        "We are using " + whosPart + "\\n" + 
                        "It was verified MCE under $250 or OE/OES at the time of call" + "\\n" +
                        "Labor was verified using " + verifyLabor + "\\n \\n" +
                        "Has the claim history been reviewed? " + historyReview + "\\n" +
                        "Is SR needed or been reviewed? " + serviceReview + "\\n" +
                        "Any related TSB's? " + relatedTSB + "\\n \\n" +
                        "OOP Costs: \\n" +
                        "Parts - $" + partsDifference + "\\n" +
                        "Labor - $" + laborDifference + "\\n \\n" +
                        "Has the OOP note and task been set? " + taskSet + "\\n \\n" +
                        "Auth number was given to " + saName + "\\n" +
                        "Their payment method is " + paymentMethod + "\\n \\n" +
                        "Remaining LOL after this claim: $" + LOL;

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

// Function to create a popup window with the quick auth note
document.getElementById("quickAuth").addEventListener("click", function() {
    const width = 350;
    const height = 420; 
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Quick Auth Note", `width=${width},height=${height},top=${top},left=${left}`);

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
                    margin-bottom: 15px;
                }
                label {
                    font-weight: bold;
                }
                .radio-group {
                    margin-top: 5px;
                }
                .radio-group input {
                    margin-right: 5px;
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
            <h1>Quick Auth Note</h1>
            <div>
                <label>Was the call transferred?</label>
                <div class="radio-group">
                    <input type="radio" name="transferred" value="yes"> Yes
                    <input type="radio" name="transferred" value="no"> No
                </div>
            </div>
            <div>
                <label>Do we need to order parts?</label>
                <div class="radio-group">
                    <input type="radio" name="parts" value="yes"> Yes
                    <input type="radio" name="parts" value="no"> No
                </div>
            </div>
            <div>
                <label>Did you provide auth number and payment info?</label>
                <div class="radio-group">
                    <input type="radio" name="auth" value="yes"> Yes
                    <input type="radio" name="auth" value="no"> No
                </div>
            </div>
            <div>
                <label>Did you verify RF payment info?</label>
                <div class="radio-group">
                    <input type="radio" name="rf" value="yes"> Yes
                    <input type="radio" name="rf" value="no"> No
                </div>
            </div>

            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                document.getElementById('copyButton').addEventListener('click', function() {
                    function getRadioValue(name) {
                        const radios = document.getElementsByName(name);
                        for (let i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                return radios[i].value;
                            }
                        }
                        return null;
                    }

                    let note = "";

                    if (getRadioValue("transferred") === "yes") {
                        note += "I was transferred a call from customer service. ";
                    }
                    if (getRadioValue("parts") === "yes") {
                        note += "I ordered parts and provided the SA with the ETA. ";
                    }
                    if (getRadioValue("auth") === "yes") {
                        note += "I provided the SA with the auth number and payment info (payments@americanautoshield.com). ";
                    }
                    if (getRadioValue("rf") === "yes") {
                        note += "I verified that the payment info on the RF profile is correct.";
                    }

                    if (note.trim() === "") {
                        alert("Please answer at least one question.");
                        return;
                    }

                    navigator.clipboard.writeText(note.trim())
                        .then(function() {
                            alert('Quick Auth Note copied to clipboard!');
                        })
                        .catch(function(err) {
                            console.error('Failed to copy: ', err);
                            alert('Clipboard copy failed.');
                        });
                });
            </script>
        </body>
        </html>
    `);

    newWindow.document.close();
});

// Function to create a popup window with the PNLC note
document.getElementById("PNLCnote").addEventListener("click", function() {
    const width = 450;
    const height = 450;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "PNLC Note", `width=${width},height=${height},top=${top},left=${left}`);

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
                input {
                    width: calc(100% - 10px);
                    padding: 5px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            <h1>Inspection Note</h1>
            <div id="noteContent">
                <p>SA called in to check eligibility for coverage for part listed below. Per the contract, this part is PNLC. 
                Informed SA, they understood. EOC.</p>
                <ul id="failureList">
                    <li id="failure1">Part 1 - Part No</li>  
                    <li id="failure2">Part 2 - Part No</li>
                </ul>
                <h2>Input Failed Parts</h2>
                <div id="failedPartsContainer">
                    <input type="text" class="failedPart" placeholder="Enter failed part - part no">
                </div>
                <button id="addFailedPartButton">Add Another Failed Part</button>
            </div>
            <button onclick="copyFormattedText()">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy formatted text
                function copyFormattedText() {
                    const noteContent = document.getElementById('noteContent');
                    const failedParts = Array.from(document.querySelectorAll('.failedPart')).map(input => input.value.trim()).filter(part => part !== '');

                    let formattedText = '';

                    // Append the existing note content
                    noteContent.childNodes.forEach(node => {
                        if (node.tagName === 'P') {
                            formattedText += node.innerText + '\\n\\n';  
                        } else if (node.tagName === 'UL') {
                            // Update the list with current failed parts
                            node.innerHTML = ''; // Clear existing list items
                            failedParts.forEach(part => {
                                const li = document.createElement('li');
                                li.textContent = part;
                                node.appendChild(li);
                                formattedText += '- ' + part + '\\n';  
                            });
                            formattedText += '\\n';
                        }
                    });

                    // Copy the formatted text to the clipboard
                    navigator.clipboard.writeText(formattedText).then(() => {
                        alert('Formatted content copied to clipboard');
                    }).catch(error => {
                        alert('Error copying text: ' + error);
                    });
                }

                // Function to add a new failed part input field
                document.getElementById('addFailedPartButton').addEventListener('click', function() {
                    const failedPartsContainer = document.getElementById('failedPartsContainer');
                    const failedPartInputs = failedPartsContainer.querySelectorAll('.failedPart');

                    // Limit to a maximum of 10 input fields
                    if (failedPartInputs.length < 10) {
                        const newInput = document.createElement('input');
                        newInput.type = 'text';
                        newInput.className = 'failedPart';
                        newInput.placeholder = 'Enter failed part - part no';
                        failedPartsContainer.appendChild(newInput);
                    }
                });
            </script>
        </body>
        </html>
    `);
});

// Function to create a popup window with the status note
document.getElementById("statusNote").addEventListener("click", function() {
    const width = 350;
    const height = 700; 
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
            <h1>Status Note</h1>
            <div>
                Why is claim delayed:<br>
                <input type="text" id="claimDelay" placeholder="What are we waiting on?">
            </div>
            <div>
                Is CH aware of delay:<br>
                <input type="text" id="chAware" placeholder="Is CH aware of delay?">
            </div>
            <div>
                What is needed from CH:<br>
                <input type="text" id="chDocs" placeholder="What is needed from the CH?">
            </div>
            <div>
                What is needed from RF:<br>
                <input type="text" id="rfDocs" placeholder="What is needed from the RF?">
            </div>
            <div>
                What are the next steps in the process:<br>
                <input type="text" id="nextSteps" placeholder="What are the next steps?">
            </div>
            <div>
                Any conversations that need to happen:<br>
                <input type="text" id="convos" placeholder="Who do we need to call and why?">
            </div>
            <div>
                What have you completed already:<br>
                <input type="text" id="completed" placeholder="What have you completed already:">
            </div>
            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy inputs to the clipboard
                document.getElementById('copyButton').addEventListener('click', function() {
                    const claimDelay = document.getElementById('claimDelay').value;
                    const chAware = document.getElementById('chAware').value;
                    const chDocs = document.getElementById('chDocs').value;
                    const rfDocs = document.getElementById('rfDocs').value;
                    const nextSteps = document.getElementById('nextSteps').value;
                    const convos = document.getElementById('convos').value;
                    const completed = document.getElementById('completed').value;

                    const allInfo = 
                        "The claim is delayed because " + claimDelay + "\\n" +
                        "The CH is aware of the delay:  " + chAware + "\\n" +
                        "The CH needs to send us " + chDocs + "\\n" +
                        "The RF needs to send us " + rfDocs + "\\n" +
                        "The next steps are to " + nextSteps + "\\n" +
                        "Who do we need to talk to:  " + convos + "\\n" +
                        "I have already " + completed + "\\n";

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

// Function to create a popup window with the inspection note
document.getElementById("setInspectionNote").addEventListener("click", function() {
    const width = 450;
    const height = 650;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Set Inspection Note", `width=${width},height=${height},top=${top},left=${left}`);

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
                input {
                    width: calc(100% - 10px);
                    padding: 5px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            <h1>Inspection Note</h1>
            <div id="noteContent">
                <p>Please take pictures of all four corners of the vehicle, odometer, VIN, and license plate. 
                Please note any signs of abuse, rust/corrosion, collision, modifications, or commercial use. 
                Please verify the posted labor rate and get a picture if possible. 
                Please provide photos of brake rotors and license plate/registration.</p> 
                <p>The technician is to demonstrate failure(s) to the following:</p>  
                <ul id="failureList">
                    <li id="failure1">Failure 1</li>  
                    <li id="failure2">Failure 2</li>
                </ul>
                <p>Please reach out to the repair facility 1-2 hours before arrival.</p> 
                <p>Thank you!</p>
                <h2>Input Failed Parts</h2>
                <div id="failedPartsContainer">
                    <input type="text" class="failedPart" placeholder="Enter failed part">
                </div>
                <button id="addFailedPartButton">Add Another Failed Part</button>
            </div>
            <button onclick="copyFormattedText()">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy formatted text
                function copyFormattedText() {
                    const noteContent = document.getElementById('noteContent');
                    const failedParts = Array.from(document.querySelectorAll('.failedPart')).map(input => input.value.trim()).filter(part => part !== '');

                    let formattedText = '';

                    // Append the existing note content
                    noteContent.childNodes.forEach(node => {
                        if (node.tagName === 'P') {
                            formattedText += node.innerText + '\\n\\n';  
                        } else if (node.tagName === 'UL') {
                            // Update the list with current failed parts
                            node.innerHTML = ''; // Clear existing list items
                            failedParts.forEach(part => {
                                const li = document.createElement('li');
                                li.textContent = part;
                                node.appendChild(li);
                                formattedText += '- ' + part + '\\n';  
                            });
                            formattedText += '\\n';
                        }
                    });

                    // Copy the formatted text to the clipboard
                    navigator.clipboard.writeText(formattedText).then(() => {
                        alert('Formatted content copied to clipboard');
                    }).catch(error => {
                        alert('Error copying text: ' + error);
                    });
                }

                // Function to add a new failed part input field
                document.getElementById('addFailedPartButton').addEventListener('click', function() {
                    const failedPartsContainer = document.getElementById('failedPartsContainer');
                    const failedPartInputs = failedPartsContainer.querySelectorAll('.failedPart');

                    // Limit to a maximum of 10 input fields
                    if (failedPartInputs.length < 10) {
                        const newInput = document.createElement('input');
                        newInput.type = 'text';
                        newInput.className = 'failedPart';
                        newInput.placeholder = 'Enter failed part';
                        failedPartsContainer.appendChild(newInput);
                    }
                });
            </script>
        </body>
        </html>
    `);
});

// Function to create a popup window for inspection review note
document.getElementById("inspectionReview").addEventListener("click", function() {
    const width = 450;
    const height = 700; 
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Inspection Review", `width=${width},height=${height},top=${top},left=${left}`);

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
                input, textarea {
                    width: 100%;
                    padding: 10px;
                    margin-top: 5px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                textarea {
                    resize: vertical;
                    height: 100px;
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
            <h1>Inspection Review</h1>
            <div>
                Reason for Inspection: <br>
                <input type="text" id="reasonForInspection" placeholder="Enter the reason for inspection">
            </div>
            <div>
                Labor Rate: <br>
                <input type="text" id="laborRate" placeholder="Enter the labor rate">
            </div>
            <div>
                Mileage: <br>
                <input type="text" id="mileage" placeholder="Enter the mileage">
            </div>
            <div>
                Fluid Condition: <br>
                <input type="text" id="fluidCondition" placeholder="Describe the fluid condition">
            </div>
            <div>
                Modifications/Collision/Commercial: <br>
                <input type="text" id="modifications" placeholder="Describe any modifications, collision, or commercial usage">
            </div>
            <div>
                Days into Contract: <br>
                <input type="text" id="daysIntoContract" placeholder="Enter days into contract">
            </div>
            <div>
                Miles into Contract: <br>
                <input type="text" id="milesIntoContract" placeholder="Enter miles into contract">
            </div>
            <div>
                Inspector findings/photo review (in your own words): <br>
                <textarea id="inspectorFindings" placeholder="Summarize the inspector findings and photo review"></textarea>
            </div>
            <button id="copyButton">Copy to Clipboard</button>
            <button onclick="window.close()">Close</button>

            <script>
                // Function to copy inputs to the clipboard
                document.getElementById('copyButton').addEventListener('click', function() {
                    const reasonForInspection = document.getElementById('reasonForInspection').value;
                    const laborRate = document.getElementById('laborRate').value;
                    const mileage = document.getElementById('mileage').value;
                    const fluidCondition = document.getElementById('fluidCondition').value;
                    const modifications = document.getElementById('modifications').value;
                    const daysIntoContract = document.getElementById('daysIntoContract').value;
                    const milesIntoContract = document.getElementById('milesIntoContract').value;
                    const inspectorFindings = document.getElementById('inspectorFindings').value;

                    const allInfo = 
                        "**********INSPECTION REVEIW**********" + "\\n \\n" +
                        "Reason for Inspection: " + reasonForInspection + "\\n" +
                        "Labor Rate: " + laborRate + "\\n" +
                        "Mileage: " + mileage + "\\n" +
                        "Fluid Condition: " + fluidCondition + "\\n" +
                        "Modifications/Collision/Commercial: " + modifications + "\\n" +
                        "Days into Contract: " + daysIntoContract + "\\n" +
                        "Miles into Contract: " + milesIntoContract + "\\n" +
                        "Inspector findings/photo review: " + inspectorFindings;

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

// Function to launch labor rate negotiation script
document.getElementById("laborNegScript").addEventListener("click", function() {
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
                        newWindow.document.body.innerHTML = `<p>No problem, thanks for considering it. I will update your repair facility profile to $${laborRate}. Please keep in mind that there could be other times during the claims process that we may ask you to negotiate pricing.</p>`;
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

// Function to create a popup window with the payment info
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

// Function to create a popup window with the PT Transfer Script
document.getElementById("ptTransferButton").addEventListener("click", function() {
    const width = 400;
    const height = 300;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "PT Transfer Script", `width=${width},height=${height},top=${top},left=${left}`);

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
                    font-size: 16px;
                }
                span {
                    font-size: 14px;
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
            <h1>PT Transfer Script</h1>
            <p>Your claim number is (XXXXXXX). I am assigning your claim to a Powertrain adjuster. That adjuster will be reaching back out to you in the next 24 business hours. Please prepare an itemized estimate for when they call.</p>
            <span>*If the RF is not prepared to start the claim, you can save the pre-claim by hitting [Pend Breakdown]. This will not open a claim, but will document all information.</span>
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
        'https://www.faxvin.com/vin-decoder',
        'https://www.imcparts.net/webapp/wcs/stores/servlet/LogonForm?storeId=10651&catalogId=10651&langId=-1&viewRedirect=TermsAndConditionsView&partNumber=',
        'https://plq.fortedata.com/',
        'https://www.prodemand.com/#|||||||||||||||||/Home'
    ];

    // Loop through each URL and open it in a new tab
    urls.forEach(function(url) {
        window.open(url, '_blank');
    });
});

// Function to clear the input fields in the notepads
function clearInputcaller() {
    document.getElementById('callerName').value = '';
    document.getElementById('shop').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('avgLaborRate').value = '';
    document.getElementById('laborRate').value ='';
    document.getElementById('negRate').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('numberOfReports').value = '';
    document.getElementById('acomments').value = '';
}

function clearInputPart() {
    document.getElementById('contractType').value = '';
    document.getElementById('seq').value = '';
    document.getElementById('partOOP').value = '';
    document.getElementById('laborOOP').value = '';
    document.getElementById('bcomments').value = '';
}

function clearInputScratch() {
    document.getElementById('bottomComments').value = '';
}
