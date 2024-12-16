// Function to create a popup window with the auth note
document.getElementById("authButton").addEventListener("click", function() {
    const width = 450;
    const height = 800; 
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
                Are there any OOP Costs: <br>
                <input type="text" id="oopCosts" placeholder="Are there any OOP Costs?">
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
                Did we attempt to contact the CH about OOP cost: <br>
                <input type="text" id="oopAttempt" placeholder="Did we attempt to contact the CH about OOP cost?">
            </div>
            <div>
                If unsuccessful, has note and task been set: <br>
                <input type="text" id="taskSet" placeholder="If unsuccessful, has note and task been set?">
            </div>
            <div>
                Who was auth number given to: <br>
                <input type="text" id="saName" placeholder="What is the name of SA?">
            </div>
            <div>
                List payment method: <br>
                <input type="text" id="paymentMethod" placeholder="What is RF payment method?">
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
                    const oopCosts = document.getElementById('oopCosts').value;
                    const partsDifference = document.getElementById('partsDifference').value;
                    const laborDifference = document.getElementById('laborDifference').value;
                    const oopAttempt = document.getElementById('oopAttempt').value;
                    const taskSet = document.getElementById('taskSet').value;
                    const saName = document.getElementById('saName').value;
                    const paymentMethod = document.getElementById('paymentMethod').value;

                    const allInfo = 
                        "Type of contract: " + contractType + "\\n" +
                        "The failure was verified by " + testPerformed + "\\n" +
                        "The contract covered " + coveredParts + "\\n" +
                        "List of PNLC items: " + PNLC + "\\n" +
                        "We are using " + whosPart + " because it was verified MCE under $250 or OE/OES " + "\\n" +
                        "Labor was verified using " + verifyLabor + "\\n" +
                        "The claim history has been reviewed: " + historyReview + "\\n" +
                        "Is SR needed or been reviewed: " + serviceReview + "\\n" +
                        "The related TSB's: " + relatedTSB + "\\n" +
                        "The OOP cost difference is " + oopCosts + "\\n" +
                        "List the cost difference: " + "\\n" +
                        "Parts - " + partsDifference + "\\n" +
                        "Labor - " + laborDifference + "\\n" +
                        "Did we attempt to contact the CH about OOP cost? " + oopAttempt + "\\n" +
                        "If unsuccessful, has note and task been set? " + taskSet + "\\n" +
                        "Auth number was given to " + saName + "\\n" +
                        "Their payment method is " + paymentMethod;

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
       
// Function to create a popup window with the status note
document.getElementById("statusButton").addEventListener("click", function() {
    const width = 400;
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
document.getElementById("inspectionNote").addEventListener("click", function() {
    const width = 450;
    const height = 650;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Inspection Note", `width=${width},height=${height},top=${top},left=${left}`);

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
                <input type="text" id="flexibleRate" placeholder="(Y/N) - Enter negotiated rate">
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

// Function to create a popup window with the other diag references
document.getElementById("otherDiag").addEventListener("click", function() {
    const width = 450;
    const height = 200;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Other Diag References", `width=${width},height=${height},top=${top},left=${left}`);

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
            <h1>Diag We Can Help With</h1>
            <li>Noise isolation (chassis ears) - 0.2</li>
            <li>Haha ;-)</li> 
            <button onclick="window.close()">Close</button>
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
                <p>SA called in to check elgibility for coverage for part listed below. Per the contract, this part is PNLC. 
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
                        newInput.placeholder = 'Enter failed part';
                        failedPartsContainer.appendChild(newInput);
                    }
                });
            </script>
        </body>
        </html>
    `);
});

// Function to create a popup window with the chemical diag references
document.getElementById("chemDiagRef").addEventListener("click", function() {
    const width = 450;
    const height = 200;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    let newWindow = window.open("", "Chemical Diag References", `width=${width},height=${height},top=${top},left=${left}`);

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
            <h1>Diag We Can Help With</h1>
            <li>Araceli said not to use this</li>
            <li>Franklin will get you</li>
            <li>Use ProDemand for diag references</li>
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

// Function to clear the input fields in the notepads
function clearInputcaller() {
    document.getElementById('callerName').value = '';
    document.getElementById('shop').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('avgLaborRate').value = '';
    document.getElementById('laborRate').value ='';
    document.getElementById('negRate').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('LOL').value = '';
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
