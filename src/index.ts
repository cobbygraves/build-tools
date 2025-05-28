import tools from './tools';

document.addEventListener('DOMContentLoaded', () => {
  const toolList = document.getElementById('tool-list');
  tools.forEach((tool) => {
    const listItem = document.createElement('li');
    const toolName = document.createElement('h3');
    toolName.textContent = tool.name;
    listItem.appendChild(toolName);
    const toolDescription = document.createElement('p');
    toolDescription.textContent = tool.description;
    listItem.appendChild(toolDescription);
    toolList?.appendChild(listItem);
  });

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});
