const signUpForm = document.querySelector('.sign-up-form');
signUpForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
  const formData = new FormData(signUpForm);

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("hashedPassword");

  const body = { email, password, username };
  try {
    const res = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw res;
    }

    const {
      token,
      user: { id },
    } = await res.json();
    // storage access_token in localStorage:
    localStorage.setItem("GOOD_GAMES_ACCESS_TOKEN", token);
    localStorage.setItem("GOOD_GAMES_CURRENT_USER_ID", id);
    
    window.location.href = "/";
  } catch (err) {
    if (err.status >= 400 && err.status < 600) {
      const errorJSON = await err.json();
      const errorsContainer = document.querySelector("sign-up-errors");
      let errorsHtml = [
        `
        <div class="alert alert-danger">
            Something went wrong. Please try again.
        </div>
      `,
      ];
      const { errors } = errorJSON;
      if (errors && Array.isArray(errors)) {
        errorsHtml = errors.map(
          (message) => `
          <div class="alert alert-danger">
              ${message}
          </div>
        `
        );
      }
      errorsContainer.innerHTML = errorsHtml.join("");
    } else {
      alert(
        "Something went wrong. Please check your internet connection and try again!"
      );
    }
  }
})