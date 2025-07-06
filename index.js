// 3ième étape
let users = [];
handleResponse = (response) => {
  return response.json();
};

//4ième étape
const handleData = (data) => {
  users = data;
  displayTable(data);
};

//5ième étape
const displayTable = () => {
  const idTable = users.map(
    (user) =>
      `<tr>
      <td>${user.id}</td>
      <td>${user.title}</td>
      <td>${user.body}</td>
    </tr>`
  );

  document.getElementById("users-body").innerHTML = idTable.join("");
};

// 2ième etape: Initialisation
function init() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data));
}
