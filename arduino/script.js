document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalCompra");
    const btnComprar = document.getElementById("btnComprar");
    const btnCerrar = document.getElementById("cerrarModal");
    const btnWhatsApp = document.getElementById("btnWhatsApp");

    btnComprar.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    btnCerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    btnWhatsApp.addEventListener("click", function () {
        let nombre = document.getElementById("nombre").value.trim();
        let whatsapp = document.getElementById("whatsapp").value.trim();

        if (nombre === "" || whatsapp === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Validación básica del número de WhatsApp (solo dígitos)
        if (!/^\d+$/.test(whatsapp)) {
            alert("Por favor, ingrese un número de WhatsApp válido (solo dígitos).");
            return;
        }

        let mensaje = `Hola, soy ${nombre} y me interesa comprar el audiolibro. Mi número de WhatsApp es ${whatsapp}.`;
        // Modifica la URL de WhatsApp para incluir el número específico
        let url = `https://wa.me/931518503?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
});