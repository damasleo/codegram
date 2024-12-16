const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownIcon = dropdownToggle.querySelector('.dropdown-icon');
const notificationsIcon = document.getElementById('notifications');
const notificationPopup = document.querySelector('.notification-popup');
const notificationCount = document.querySelector('.notification-count'); 
const profileDropdownToggle = document.getElementById('profileDropdownToggle');
const profileDropdown = document.getElementById('profileDropdown');


dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');

  if (dropdownMenu.classList.contains('open')) {
    dropdownIcon.classList.remove('fa-chevron-down');
    dropdownIcon.classList.add('fa-times');
  } else {
    dropdownIcon.classList.remove('fa-times');
    dropdownIcon.classList.add('fa-chevron-down');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const notificationIcon = document.getElementById('notifications');
  const notificationPopup = document.querySelector('.notification-popup');

  notificationPopup.style.display = 'none';

  notificationIcon.addEventListener('click', (e) => {
      e.preventDefault(); 
      if (notificationPopup.style.display === 'none') {
          notificationPopup.style.display = 'block';
      } else {
          notificationPopup.style.display = 'none';
      }
  });

  if (notificationPopup.classList.contains('show')) {
    notificationCount.style.display = 'none';
} else {
    notificationCount.style.display = 'inline'; 
}
});

  document.addEventListener('click', (e) => {
      if (!notificationIcon.contains(e.target) && !notificationPopup.contains(e.target)) {
          notificationPopup.style.display = 'none';
      }
  });
  notificationsIcon.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    notificationPopup.classList.toggle('show');

    
    if (notificationPopup.classList.contains('show')) {
        notificationCount.style.display = 'none';
    } else {
        notificationCount.style.display = 'inline'; 
    }
});

document.addEventListener('click', () => {
    if (notificationPopup.classList.contains('show')) {
        notificationPopup.classList.remove('show');
        notificationCount.style.display = 'inline';
    }
});

profileDropdownToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  profileDropdown.classList.toggle('show');
});

document.addEventListener('click', () => {
  if (profileDropdown.classList.contains('show')) {
      profileDropdown.classList.remove('show');
  }
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        menuItems.forEach(menu => menu.classList.remove('active'));

        item.classList.add('active');
    });
});







