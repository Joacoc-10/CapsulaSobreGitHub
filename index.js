function laCajaDePandora(numero) {
  if (!Number.isInteger(numero)) return 'Debe ingresar un numero entero';
  if (numero % 2 == 0) return numero.toString(2);
  if (numero % 2 == 1) return numero.toString(16);
}

function Joaco() {
  return {
    nombre: 'Joaquin Curbelo',
    edad: 27,
    nacionalidad: 'Uruguayo',
  };
}

function Franco() {
  return {
    nombre: 'Franco Gauna',
    edad: 23,
    nacionalidad: 'Argentina',
  };
}

function Tobias() {
  return {
    nombre: 'Tobias Gonzalez',
    edad: 26,
    nacionalidad: 'Argentina',
  };
}
