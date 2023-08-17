export const loginApi = async (data) => {
  try {
    const response = await fetch("http://localhost:5032/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const userData = await response.json();
    if (response.status === 200) {
      console.log("Anmeldung erfolgreich!");
      //   window.location.href = "/";
      loginButton.classList.add("green");
      return userData;
    } else {
      throw new Error("Anmeldung fehlgeschlagen!");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Anmeldung fehlgeschlagen!");
  }
};
