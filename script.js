// Function to clear the input
function clearInput() {
    document.getElementById('callerName').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('vin').value = '';
    document.getElementById('comments').value = '';
};

// Function to launch labor rate script
document.getElementById("laborButton").addEventListener("click", function() {
    // Create a new window (pop-up) with specific dimensions
    let newWindow = window.open("", "Negotiation Script", "width=400,height=300");

    // Add content to the new window
    newWindow.document.write("<h1>Labor Rate Negotiation UPDATE 8/27/24</h1>");
    newWindow.document.write("<p>What is the current posted labor rate at your Repair Facility?</p>");
});
