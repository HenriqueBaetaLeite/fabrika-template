import api from "../api";

const verifyEmail = (email) => {
  const emailExists = api
    .get(`/api/users/${email}`)
    .then((resp) => console.log(resp))
    .catch((err) => console.log("Erro:", err));

  return api.post("/oauth/token", { email });
};

module.exports = {
  verifyEmail,
};
