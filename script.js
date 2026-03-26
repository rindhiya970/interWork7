const container = document.getElementById("emoji-container");
const search = document.getElementById("search");

// 🔹 Display emojis
function displayEmojis(list) {
  container.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "emoji-card";

    card.innerHTML = `
      <div class="emoji">${item.emoji}</div>
      <div class="desc">${item.description}</div>
    `;

    // 🔥 Extra creativity: click to copy emoji
    card.addEventListener("click", () => {
      navigator.clipboard.writeText(item.emoji);
      alert("Copied: " + item.emoji);
    });

    container.appendChild(card);
  });
}

// 🔹 Initial load
displayEmojis(emojiList);

// 🔹 Search functionality
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = emojiList.filter((item) => {
    return (
      item.description.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value) ||
      item.aliases.join(" ").toLowerCase().includes(value) ||
      item.tags.join(" ").toLowerCase().includes(value)
    );
  });

  displayEmojis(filtered);
});