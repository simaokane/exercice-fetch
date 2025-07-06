let users = [];
handleResponse = (response) => {
  return response.json();
};

const handleData = (data) => {
  users = data;
  displayTable(data);
};

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

function init() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data));
}
