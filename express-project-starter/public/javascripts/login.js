// window.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.getElementById('login-form');

//   loginForm.addEventListener("submit", async (event) => {
//     const formData = new FormData(loginForm);
//     const username = formData.get('username');
//     const password = formData.get('password');
//     await fetch('http://localhost:8000/users/login', {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//   })

// });
