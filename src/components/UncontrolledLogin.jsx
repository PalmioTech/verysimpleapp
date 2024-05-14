export function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      friend: formData.get("friend") === "on" ? true : false,
    };
    console.log(data);
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-2 items-center"
    >
      <h1>Uncontrolled Form</h1>
      <input
        name="username"
        className="p-1 border border-gray-300 rounded-md"
      />
      <input
        name="password"
        type="password"
        className="p-1 border border-gray-300 rounded-md"
      />
      <input name="friend" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
