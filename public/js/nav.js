

const iconProfile = document.querySelector('.icon-display');

iconProfile.addEventListener('mouseenter', async (e) => {
    iconProfile.classList.remove('fa-regular');
    iconProfile.classList.add('fa-solid');
});

iconProfile.addEventListener('mouseleave', async (e) => {
    iconProfile.classList.remove('fa-solid');
    iconProfile.classList.add('fa-regular');
});

iconProfile.addEventListener('click', async (e) => {
    
});