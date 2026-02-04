const tools = [
  {
    name: "ChatGPT",
    description: "AI chatbot for conversations and problem-solving",
    category: "writing",
    link: "https://chat.openai.com"
  },
  {
    name: "Midjourney",
    description: "AI image generation from text prompts",
    category: "design",
    link: "https://www.midjourney.com"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer for developers",
    category: "coding",
    link: "https://github.com/features/copilot"
  },
  {
    name: "Notion AI",
    description: "AI assistant for notes and productivity",
    category: "productivity",
    link: "https://www.notion.so"
  },
  {
    name: "Jasper",
    description: "AI content writing tool",
    category: "writing",
    link: "https://www.jasper.ai"
  }
];

const container = document.getElementById("toolsContainer");

function displayTools(list) {
  container.innerHTML = "";
  list.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <span>${tool.category}</span><br>
      <a href="${tool.link}" target="_blank">Visit Tool</a>
    `;
    container.appendChild(card);
  });
}

function searchTools() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query)
  );
  displayTools(filtered);
}

function filterCategory(cat) {
  if (cat === "all") {
    displayTools(tools);
  } else {
    const filtered = tools.filter(tool => tool.category === cat);
    displayTools(filtered);
  }
}

displayTools(tools);
