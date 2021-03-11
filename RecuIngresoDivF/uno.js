
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let contSexoF = 0;
	let contSexoM = 0;
	let contSexoNoB = 0;
	let acumSueldoF = 0;
	let acumSueldoM = 0;
	let acumSueldoNoB = 0;
	let puesto;
	let contProgramNoB = 0;
	let sueldo;
	let seguir;
	let flagSueldo = 0;
	let contSueldoProg = 0;
	let contSueldoAnalista = 0;
	let contSueldoQa = 0;
	let acumSueldoProg = 0;
	let acumSueldoAnalista = 0;
	let acumSueldoQa = 0;
	let promedioSueldoProg;
	let promedioSueldoAnalista;
	let promedioSueldoQa;

	do {
	nombre = prompt("Nombre del empledo/a.");
	while (nombre == 175 ){
		nombre = prompt("Error. Nombre del empledo/a.");
	}
	edad = prompt("Edad del empledo/a");
	while (edad < 18 && edad > 65 && isNaN(edad)){
		edad = prompt("La edad no es correcta. Edad del empleado/a.");

	}
	sexo = prompt('Sexo del empleado/a "M" "F" o "E".');
	while (sexo != "M" && sexo != "F" && sexo != "E") {
		sexo = prompt('Error. Sexo del empleado/a "M" "F" o "Otro".');
	}
	puesto = prompt('Puesto del empleado/a "Programador" "Analista" o "Qa".');
	while (nombre != "Programador" && nombre != "Analista" && nombre != "Qa"){
		puesto = prompt('Ese no es un puesto. Puesto del empleado/a "Programador" "Analista" o "Qa".');
	}
	sueldo = prompt("Ingresar sueldo");
	while (sueldo > 15000 && sueldo < 70000){
		sueldo = prompt("Incorrecto. Ingresar sueldo");
	}
	

	switch (puesto){
		case "Programador":
		flagSueldo = 1;
		acumSueldoProg = acumSueldoProg + sueldo;
		contSueldoProg ++;
			break;
		case "Analista":
		flagSueldo = 1;
		acumSueldoAnalsita = acumSueldoAnalista + sueldo;
		contSueldoAnalista ++;
			break;
		case "Qa":
		flagSueldo = 1;
		acumSueldoQa = acumSueldoQa + sueldo;
		contSueldoQa ++;
			break;
	}
	if(sexo = "F" && flagSueldo == 0){
		acumSueldoF = acumSueldoF + sueldo;
	}
	else if (sexo = "M" && flagSueldo == 0){
		acumSueldoM = acumSueldoM + sueldo;
	}
	else if (sexo = "Otro" && flagSueldo == 0){
		acumSueldoNoB = acumSueldoNoB + sueldo;
	}

	if (puesto == "Programador" && sexo == "Otro" && sueldo > 20000 && sueldo < 55000){
		contProgramNoB ++;
	}

	seguir = prompt('Quiere ingresar otro empleado/a? Ingrese el caracter "s" en caso de ser afirmativo.')
	}while(seguir == 's');

	

}
