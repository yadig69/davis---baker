// let section = document.querySelectorAll('section')
// let menu = document.querySelectorAll('header nav a')

// window.onscroll = () => {
//     section.forEach(i => {
//         let top = window.scrollY;
//         let offset = i.offsetTop - 150;
//         let height = i.offsetHeight;
//         let id = i.getAttribute('id');
//         if (top >= offset && top < offset + height) {
//             menu.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[*=' + id +']').classList.add('active');
//             })
            
//         }
//     })
// }