# Navegação em Tabs com JS | Code/Drops #41

## Bind. (Homenagem ao JQuery).

  ```js
  // const $ = document.querySelector;
  /* Quando nos referenciamos o document em um varivale o this que está la dentro
    perde o contexto
  */
  
  const $ = document.querySelector.bind(document);
  // Com o bind eu estou ligando o document ao contexto dele.

  console.log($('p'))
  ```
    