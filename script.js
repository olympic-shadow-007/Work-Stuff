// Load saved data from local storage on page load
window.onload = function() {
    document.getElementById('callerName').value = localStorage.getItem('callerName') || '';
    document.getElementById('zipCode').value = localStorage.getItem('zipCode') || '';
    document.getElementById('vin').value = localStorage.getItem('vin') || '';
    updateSavedNote();
};

// Function to save the note
function saveNote() {
    const callerName = document.getElementById('callerName').value;
    const zipCode = document.getElementById('zipCode').value;
    const vin = document.getElementById('vin').value;

    // Store the data in local storage
    localStorage.setItem('callerName', callerName);
    localStorage.setItem('zipCode', zipCode);
    localStorage.setItem('vin', vin);

    updateSavedNote();
}

// Function to update the displayed saved note
function updateSavedNote() {
    const callerName = localStorage.getItem('callerName') || '';
    const zipCode = localStorage.getItem('zipCode') || '';
    const vin = localStorage.getItem('vin') || '';

    document.getElementById('savedNote').value = `Caller Name: ${callerName}\nZIP Code: ${zipCode}\nVIN: ${vin}`;
}

// Function to clear the note
function clearNote() {
    localStorage.removeItem('callerName');
    localStorage.removeItem('zipCode');
    localStorage.removeItem('vin');

    document.getElementById('callerName').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('vin').value = '';

    updateSavedNote();
}
