const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const discountMessage = document.getElementById("discount-message");

form.addEventListener("submit", function (e) {
  
  e.preventDefault();

  const username = document.getElementById("devname").value;
  const email = document.getElementById("dev-email").value;

  if (username !== "" && email !== "") {
    formMessage.textContent =
      "Thank you for visiting, " + username + "! We will contact you at " + email + ".";
  } else {
    formMessage.textContent = "Please fill in both your name and email.";
  }

  const birthYearText = document.getElementById("birth-year").value;
  const birthYear = parseInt(birthYearText);

  if (isNaN(birthYear)) {
    discountMessage.textContent = "";
  } else {
    const age = 2026 - birthYear;

    if (age >= 60) {
      discountMessage.textContent = "You are " + age + " years old. Senior discount applied!";
    } else if (age >= 18 && age <= 25) {
      discountMessage.textContent = "You are " + age + " years old. Student discount applied!";
    } else {
      discountMessage.textContent = "You are " + age + " years old. No discount available for this age.";
    }
  }
});


const rows = document.querySelectorAll(".specs-table tbody tr");

for (let i = 0; i < rows.length; i++) {
  rows[i].addEventListener("mouseover", function () {
    rows[i].style.backgroundColor = "#B2EBF2";
  });

  rows[i].addEventListener("mouseout", function () {
    rows[i].style.backgroundColor = "";
  });
}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const checkboxes = document.querySelectorAll(".addon-check");
const totalText = document.getElementById("total");

function updateTotal() {
  let total = 0;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      // value is a string, so convert it to a number before adding
      total = total + parseInt(checkboxes[i].value);
    }
  }

  totalText.textContent = "Total: $" + total;
}

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", updateTotal);
}

const readMoreBtn = document.getElementById("read-more-btn");
const extraText = document.getElementById("extra-text");

readMoreBtn.addEventListener("click", function () {
  if (extraText.style.display === "none") {
    extraText.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    extraText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});


const filterButtons = document.querySelectorAll(".filters .filter-btn");
const addonItems = document.querySelectorAll(".addon-list li");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    const chosen = filterButtons[i].getAttribute("data-filter");

    for (let j = 0; j < addonItems.length; j++) {
      const category = addonItems[j].getAttribute("data-category");

      if (chosen === "all" || chosen === category) {
        addonItems[j].style.display = "";
      } else {
        addonItems[j].style.display = "none";
      }
    }
  });
}

const statusBanner = document.getElementById("status");
const hour = new Date().getHours();

if (hour >= 8 && hour < 22) {
  statusBanner.textContent = "We are Open!";
  statusBanner.style.color = "green";
} else {
  statusBanner.textContent = "Closed - Open at 8 AM";
  statusBanner.style.color = "red";
}

const notes = document.getElementById("special-notes");
const charCount = document.getElementById("char-count");

notes.addEventListener("input", function () {
  const remaining = 100 - notes.value.length;
  charCount.textContent = remaining + " characters remaining";
});