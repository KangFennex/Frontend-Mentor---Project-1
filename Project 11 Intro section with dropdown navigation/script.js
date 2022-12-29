const featureBtn = document.querySelector('.feature-btn');
const companyBtn = document.querySelector('.company-btn');
const featureBlog = document.querySelector('#features-blog');
const companyBlog = document.querySelector('#company-blog');
const featuresArrowUp = document.querySelector('.features-arrow-up');
const featuresArrowDown = document.querySelector('.features-arrow-down');
const companyArrowUp = document.querySelector('.company-arrow-up');
const companyArrowDown = document.querySelector('.company-arrow-down');
const hamburgMenuOpen = document.querySelector('.open-menu');
const hamburgMenuClose = document.querySelector('.close-menu');
const mobileSidePanel = document.querySelector('.mobile-side-panel');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileFeaturesBtn = document.querySelector('.mobile-features-btn');
const mobileFeaturesMenu = document.querySelector('.mobile-feature-blog');
const mobileCompanyBtn = document.querySelector('.mobile-company-btn')
const mobileCompanyMenu = document.querySelector('.mobile-company-blog');
const mobileCompanyArrowUp = document.querySelector('.mobile-company-arrow-up');
const mobileCompanyArrowDown = document.querySelector('.mobile-company-arrow-down');
const mobileFeaturesArrowUp = document.querySelector('.mobile-features-arrow-up');
const mobileFeaturesArrowDown = document.querySelector('.mobile-features-arrow-down');


featureBtn.addEventListener('click', () => {
    featureBlog.classList.toggle('display-none');
    featuresArrowUp.classList.toggle('display-none');
    featuresArrowDown.classList.toggle('display-none');
})

companyBtn.addEventListener('click', () => {
    companyBlog.classList.toggle('display-none');
    companyArrowUp.classList.toggle('display-none');
    companyArrowDown.classList.toggle('display-none');
})

hamburgMenuOpen.addEventListener('click', () => {
    hamburgMenuClose.style.display = 'block';
    hamburgMenuOpen.style.display = 'none';
    mobileSidePanel.style.display = 'block';
})

hamburgMenuClose.addEventListener('click', () => {
    hamburgMenuClose.style.display = 'none';
    hamburgMenuOpen.style.display = 'block';
    mobileSidePanel.style.display = 'none';
})

mobileFeaturesBtn.addEventListener('click', () => {
    mobileFeaturesMenu.classList.toggle('display-none');
    mobileFeaturesArrowUp.classList.toggle('display-none');
    mobileFeaturesArrowDown.classList.toggle('display-none');
})

mobileCompanyBtn.addEventListener('click', () => {
    mobileCompanyMenu.classList.toggle('display-none');
    mobileCompanyArrowUp.classList.toggle('display-none');
    mobileCompanyArrowDown.classList.toggle('display-none');
})

if (window.size > 750) {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.toggle('display-none')
}