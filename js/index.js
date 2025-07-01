// Toggle "more info" visibility
function toggleMoreInfo(button) {
  const moreInfo = button.nextElementSibling;
  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
    button.textContent = "Hide info";
  } else {
    moreInfo.style.display = "none";
    button.textContent = "Click to know more";
  }
}

// Search nganyas by name
function searchNganya() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const sections = document.querySelectorAll(".A-Nganya");

  sections.forEach((section) => {
    const text = section.textContent.toLowerCase();
    if (text.includes(input)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}



