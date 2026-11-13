# Aula 15 — Fetch e XMLHttpRequest

Atividade prática com exemplos de requisições assíncronas usando
`XMLHttpRequest` (XHR) e a Fetch API.

## Arquivos

- `index.html`: página para carregar os exemplos.
- `script.js`: requisições XHR e Fetch, com tratamento de erros.
- `respostas_parte2.txt`: respostas dos itens A a F.
- `respostas_parte3.txt`: análise e correção dos dois cenários.

## Tecnologias

- HTML5
- JavaScript (XMLHttpRequest, Fetch API, Promises e arrow functions)
- API pública JSONPlaceholder (`/posts/1`)

## Como executar

1. Abra esta pasta no VS Code.
2. Inicie um servidor HTTP local para servir o `index.html` (por exemplo,
   usando a extensão Live Server do VS Code).
3. Abra a página servida no navegador.
4. Abra o DevTools com F12 e selecione a aba Console.
5. Confira as mensagens dos exemplos XHR, Fetch e Fetch com arrow functions.

Executar por um servidor local evita restrições de origem que podem ocorrer ao
abrir o arquivo diretamente com o protocolo `file://`.

## Testes realizados

- `node --check script.js`: sintaxe JavaScript válida.
- Endpoint `https://jsonplaceholder.typicode.com/posts/1`: resposta HTTP 200
  com JSON.
- Servidor HTTP local: `index.html` e `script.js` servidos com HTTP 200.
- Navegador: os exemplos XHR, Fetch e Fetch com arrow functions foram
  executados; os três registraram os dados no Console sem erros.
- Os exemplos incluem verificações de `readyState`, `status` e `response.ok`,
  além de tratamento de erros. Uma resposta HTTP 404 foi simulada no navegador:
  o XHR registrou o status e os dois exemplos Fetch trataram o erro com
  `.catch()`. Falhas de rede e JSON malformado não foram simulados.
