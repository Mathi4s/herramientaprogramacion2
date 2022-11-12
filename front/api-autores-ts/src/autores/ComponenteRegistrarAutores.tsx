export default function ComponenteRegistrarAutor(){
    return(
        <div>
            <form>
                <h1>Registro de Autores</h1>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="txtNom" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="chkEst"/>
                    <label className="form-check-label">Habilitado</label>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    )
}