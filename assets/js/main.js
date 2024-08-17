console.log(superHeroes);
function listarSuperHeroes(listado) {
    $("#listado-super-heroes tbody").html("");
    for (const item of listado) {
        $("#listado-super-heroes tbody").append(`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.work.occupation}</td>
                    <td>${item.biography.aliases}</td>
                    <td>
                        <img class="img-avatar" src="${item.image.url}">
                    </td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Acción
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item link-eliminar" data-id="${item.id}" href="#">Eliminar</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            `)
    }
};

listarSuperHeroes(superHeroes);

$(function () {
   $(document).on("click", ".link-eliminar", function (evento) {
        evento.preventDefault();
        var idEliminar = $(this).data("id");

        if (confirm("¿Estás seguro que quieres eliminar este registro?")) {
            //Ejemplo 1
            var indice = superHeroes.findIndex(item => item.id == idEliminar);
            superHeroes.splice(indice, 1);

            //Ejemplo 2
            //superHeroes = superHeroes.filter(item => item.id != idEliminar);
            
            listarSuperHeroes(superHeroes);
        }
   })

   $("#mostrar-ocultar").click(function () {
        if ($("#filtros").hasClass("d-none")) {
            // mostrar filtro
            $("#filtros").removeClass("d-none")
            $("#mostrar-ocultar").removeClass("btn-success").addClass("btn-danger").html("Ocultar")
        } else {
            // ocultar filtro
            $("#filtros").addClass("d-none")
            $("#mostrar-ocultar").removeClass("btn-danger").addClass("btn-success").html("Mostrar")
        }
   })
});