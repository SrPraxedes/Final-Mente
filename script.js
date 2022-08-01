const elemetoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar =document.querySelector('#buttonPerguntar')
const respostas = [
  "Concerteza!!",
  "ELE NUNCA FARIA ISSO CARAI!!!!!!!!!!!!!",
  "Talvez",
  "Nao tenho tanta certeza.",
  "Eu acho que não.",
  "Nao conte com isso.",
  "Sem duvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é nao.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim",
  "Minhas fontes dizem que nao.",
  "Provavelmente.",
  "Não é possivel prever agora",
  "Perspectiva boa.",
  "As perpectiva nao sao tão boas.",
  "Concentre-se e pergunte novamente",
  "Sinais apontam que sim.",
  "ta meio dificil responder agora"
]
//mano para de me boicotar carai pelo amor de Deus 
  // clicar em fazer pergunta
  function fazerPergunta() {
    
    if(inputPergunta.value == ""){1
      alert("Digite sua pergunta")
      return
    }

    buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

    //gerar numero aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random () * totalRespostas)

    elemetoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    
    elemetoResposta.style.opacity = 1;
    // sumir a respostas depois de 3 segundos
    setTimeout(function() {
      elemetoResposta.style.opacity = 0;
    }, 3000) 
 }