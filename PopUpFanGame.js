function showPopup() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('loader').style.display = 'block';
    document.getElementById('generatedName').textContent = '';

    setTimeout(() => {
        generateName();
        document.getElementById('loader').style.display = 'none';
        document.getElementById('generatedName').textContent = generateName();
    }, 1500);
}