async function fetchUserData(userId) {
  const apiDataDiv = document.getElementById("api-data");
 
    const apiUrl = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    document.getElementById("api-data").style.display = "block";
    const dataContainer = await apiUrl;
    try {
     
      await response.json().then((data) => {
        apiDataDiv.textContent = `Name: ${data.name}, Email: ${data.email}, Phone: ${data.phone}`;
      });
      const users = await response.json();
      apiDataDiv.textContent = `Name: ${users.name}, Email: ${users.email}, Phone: ${users.phone}`;
  } catch (error) {
    apiDataDiv.textContent = "Failed to load user data.";
    dataContainer.innerHTML = '';
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
      userList.appendChild(listItem);
    });
  };
};
