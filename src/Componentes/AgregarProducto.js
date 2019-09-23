import React, { useState } from "react";
//redux
import { crearNuevoProductoAction } from "../actions/productosActions";
import {
  validarFormularioAction,
  validacionError,
  validacionExito
} from "../actions/validacionActions";
import { useDispatch, useSelector } from "react-redux";

function AgregarProducto({ history }) {
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState("");

  //Crear nuevo producto

  const dispatch = useDispatch();
  const agregarProducto = producto =>
    dispatch(crearNuevoProductoAction(producto));
  const validarFormulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  //obtener datos del state

  const error = useSelector(state => state.error.error);

  //agregar nuevo producto
  const submitAgregarProducto = e => {
    e.preventDefault();

    validarFormulario();

    //validar el formulario
    if (nombre.trim() === "" || precio.trim() === "") {
      errorValidacion();
      return;
    }
    //si pasa la validacion
    exitoValidacion();

    //crear el nuevo producto
    agregarProducto({ nombre, precio });

    // redireccionar
    history.push("/productos");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitAgregarProducto}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio Producto"
                  value={precio}
                  onChange={e => guardarPrecio(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                Todos los campos son obligatorios
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarProducto;
