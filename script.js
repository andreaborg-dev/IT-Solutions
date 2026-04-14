const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  const subject = encodeURIComponent("PC Repair Request from " + name);

  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Issue:\n" + message
  );

  window.location.href = `mailto:work.andreaborg@gmail.com?subject=${subject}&body=${body}`;
});