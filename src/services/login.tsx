export const loginService = (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const { username, email, password } = data;

  if (!username || !email || !password) {
    alert("Preencha todos os campos!");
    return false;
  }else {
    alert(`seja bem vindo! ${username}`);
    return true;
  }
};

