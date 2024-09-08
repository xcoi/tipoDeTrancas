function pesquisar() {
  // Seleciona o elemento HTML com o ID "resultados-pesquisa" e o armazena na variável 'section'
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  // Itera sobre cada objeto no array 'penteado' e constrói o HTML para cada resultado
  for (let dado of penteado) {
    titulo = dado.titulo.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    if (!campoPesquisa) {
      section.innerHTML = "Nada encontrado";

      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Constrói o HTML para um item de resultado, incluindo título, descrição e link
      resultados += `
 <div class="item-resultado">
   <h2>
     <a href="#" target="_blank">${dado.titulo}</a>
   </h2>
   <p class="descricao-meta">${dado.descricao}</p>
   <a href=${dado.link} target="_blank">Saiba mais</a>
 </div>
`;
    }
  }
  if (!resultados) {
    resultados =
      "Não encontrei esta busca. Por favor verifique o texto digitado e tente novamente";
  }
  // Atribui o HTML gerado à propriedade 'innerHTML' do elemento 'section',
  // atualizando a página com os resultados
  section.innerHTML = resultados;
}
