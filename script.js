document.getElementById('logo').addEventListener('click', function () {
    var companyInfo = document.getElementById('companyInfo');
    var navOptions = document.getElementById('navOptions');

    if (companyInfo.style.display === 'none' || companyInfo.style.display === '') {
        companyInfo.style.display = 'flex';
        navOptions.style.display = 'flex';
    } else {
        companyInfo.style.display = 'none';
        navOptions.style.display = 'none';
    }
});

// Handle dropdown click
var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');
var logoutItem = document.querySelector('#navOptions .logout-item');

dropdown.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the logo click handler

    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
        if (!logoutItem) {
            // Create and append the Logout item
            // logoutItem = document.createElement('li');
            // logoutItem.className = 'logout-item';
            document.querySelector('#navOptions ul').appendChild(logoutItem);
        }
    } else {
        dropdownContent.style.display = '';
        if (logoutItem) {
            // Remove the Logout item
            logoutItem.remove();
        }
    }
});

// Close dropdown when clicking outside of it
document.addEventListener('click', function (event) {
    if (event.target !== dropdown && event.target !== dropdownContent) {
        dropdownContent.style.display = 'none';
        if (logoutItem) {
            logoutItem.remove();
        }
    }
});