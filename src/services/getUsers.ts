export const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users?_start=0&_limit=6";
  try {
    const res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
