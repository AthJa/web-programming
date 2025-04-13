document.addEventListener("DOMContentLoaded", function () {
    // (i) Create a 3x3 dynamic table
    const table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.style.border = "1px solid black";
            cell.style.padding = "10px";
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);

    // (ii) Create a button and change color on mouse over
    const button = document.createElement("button");
    button.textContent = "Hover Me";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.margin = "10px";
    
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "green";
    });
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "red";
    });
    document.body.appendChild(button);

    // (iii) Create a textbox with color change on focus and greeting on change
    const textbox = document.createElement("input");
    textbox.type = "text";
    textbox.style.backgroundColor = "green";
    textbox.style.margin = "10px";
    
    textbox.addEventListener("focus", function () {
        textbox.style.backgroundColor = "yellow";
    });
    textbox.addEventListener("blur", function () {
        textbox.style.backgroundColor = "green";
    });
    textbox.addEventListener("change", function () {
        alert("Hello! You changed the text.");
    });
    document.body.appendChild(textbox);

    // (iv) Input field & button to add list items on double click
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter text";
    document.body.appendChild(inputField);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to List";
    document.body.appendChild(addButton);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    addButton.addEventListener("dblclick", function () {
        if (inputField.value.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = inputField.value;
            ul.appendChild(li);
            inputField.value = "";
        }
    });

    // (v) Keypress counter input fields
    const inputCounter = document.createElement("input");
    inputCounter.type = "text";
    inputCounter.placeholder = "Type something";
    document.body.appendChild(inputCounter);

    const countDisplay = document.createElement("input");
    countDisplay.type = "text";
    countDisplay.readOnly = true;
    countDisplay.value = "Keypress Count: 0";
    document.body.appendChild(countDisplay);

    let count = 0;
    inputCounter.addEventListener("keypress", function () {
        count++;
        countDisplay.value = `Keypress Count: ${count}`;
    });
});
