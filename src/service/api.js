import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/planets/",
});

const apiEx = async () => api.get();

const loginApi = async (email, password) => {
  const result = await api.post("/login", { email, password });

  return result;
};

// const getUserByEmail = async (email) => axios.get(`/${email}`);

const registerApi = async (name, email, password, role) => {
  const result = await api.post("/register", {
    name,
    email,
    password,
    role,
  });
  return result;
};

const getProducts = (token) =>
  api.get("/products", { headers: { authorization: token } });

export default {
  api,
  apiEx,
};
