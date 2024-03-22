
// document.querySelectorAll('#menu ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);
//         if (targetSection) {
//             document.querySelectorAll('section').forEach(section => {
//                 section.classList.add('active');
//             });
//             targetSection.classList.add('active');
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     })
// });