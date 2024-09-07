function pesquisar(){
    let pesquisa = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

let resultado = "";
let titulo = "";
let descricao = "";
campoPesquisa = campoPesquisa.toLowerCase();
for(let dado of lista){
titulo = dado.titulo.toLocaleLowerCase();
descricao = dado.descricao.toLocaleLowerCase();


    if(!campoPesquisa){
        pesquisa.innerHTML = "<small>Nada foi encontrado</small>";

        return
    }
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
    resultado += `<div class="item-resultado">
    <img src="${dado.img}"></img>
    <div id="textos">
    <h2><a href="${dado.link1}" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link1}" target="_blank">Mais informações</a>
    </div>
</div>`;

};

};
if(!resultado){
    resultado = "<small>Nada foi encontrado</small>";

}
pesquisa.innerHTML = resultado;

}
