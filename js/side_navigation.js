let metas = document.getElementsByTagName("meta");

// Find the tag and get its content
let pageTitle;

for (let i = 0; i < metas.length; i++) {
  if (metas[i].getAttribute("name") === "application-name") {
    pageTitle = metas[i].getAttribute("content");
  }
}

// Find the nav a and give it the link
let container = document.getElementById("sidebarNavigation");
let links = container.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
  if (
    links[i].getAttribute("data-page").toLowerCase() === pageTitle.toLowerCase()
  ) {
    links[i].className += " bg-black text-white";
    // links[i].href = "#";
  }
}

//dark mode
// Function to toggle dark mode and update icons
function toggleDarkMode(isDark) {
  // Add or remove the 'dark' class
  document.documentElement.classList.toggle("dark", isDark);

  // Update icon visibility
  document.getElementById("dark_icon").style.display = isDark
    ? "none"
    : "block";
  document.getElementById("light_icon").style.display = isDark
    ? "block"
    : "none";

  // Store the dark mode preference in localStorage
  localStorage.setItem("dark-mode", isDark);
}

// Check the initial dark mode preference from localStorage
const darkModeFromStorage = localStorage.getItem("dark-mode") === "true";

// Apply the initial dark mode state
toggleDarkMode(darkModeFromStorage);

// Add event listener to toggle dark mode on button click
document.getElementById("darkModeToggle").addEventListener("click", () => {
  const isDarkMode = !document.documentElement.classList.contains("dark");
  toggleDarkMode(isDarkMode);
});
