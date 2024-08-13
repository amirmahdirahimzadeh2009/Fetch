async function getUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    const users = data.slice(0, 3);
    const container = document.getElementById("container");
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                        <h3>${user.name}</h3>
                        <p>Username : ${user.username}</p>
                        <p>Email : ${user.email}</p>
                        <p>Phone : ${user.phone}</p>
                    `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("error", error);
  }
}
getUsers();
