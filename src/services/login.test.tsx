import { loginService } from "./login";

describe("loginService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.alert = jest.fn();
  });

  it("deve retornar false quando campos estiverem vazios", () => {
    const result = loginService({
      username: "",
      email: "",
      password: "",
    });

    expect(result).toBe(false);
    expect(global.alert).toHaveBeenCalledWith("Preencha todos os campos!");
  });

  it("deve retornar true quando dados estiverem corretos", () => {
    const result = loginService({
      username: "Joao",
      email: "joao@email.com",
      password: "123",
    });

    expect(result).toBe(true);
    expect(global.alert).toHaveBeenCalledWith("seja bem vindo! Joao");
  });
});