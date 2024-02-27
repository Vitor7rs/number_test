document.getElementById("myForm").addEventListener("submit", function (event) {
	event.preventDefault();

	// Pegandos os valores de A e B
	let valorA = parseFloat(document.getElementById("campoA").value);
	let valorB = parseFloat(document.getElementById("campoB").value);

	// Validando se B maior que A
	if (valorB > valorA) {
		// Caso Positivo
		document.getElementById("mensagem").innerHTML =
			"<p>Formulário válido! B é maior que A.</p>";
		document.getElementById("mensagem").style.color = "green";
	} else {
		// Caso Negativo
		document.getElementById("mensagem").innerHTML =
			"<p>Formulário inválido! B deve ser maior que A.</p>";
		document.getElementById("mensagem").style.color = "red";
	}
});
