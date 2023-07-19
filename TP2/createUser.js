function saveUser(){
    const user={
        nombre: document.getElementById("orador_nombre").value,
        apellido: document.getElementById("orador_apellido").value,
        mail: document.getElementById("orador_mail").value
    }
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      };
      
      fetch('http://localhost:8080/api/v1/users/create', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
