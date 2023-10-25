// // Icons selector
// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");

// // Fix local storage
// if (typeof localStorage !== 'undefined') {
//     localStorage.setItem('key', 'value');
//   } else if (typeof sessionStorage !== 'undefined') {
//     // Fallback to sessionStorage if localStorage is not supported
//     sessionStorage.setItem('key', 'value');
//   } else {
//     // If neither localStorage nor sessionStorage is supported
//     console.log('Web Storage is not supported in this environment.');
//   }

// // system theme and user theme
// const userTheme = localstorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

// //toggle for icons
// const iconToggle = () => {
//     moonIcon.classList.toggle("display-none");
//     sunIcon.classList.toggle("display-none");
// }

// // Check theme
// const themeCheck = () => {
//     if (userTheme === "dark" || (!userTheme && systemTheme)) {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         return;
//     }
//     sunIcon.classList.add("display-none");
// }

// // Manual theme switch
// const themeSwitch = () => {
//     if (document.documentElement.classList.contains("dark")) {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         iconToggle()
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
// }

// // listen to click (eventlistener)
// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// })
// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// // Initiate Theme check
// themeCheck();
