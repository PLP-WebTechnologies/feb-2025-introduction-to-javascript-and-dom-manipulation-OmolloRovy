// Change text content dynamically
function changeText() {
    const heading = document.getElementById("dynamic-heading");
    heading.textContent = "I am Vanistelrooy Masime!";
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const section = document.getElementById("about");
    section.style.backgroundColor = "#d3d3d3"; // Light red background
    section.style.color = "#233"; // Dark text
    section.style.padding = "20px";
    section.style.borderRadius = "10px";
    section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
}

// Add or remove an element when a button is clicked
function toggleElement() {
    const container = document.getElementById("contact");
    const existingElement = document.getElementById("dynamic-element");

    if (existingElement) {
        // Remove the element
        container.removeChild(existingElement);
    } else {
        // Add a new element
        const newElement = document.createElement("p");
        newElement.id = "dynamic-element";
        newElement.textContent = "Contact me fo other Services!";
        newElement.style.color = "#007bff"; // Blue text
        newElement.style.fontWeight = "bold";
        container.appendChild(newElement);
    }
}
