let cart = [];

export const cartPage = () => {
  if (!localStorage.getItem("cart")) return;
  return JSON.parse(localStorage.getItem("cart") as string);
};
