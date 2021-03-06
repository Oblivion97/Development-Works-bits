// function closeMenu(){
//   element = document.getElementById('nav_top');
//   if(element){
//     if(element.classList.contains('show')){
//       document.getElementById('navbar_toggler').dispatchEvent(new CustomEvent('click'));
//     }
//   }
// }
// $(document).ready(function () {
//   $(document).click(function (event) {
//     closeMenu();
//   });
// });

// $(document).ready(function () {
//     $(document).click(function (event) {
//         var click = $(event.target);
//         var _open = $(".navbar-collapse").hasClass("show");
//         if (_open === true && !click.hasClass("navbar-toggler")) {
//             $(".navbar-toggler").click();
//         }
//     });
// });