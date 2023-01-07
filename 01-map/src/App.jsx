import "./App.css";

const users = [
  {
    id: 1,
    name: "Carlos",
    adress: "Rua X",
    age: 28,
    isAdmin: false,
  },
  {
    id: 2,
    name: "Maria",
    adress: "Rua XX",
    age: 31,
    isAdmin: true,
  },
  {
    id: 3,
    name: "Matheus",
    adress: "Rua XI",
    age: 22,
    isAdmin: false,
  },
];

function App() {
  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name}, {user.age}, {user.adress}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
