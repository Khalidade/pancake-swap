function initialize() {
    function toggleVisibility() {
        var prizePotDet = document.getElementById('prize-pot-det');
        var toggleButton = document.getElementById('toggleButton');
        var toggleText = document.getElementById('toggleText');

        if (prizePotDet.style.display === 'none' || prizePotDet.style.display === '') {
            prizePotDet.style.display = 'block';
            toggleText.innerText = document.innerText;
        } else {
            prizePotDet.style.display = 'none';
            toggleText.innerText = 'Details';
        }
    }

    document.getElementById('toggleButton').addEventListener('click', toggleVisibility);
}

document.addEventListener('DOMContentLoaded', initialize);