const decreaseButtons = document.querySelectorAll(".fas.fa-minus-circle");
const increaseButtons = document.querySelectorAll(".fas.fa-plus-circle");
const deleteButtons = document.querySelectorAll(".fas.fa-trash-alt");
const likeButtons = document.querySelectorAll(".fas.fa-heart");

function updateQuantity(element, increment) {
    const quantityElement = element.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (increment) {
        quantity++; // équivalent à quantity = quantity + 1;
    } else {
        if (quantity > 0) {
            quantity--;
        }
    }
    quantityElement.textContent = quantity;
}

// Attach event listeners to decrease buttons
decreaseButtons.forEach(button => {
    button.addEventListener('click', function() {
        updateQuantity(button, false);
    });
});

// Attach event listeners to increase buttons
increaseButtons.forEach(button => {
    button.addEventListener('click', function() {
        updateQuantity(button, true);
    });
});

// Attach event listeners to delete buttons
deleteButtons.forEach(button => {
button.addEventListener ('click' , function () {
    const cardParent = button .closest (".card-body");
    cardParent.parentElement.remove();
}
)

})

// Attach event listeners to like buttons
likeButtons.forEach(button => {
    button.addEventListener("click", function() {
        button.classList.toggle("text-danger");
    });
});