class Producto {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}

class Almacen {
  constructor(nombre) {
    this.nombre = nombre;
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }
}

const almacen1 = new Almacen("Alimentos");

const fideos = new Producto("fideos", 10, 50);
almacen1.agregarProducto(fideos);
const arroz = new Producto("arroz", 25, 40);
almacen1.agregarProducto(arroz);
const huevos = new Producto("huevos", 500, 5);
almacen1.agregarProducto(huevos);
const panRallado = new Producto("pan rallado", 22, 70);
almacen1.agregarProducto(panRallado);

criterio = prompt("Ingrese criterio de ordenamiento: ");
criterio.toLowerCase();

if (criterio === "nombre") {
  almacen1.productos.sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });
}

if (criterio === "precio") {
  almacen1.productos.sort((a, b) => {
    return a.precio - b.precio;
  });
}

console.log(almacen1.productos);
