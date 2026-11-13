const url = "https://jsonplaceholder.typicode.com/posts/1";

console.log("Requisição com XMLHttpRequest");

const xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      try {
        const dados = JSON.parse(xhr.responseText);
        console.log("XHR - dados recebidos:", dados);
      } catch (erro) {
        console.error("XHR - não foi possível interpretar o JSON:", erro);
      }
    } else {
      console.error("XHR - erro na requisição. Status:", xhr.status);
    }
  }
};

xhr.onerror = function () {
  console.error("XHR - falha de rede ao realizar a requisição.");
};

xhr.send();

console.log("Requisição com Fetch e funções tradicionais");

fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Erro HTTP: " + response.status);
    }
    return response.json();
  })
  .then(function (dados) {
    console.log("Fetch - dados recebidos:", dados);
  })
  .catch(function (erro) {
    console.error("Fetch - falha na requisição:", erro);
  });

console.log("Requisição com Fetch e arrow functions");

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro HTTP: " + response.status);
    }
    return response.json();
  })
  .then((dados) => console.log("Fetch com arrow functions - dados recebidos:", dados))
  .catch((erro) => console.error("Fetch com arrow functions - falha na requisição:", erro));
