
# API de Agendamento de Consultas Médicas

## Introdução

Este projeto implementa uma API de agendamento de consultas médicas usando Node.js, TypeScript, o Serverless Framework e AWS Lambda (emulado com serverless-offline). A API possui dois endpoints principais para buscar as agendas dos médicos e agendar consultas. Os dados são mockados para atender aos requisitos do teste.

## Requisitos

- Node.js v14 ou superior
- Serverless Framework
- Plugins: serverless-offline
- Ferramentas de lint e formatação: ESLint, Prettier
- Jest para testes unitários

## Configuração e Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Para iniciar o servidor offline, execute:
   ```bash
   npm run start:offline
   ```

## Endpoints

### GET /agendas

Retorna a lista de médicos e horários disponíveis.

**Exemplo de Resposta:**
```json
{
  "medicos": [
    {
      "id": 1,
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologista",
      "horarios_disponiveis": [
        "2024-10-05 09:00",
        "2024-10-05 10:00",
        "2024-10-05 11:00"
      ]
    }
  ]
}
```

### POST /agendamento

Permite o agendamento de consultas para pacientes.

**Exemplo de Payload:**
```json
{
  "medico_id": 1,
  "paciente_nome": "Carlos Almeida",
  "data_horario": "2024-10-05 09:00"
}
```

**Exemplo de Resposta:**
```json
{
  "mensagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
  }
}
```

## Testes

Este projeto utiliza Jest para testes unitários. Para rodar os testes, execute o comando:

```bash
npm run test
```

## Estrutura de Pastas

```
/src
├── /agenda
│   ├── controller
│   ├── service
│   ├── dto
│   └── mocks
├── /agendamento
│   ├── controller
│   ├── service
│   ├── dto
│   └── mocks
└── utils
```

## Deploy (Opcional)

Embora o foco deste projeto seja o desenvolvimento local usando serverless-offline, o deploy para AWS Lambda pode ser realizado com o comando:

```bash
npm run deploy
```

Consulte a documentação do Serverless Framework para detalhes adicionais de configuração.
