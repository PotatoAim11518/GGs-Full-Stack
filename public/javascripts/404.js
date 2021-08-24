window.addEventListener("load", (event) => {
  const back = document.getElementById("goBack");
  const home = document.getElementById("goHome");
  back.addEventListener("click", () => {
    history.back();
  });
  home.addEventListener("click", () => {
    window.location.href = "/";
  });
});
