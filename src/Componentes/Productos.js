import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Producto from "./Producto";
//redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productosActions";

function Productos() {
  // mandar a llamar la accion principal para listar los productos
  const dispatch = useDispatch();

  useEffect(() => {
    //productos cuando el componente este listo
    const cargarProductos = productos => {
      dispatch(obtenerProductosAction());
    };
    cargarProductos();
  }, []);

  //acceder al state
  const loading = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);
  const productos = useSelector(state => state.productos.productos);

  return (
    <>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un Error
        </div>
      ) : (
        <>
          <Link
            to="/productos/nuevo"
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
            Agregar Producto &#43;
          </Link>

          <h2 className="text-center my-5">Listado de Productos</h2>

          <table className="table table-striped">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <Producto key={producto.id} producto={producto} />
              ))}
            </tbody>
          </table>
          {loading ? "Cargando ..." : null}
        </>
      )}
    </>
  );
}

export default Productos;
