document.addEventListener("DOMContentLoaded", function () {
    // Hide options on page load
    document.querySelectorAll('.options-container').forEach(container => {
        container.style.display = 'none';
    });
});

function toggleOptions(subscriptionOption) {
    // Check if the clicked subscription option is already active
    const isActive = subscriptionOption.classList.contains('active');

    // Reset all subscription options
    document.querySelectorAll('.subscription-option').forEach(option => {
        option.classList.remove('active');
        option.querySelector('input[type="radio"]').checked = false;

        // Hide options by default
        option.querySelectorAll('.options-container').forEach(container => {
            container.style.display = 'none';
        });
    });

    if (!isActive) {
        // Toggle the active class to show/hide options
        subscriptionOption.classList.add('active');
        subscriptionOption.querySelector('input[type="radio"]').checked = true;

        // Show options for the clicked subscription option
        subscriptionOption.querySelectorAll('.options-container').forEach(container => {
            container.style.display = 'flex';
        });

         // Update the total price based on the selected subscription
         const priceValue = subscriptionOption.querySelector('.price-value').getAttribute('value');
         document.getElementById('total-price').innerText = priceValue;
    }
}