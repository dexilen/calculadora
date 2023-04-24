const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})

document.addEventListener("keydown", event => {
    const key = event.key;

    if (key >= "0" && key <= "9" || key === "+" || key === "-" || key === "*" || key === "/") {
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = key;
        } else {
            pantalla.textContent += key;
        }
    } else if (key === "Enter") {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Error!";
        }
    } else if (key === "Backspace") {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
    }
});