function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (typeof numero !== "number" || !Number.isInteger(numero)) {
    throw new Error("El parámetro debe ser un número entero");
  }
  if (numero % 2 == 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}
