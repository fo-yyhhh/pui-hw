document.addEventListener('DOMContentLoaded', function () {
    const originalRoll = document.getElementById('original-roll');
    const appleRoll = document.getElementById('apple-roll');
    const raisinRoll = document.getElementById('raisin-roll');
    const walnutRoll = document.getElementById('walnut-roll');
    const chocolateRoll = document.getElementById('chocolate-roll');
    const strawberryRoll = document.getElementById('strawberry-roll');

    // Function to navigate to the corresponding detail page URL
    function navigateToDetail(rollType) {
        window.location.href = `detail.html?roll=${encodeURIComponent(rollType)}`;
    }

    // Add click event listeners to each roll object
    originalRoll.addEventListener('click', function () {
        navigateToDetail('Original');
    });

    appleRoll.addEventListener('click', function () {
        navigateToDetail('Apple');
    });

    raisinRoll.addEventListener('click', function () {
        navigateToDetail('Raisin');
    });

    walnutRoll.addEventListener('click', function () {
        navigateToDetail('Walnut');
    });

    chocolateRoll.addEventListener('click', function () {
        navigateToDetail('Double-Chocolate');
    });

    strawberryRoll.addEventListener('click', function () {
        navigateToDetail('Strawberry');
    });
});