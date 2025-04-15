// Change text content dynamically
function changeText() {
    const heading = document.getElementById("dynamic-heading");
    heading.textContent = "Text Changed Dynamically!";
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const section = document.getElementById("styled-section");
    section.style.backgroundColor = "#ffcccb"; // Light red background
    section.style.color = "#333"; // Dark text
    section.style.padding = "20px";
    section.style.borderRadius = "10px";
}

// Add or remove an element when a button is clicked
function toggleElement() {
    const container = document.getElementById("element-container");
    const existingElement = document.getElementById("dynamic-element");

    if (existingElement) {
        // Remove the element
        container.removeChild(existingElement);
    } else {
        // Add a new element
        const newElement = document.createElement("p");
        newElement.id = "dynamic-element";
        newElement.textContent = "This is a dynamically added element!";
        container.appendChild(newElement);
    }
}