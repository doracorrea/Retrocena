document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    // Validação básica
    if (!nome || !email || !usuario || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    
    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres!');
      return;
    }
    
    // Simulação de cadastro bem-sucedido
    alert('Cadastro realizado com sucesso!');
    
    // Redireciona para a página de login
    window.location.href = 'login.html';
  });