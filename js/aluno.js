async function handleEditAluno(a) {
    a.preventDefault();
  
    const name = document.getElementById("inputNome").value;
    const employer_id = document.getElementById("aluno_id").value;
  
    try {
      fetch("http://localhost:3000/aluno/create", {
        method: "POST",
        body: JSON.stringify({ name, aluno}),
      });
    } catch (a) {
      console.error(a);
    }
  }
  
  const buttonSend = document.getElementById("send");
  buttonSend.onclick = (á) => handleEditAluno(a);