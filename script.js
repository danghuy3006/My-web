document.querySelector('card').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for testing

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill out both fields.");
    } else {
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
    }
});
function scrollToSection(section) {
    const target = document.getElementById(section);
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
}