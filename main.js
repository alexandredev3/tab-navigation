const $ = document.querySelector.bind(document);

const html = {
  links: [...$('.tab-links').children],
  contents: [...$('.tab-content').children],
  openTab: $('[data-open]')
  // ele vai pegar o elemento que tem o atributo data-open.
};

function TabNavigation() {
  // Agora todas as funções abaixo tem nomes que faz sentido...

  function hideAllTabContent() {
    html.contents.forEach(section => {
      section.style.display = 'none';
    });

    /*
      O forEach so aceita arrays, então eu estou pegando os filhos do tab-links
      e colocando ele dentro de uma array.
    */
  };
  
  function removeAllActiveClass() {
    html.links.forEach(tab => {
      tab.className = tab.className.replace(' active', '');
      // ele vai substuir todos das classes active por nada 
    });
  };
  
  function showCurrentTab(id) {
    const tabcontent = $('#' + id);
    // ele vai pegar todos os ids(#) e juntar com id.
    
    tabcontent.style.display = 'block';
  };
  
  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClass();

    const target = event.currentTarget;
    // currentTarget: Ele e o evento de click.

    showCurrentTab(target.dataset.id);
    // dataset: e os data-... la das tags html.

    target.className += ' active';
    // ele vai no className e vai adicionar a class active.
  };

  function listenForChange() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab);
    })
  };
  
  function init() {
    hideAllTabContent();
    listenForChange();

    html.openTab.click();
    // pega o openTab dá um click nele.
  };
  
  // Se eu não retorna nada nessa função, ele vai retrna "undefined".
  return {
    init
  }

};

// Quando a pagina carregar ele vai executar a função abaixo.
window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
