document.addEventListener("DOMContentLoaded", function() {
    // Access elements by ID
    const textElement = document.getElementById("textElement");
    const changeTextButton = document.getElementById("changeTextButton");

    // Access the div to change its color
    const changeColorDiv = document.querySelector(".changeColor");
    const changeColorButton = document.getElementById("changeColorButton");

    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change the color of the div when the "Change Color" button is clicked
    changeColorButton.addEventListener("click", function() {
        const randomColor = getRandomColor();
        changeColorDiv.style.backgroundColor = randomColor;
    });

    // Access elements by class name
    const dynamicImage = document.getElementById("dynamicImage");
    const changeImage = document.getElementById("changeImage");

    // Change text using innerHTML property
    changeTextButton.addEventListener("click", function() {
        textElement.innerHTML = "Text has been changed!";
    });

    // Change image source after clicking on a button
    changeImage.addEventListener("click", function() {
        dynamicImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Progressive_enhancement_web_design_pyramid_%28HTML%2C_CSS%2C_JS%29.svg/2362px-Progressive_enhancement_web_design_pyramid_%28HTML%2C_CSS%2C_JS%29.svg.png"; // Change to your image URL
    });

    // Add a text node and attach it to a parent node
    const addTextNodeButton = document.getElementById("addTextNodeButton");
    const parentNode = document.getElementById("parentNode");
    addTextNodeButton.addEventListener("click", function() {
        const textNode = document.createTextNode("This is a new text node.");
        parentNode.appendChild(textNode);
    });

    // Delete a node
    const deleteNodeButton = document.getElementById("deleteNodeButton");
    deleteNodeButton.addEventListener("click", function() {
        if (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    });

    // Use jQuery for some operations
    $("#changeTextButton").click(function() {
        $(this).text("Text Changed with jQuery");
    });

    $("#dynamicImageContainer").css("background-image", "url('background.jpg')"); // Change to your background image

    $("#submitButton").click(function() {
        const inputValue = $("#inputField").val();
        alert("Input Value: " + inputValue);
    });

    $("#textElement").attr("data-custom-attribute", "customValue");
});
