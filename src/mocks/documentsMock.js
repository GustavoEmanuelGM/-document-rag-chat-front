export const documentsMock = [
  // PASTAS (type: folder) 
  {
    id: 1,
    type: "folder",
    name: "Contratos 2024",
    tag: "contrato",
    parentId: null, // Está na raiz
    date: "11 Fev, 2024"
  },
  {
    id: 2,
    type: "folder",
    name: "Contratos 2023",
    tag: "contrato",
    parentId: null, // Está na raiz
    date: "10 Jan, 2024"
  },
  {
    id: 3,
    type: "folder",
    name: "Documentos Pessoais",
    tag: "pessoal",
    parentId: null, // Está na raiz
    date: "05 Mar, 2024"
  },

  // ARQUIVOS NA RAIZ (parentId: null)
  {
    id: 10,
    type: "file",
    name: "D&D - Manual do jogador.pdf",
    tag: "RPG",
    size: "2.4 MB",
    parentId: null, // Está solto na raiz
    date: "11 Fev, 2024"
  },
  {
    id: 11,
    type: "file",
    name: "Como fazer dinheiro dormindo.pdf",
    tag: "Livro",
    size: "2.4 MB",
    parentId: null, // Está solto na raiz
    date: "11 Fev, 2024"
  },

  // ARQUIVOS DENTRO DA PASTA "Contratos 2024" (parentId: 1)
  {
    id: 100,
    type: "file",
    name: "Contrato de aluguel.pdf",
    tag: "Contrato",
    size: "2.4 MB",
    parentId: 1, // Está DENTRO da pasta de ID 1 (Contratos 2024)
    date: "11 Fev, 2024"
  },
  {
    id: 101,
    type: "file",
    name: "Contrato prestacao servicos.pdf",
    tag: "Contrato",
    size: "1.8 MB",
    parentId: 1, // Está DENTRO da pasta de ID 1
    date: "10 Fev, 2024"
  },
  {
    id: 102,
    type: "file",
    name: "Contrato confidencialidade.pdf",
    tag: "Contrato",
    size: "950 KB",
    parentId: 1, // Está DENTRO da pasta de ID 1
    date: "09 Fev, 2024"
  },

  // ARQUIVOS DENTRO DA PASTA "Contratos 2023" (parentId: 2)
  {
    id: 200,
    type: "file",
    name: "Contrato antigo 2023.pdf",
    tag: "Contrato",
    size: "2.1 MB",
    parentId: 2, //Está DENTRO da pasta de ID 2
    date: "15 Dez, 2023"
  },

  // ARQUIVOS DENTRO DA PASTA "Documentos Pessoais" (parentId: 3)
  {
    id: 300,
    type: "file",
    name: "testamento.pdf",
    tag: "Pessoal",
    size: "1500 MB",
    parentId: 3, // Está DENTRO da pasta de ID 3
    date: "20 Jan, 2024"
  },
];