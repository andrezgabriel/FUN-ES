// Lista de tarefas
let tarefas = [];

// Função anônima para adicionar tarefas
const adicionarTarefa = function(tarefa) {
  tarefas.push({ descricao: tarefa, concluida: false });
  console.log(`Tarefa adicionada: "${tarefa}"`);
};

// Arrow function para listar tarefas
const listarTarefas = () => {
  console.log("\nLista de Tarefas:");
  tarefas.forEach((tarefa, index) => {
    const status = tarefa.concluida ? "✅ Concluída" : "❌ Pendente";
    console.log(`${index}: ${tarefa.descricao} - ${status}`);
  });
};

// Função que executa uma operação com callback
function gerenciarTarefa(callback) {
  callback();
}

// Callbacks possíveis

const removerTarefa = () => {
  const index = parseInt(prompt("Digite o índice da tarefa a ser removida:"));
  if (index >= 0 && index < tarefas.length) {
    console.log(`Tarefa removida: "${tarefas[index].descricao}"`);
    tarefas.splice(index, 1);
  } else {
    console.log("Índice inválido.");
  }
};

const atualizarTarefa = () => {
  const index = parseInt(prompt("Digite o índice da tarefa a ser atualizada:"));
  if (index >= 0 && index < tarefas.length) {
    const novaDescricao = prompt("Digite a nova descrição da tarefa:");
    tarefas[index].descricao = novaDescricao;
    console.log("Tarefa atualizada com sucesso.");
  } else {
    console.log("Índice inválido.");
  }
};

const concluirTarefa = () => {
  const index = parseInt(prompt("Digite o índice da tarefa a ser concluída:"));
  if (index >= 0 && index < tarefas.length) {
    tarefas[index].concluida = true;
    console.log("Tarefa marcada como concluída.");
  } else {
    console.log("Índice inválido.");
  }
};

// Menu interativo
function menu() {
  let opcao;
  do {
    opcao = prompt(
      "\nMenu de Tarefas:\n" +
      "1. Adicionar tarefa\n" +
      "2. Listar tarefas\n" +
      "3. Remover tarefa\n" +
      "4. Atualizar tarefa\n" +
      "5. Concluir tarefa\n" +
      "6. Sair\n" +
      "Escolha uma opção:"
    );

    switch (opcao) {
      case "1":
        const novaTarefa = prompt("Digite a descrição da nova tarefa:");
        adicionarTarefa(novaTarefa);
        break;
      case "2":
        listarTarefas();
        break;
      case "3":
        gerenciarTarefa(removerTarefa);
        break;
      case "4":
        gerenciarTarefa(atualizarTarefa);
        break;
      case "5":
        gerenciarTarefa(concluirTarefa);
        break;
      case "6":
        console.log("Encerrando o gerenciador de tarefas.");
        break;
      default:
        console.log("Opção inválida.");
    }

  } while (opcao !== "6");
}

// Iniciar o menu
menu();
