import { Link } from "react-router-dom";

export default function ComponenteListaAutores(){
    return(
        <div>
            <div className="table-responsive">
                <h1>Lista de Autores</h1>
                <table className="table table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><a href="#" className="btn btn-success">Actualizar</a></td>
                        <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><a href="#" className="btn btn-success">Actualizar</a></td>
                        <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Bird</td>
                        <td><a href="#" className="btn btn-success">Actualizar</a></td>
                        <td><a href="#" className="btn btn-danger">Eliminar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a href="autores/registrar" className="btn btn-primary">Registrar autor</a>
        </div>
    );
}