const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos JavaScript é usado para imprimir algo no console?",
      respostas: [
        "print()",
        "console.log()",
        "log()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      respostas: [
        "15",
        "105",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o tipo de dado de um array em JavaScript?",
      respostas: [
        "object",
        "array",
        "list",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "convertToInt()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorna esse elemento?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
      respostas: [
        "function",
        "def",
        "define",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar novos elementos ao final de um array e retorna o novo comprimento do array?",
      respostas: [
        "push()",
        "append()",
        "add()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length 
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
   const dt = quizItem.querySelector ('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
   dt.querySelector('input').onchange = (event) => {
   const estaCorreta = event.target.value == item.correta 
  
   corretas.delete(item) 
   if(estaCorreta) {
     corretas.add(item)
   }
   
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   }
  
  //append 
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
   //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }  