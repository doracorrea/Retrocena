function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    if (usuario === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }
  
    // Simulação de login
    if (usuario === "admin" && senha === "1234") {
      alert("Login realizado com sucesso!");
      // Redireciona para outra página (exemplo)
      window.location.href = "home.html";
    } else {
      alert("Usuário ou senha incorretos.");
    }
  }