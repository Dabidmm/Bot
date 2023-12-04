// fiel.js
const botFunctions = {
    calcularFidelidad: function (usuario) {
        const per = Math.floor(Math.random() * 100);

        return usuario.toLowerCase() === "dabid_mm"
            ? "@Dabid_MM, eres 0% fiel"
            : `@${usuario}, eres ${per}% fiel`;
    },
};

botFunctions.calcularFidelidad("$(touser)");