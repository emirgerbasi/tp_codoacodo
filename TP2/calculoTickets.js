window.onload = function() {



    const cantidadInput = document.getElementById("cantidad");
    const categoriaSelect = document.getElementById("categoria");
    const resumenBtn = document.getElementById("resumen");
    const totalSpan = document.getElementById("total");

    resumenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const cantidad = cantidadInput.value;
    const categoria = categoriaSelect.value;
    let montoAPagar = cantidad * 200;

    switch (categoria) {
        case "estudiante":
        montoAPagar *= 0.2;
        break;
        case "trainee":
        montoAPagar *= 0.5;
        break;
        case "junior":
        montoAPagar *= 0.85;
        break;
    }

    totalSpan.textContent = montoAPagar;
});

// const btnBorrar = document.getElementById('btn-borrar');
// const resultado = document.getElementById('total');

// btnBorrar.addEventListener("click", () => {
//   totalSpan.textContent = '';
// });


  };



