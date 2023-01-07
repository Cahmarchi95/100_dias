// //outra maneira de fazer requisição para API
// const url = "https://reqres.in/api/users";
// const fetchUsers = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };
// fetchUsers(url);

//MÉTODO GET
// fetch("https://reqres.in/api/users").then((res) => res.json())
// .then((data)=> console.log(data.data));

//MÉTODO POST
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Caroline",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
