async function handleEditProfessor(p) {
    a.preventDefault();
  
    const name = document.getElementById("inputNome").value;
    const professor_id = document.getElementById("professor_id").value;
  
    try {
      fetch("http://localhost:3000/aluno/create", {
        method: "POST",
        body: JSON.stringify({ name, professor}),
      });
    } catch (p) {
      console.error(p);
    }
  }
  
  const buttonSend = document.getElementById("send");
  buttonSend.onclick = (p) => handleEditAluno(p);