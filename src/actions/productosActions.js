import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITOSA,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITAR_EXITO,
  PRODUCTO_EDITAR_ERROR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR
} from "../types";
import clienteAxios from "../config/axios";
import Axios from "axios";

//crear nuevo producto - funcion principal

export function crearNuevoProductoAction(producto) {
  return dispatch => {
    dispatch(nuevoProducto());

    //insertar en la API
    clienteAxios
      .post("/productos", producto)
      .then(respuesta => {
        console.log(respuesta);

        // si se inserta correctamente
        dispatch(nuevoProductoExito(producto));
      })
      .catch(error => {
        console.log(error);
        dispatch(nuevoProductoError(error));
      });

    dispatch(nuevoProductoError());
  };
}

export const nuevoProducto = () => ({
  type: AGREGAR_PRODUCTO
});

export const nuevoProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});

export const nuevoProductoError = error => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: error
});

//mostrar listado de productos (consultar API)

export function obtenerProductosAction() {
  return dispatch => {
    dispatch(comenzarObtenerProductos());
    //consultar la API
    clienteAxios
      .get("/productos")
      .then(respuesta => {
        //console.log(respuesta);
        dispatch(obtenerProductosExito(respuesta.data));
      })
      .catch(respuesta => {
        dispatch(obtenerProductosError());
      });
  };
}

export const comenzarObtenerProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS
});

export const obtenerProductosExito = productos => ({
  type: DESCARGA_PRODUCTOS_EXITOSA,
  payload: productos
});

export const obtenerProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR
});

// funcion que elimina producto especifico

export function borrarProductoAction(id) {
  return dispatch => {
    dispatch(obtenerProductoEliminar());
    //eliminar de la API
    clienteAxios
      .delete(`/productos/${id}`)
      .then(respuesta => {
        dispatch(eliminarProductoExito(id));
      })
      .catch(error => {
        dispatch(eliminarProductoError());
      });
  };
}
export const obtenerProductoEliminar = () => ({
  type: OBTENER_PRODUCTO_ELIMINAR
});
export const eliminarProductoExito = id => ({
  type: PRODUCTO_ELIMINADO_EXITO,
  payload: id
});
export const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR
});

//FUNCION PARA EDITAR EL PRODUCTO

export function obtenerProductoEditarAction(id) {
  return dispatch => {
    dispatch(obtenerProductoAction());
    //Consultar la API
    clienteAxios
      .get(`/productos/${id}`)
      .then(respuesta => {
        //console.log(respuesta.data);
        dispatch(productoEditarExito(respuesta.data));
      })
      .catch(error => {
        dispatch(productoEditarError());
      });
  };
}

export const obtenerProductoAction = () => ({
  type: OBTENER_PRODUCTO_EDITAR
});
export const productoEditarExito = producto => ({
  type: PRODUCTO_EDITAR_EXITO,
  payload: producto
});
export const productoEditarError = () => ({
  type: PRODUCTO_EDITAR_ERROR
});

// Modificar un producto en la API y State

export function editarProcuctoAction(producto) {
  return dispatch => {
    dispatch(comenzarEdicionProducto());

    //consultar la api
    clienteAxios
      .put(`/productos/${producto.id}`, producto)
      .then(respuesta => {
        //console.log(respuesta);
        dispatch(productoEditadoExito(respuesta.data));
      })
      .catch(error => {
        dispatch(productoEditadoError());
      });
  };
}

export const comenzarEdicionProducto = () => ({
  type: COMENZAR_EDICION_PRODUCTO
});
export const productoEditadoExito = producto => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto
});
export const productoEditadoError = () => ({
  type: PRODUCTO_EDITADO_ERROR
});
