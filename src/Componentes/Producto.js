import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
//redux
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/productosActions";

function Producto({ producto }) {
  const dispatch = useDispatch();
  const confirmarEliminarProducto = id => {
    //preguntar al usuario
    Swal.fire({
      title: "Estas Seguro?",
      text: "Tu no podras revertir esto luego!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        Swal.fire("Eliminado!", "Tu producto ha sido eliminado", "success");
        dispatch(borrarProductoAction(id));
      }
    });

    //Confirmacion de sweet alert

    console.log(id);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td className="font-weight-bold">$ {producto.precio}</td>
      <td className="acciones">
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-primary mr-2"
        >
          Editar{" "}
        </Link>
        <button
          onClick={() => confirmarEliminarProducto(producto.id)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Producto;
