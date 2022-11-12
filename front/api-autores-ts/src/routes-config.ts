import ComponenteActualizarAutor from "./autores/ComponenteActualizarAutor";
import ComponenteListaAutores from "./autores/ComponenteListaAutores";
import ComponenteRegistrarAutor from "./autores/ComponenteRegistrarAutores";
import ComponenteActualizarLibro from "./libros/ComponenteActualizarLibro";
import ComponenteListaLibro from "./libros/ComponenteListaLibros";
import ComponenteRegistrarLibro from "./libros/ComponenteRegistrarLibro";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteRedireccionar from "./principal/ComponenteRedireccionar";

const rutas = [
{path:'/', componente: ComponentePrincipal},
{path:'/autores/registrar',componente:ComponenteRegistrarAutor},
{path:'/autores/actualizar/:id',componente:ComponenteActualizarAutor},
{path:'/autores',componente:ComponenteListaAutores},
{path:'/libros/registrar',componente:ComponenteRegistrarLibro},
{path:'/libros/actualizar/:id',componente:ComponenteActualizarLibro},
{path:'/libros',componente:ComponenteListaLibro},

{path:'*',componente:ComponenteRedireccionar}
];

export default rutas;