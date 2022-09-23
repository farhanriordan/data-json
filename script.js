const table = document.getElementById("data");
table.innerHTML = load();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    table.innerHTML = render(res);
  });

function render(result) {
  let table = "";
  result.forEach((data) => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.company.name}</td>
              </tr>`;
  });
  return table;
}

function load() {
  return `<h1 class="text-center">
    LOADING!!!
  </h1>`;
}
