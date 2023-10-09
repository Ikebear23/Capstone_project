export const fetchAllproducts = async () => {
  try {
    console.log("get products test");
    const response = await fetch(`${BASE_URL}/products`);
    const allproducts = await response.json();
    console.log(allproducts, "data");
    return allproducts;
  } catch (err) {
    console.error(`Oh no, trouble fecthing all products`);
  }
};
