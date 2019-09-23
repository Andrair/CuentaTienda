import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerProductoEditarAction,
  editarProcuctoAction
} from "../actions/productosActions";
import {
  validarFormularioAction,
  validacionError,
  validacionExito
} from "../actions/validacionActions";

function EditarProducto({ history, match }) {
  //crear los refs
  const nombreRef = useRef("");
  const precioRef = useRef("");

  const dispatch = useDispatch();

  const editarProducto = producto => {
    dispatch(editarProcuctoAction(producto));
  };

  const validarFormulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  //obtener el id del producto
  const { id } = match.params;

  useEffect(() => {
    dispatch(obtenerProductoEditarAction(id));
  }, [dispatch, id]);

  //acceder al state
  const producto = useSelector(state => state.productos.producto);
  const error = useSelector(state => state.productos.error);

  //cuando carga la api
  if (!producto) return "Cargando....";

  const submitEditarProducto = e => {
    e.preventDefault();

    //validar el formulario
    validarFormulario();
    if (
      nombreRef.current.value.trim() === "" ||
      precioRef.current.value.trim() === ""
    ) {
      errorValidacion();
      return;
    }

    //no hay error
    exitoValidacion();
    //guardar los cambios

    editarProducto({
      id: id,
      nombre: nombreRef.current.value,
      precio: precioRef.current.value
    });
    Swal.fire(
      "Almacenado",
      "El producto se actualizo correctamente",
      "success"
    );

    //redireccionar
    history.push("/productos");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Editar Producto</h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo"
                  defaultValue={producto.nombre}
                  ref={nombreRef}
                />
              </div>
              <div className="form-group">
                <label>Precio del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio"
                  defaultValue={producto.precio}
                  ref={precioRef}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                Hubo algun error
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarProducto;
