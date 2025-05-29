import tools from "./tools.json";

export const handleToggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

document.addEventListener("DOMContentLoaded", () => {
  const toolList = document.getElementById("tool-list");

  tools.forEach((tool) => {
    const listItem = document.createElement("li");
    const toolName = document.createElement("h3");
    toolName.textContent = tool.name;
    listItem.appendChild(toolName);
    const toolDescription = document.createElement("p");
    toolDescription.textContent = tool.description;
    listItem.appendChild(toolDescription);
    toolList?.appendChild(listItem);
  });

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      themeToggle.innerText = "Dark Mode";
    } else {
      themeToggle.innerText = "Light Mode";
    }
    handleToggleTheme();
  });

  // Display current year in the footer using moment
  const footer = document.querySelector("#footer-year");
  if (footer) {
    import("moment").then((moment) => {
      footer.textContent = `© ${moment.default().format("YYYY")}`;
    });
  }
});
