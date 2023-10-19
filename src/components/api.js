const BASE_URL = "https://fakestoreapi.com";
const COHORT_NAME = "2302-ACC-ET-WEB-PT-A";
const BASE_URL2 = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
export const fetchAllproducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    console.log(result, "data");
    return result;
  } catch (err) {
    console.error(`Oh no, trouble fecthing all products`);
  }
};
export const fetchAllMembers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const result = response.json();
    return result;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}; /*
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL2}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result.data.token;
  } catch (err) {
    console.error(err);
  }
};*/
/*export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL2}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result.data.token;
  } catch (err) {
    console.error(err);
  }
};*/
