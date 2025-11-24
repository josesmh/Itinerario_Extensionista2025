document.addEventListener('DOMContentLoaded', () => {
  const topicLinks = document.querySelectorAll('.topics-menu__link');
  const contentTopics = document.querySelectorAll('.content-topic');
  const iconSets = document.querySelectorAll('.icon-set');
  const carouselsWrapper = document.querySelector('.carousels-wrapper');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNavContainer = document.querySelector('.mobile-nav-container');
  const mainPanel = document.querySelector('.panel--main');

  if (hamburgerMenu && mobileNavContainer) {
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('is-open');
      mobileNavContainer.classList.toggle('is-open');
    });
  }

  const articlesData = {
    'data-centers': [
      { title: 'Gigantes da vida online', description: 'A base da vida online e seu alto consumo de energia.', link: 'https://www.bbc.com/portuguese/articles/cx2k1rvgz34o', image: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/923d/live/a7f63eb0-5d82-11f0-b5c5-012c5796682d.jpg.webp' },
      { title: 'IA e o consumo de energia', description: 'Analisando os impactos da IA no consumo dos data centers.', link: 'https://www.osetoreletrico.com.br/impactos-da-ia-no-consumo-de-energia-em-data-centers/', image: 'https://climainfo.org.br/wp-content/uploads/2024/02/data-centers-consumo-agua-energia.webp' },
    ],
    'e-waste': [
      { title: 'Brasil: 5º maior produtor', description: 'O Brasil figura entre os maiores geradores de lixo eletrônico no mundo.', link: 'https://agenciabrasil.ebc.com.br/geral/noticia/2021-10/brasil-e-o-quinto-maior-produtor-de-lixo-eletronico', image: 'https://images.unsplash.com/photo-1567095751004-aa51a2690368?w=800'},
      { title: 'Descarte e consumo', description: 'Um estudo sobre o descarte responsável e o comportamento do consumidor.', link: 'https://www.scielo.br/j/read/a/VgwnQhwfKcsg3vFQjZGC48C/', image: 'https://credcarbo.com/wp-content/uploads/Consumismo-e-Impacto-Ambiental-saiba-qual-a-relacao.webp'},
    ],
    'agriculture': [
      { title: 'Impacto dos drones na agricultura', description: 'Análise sobre a utilização de drones e seus efeitos na agricultura.', link: 'https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/2306', image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800' },
      { title: 'Drones nas lavouras brasileiras', description: 'Como os drones estão ganhando espaço e se tornando uma ferramenta para o agricultor.', link: 'https://www.embrapa.br/busca-de-noticias/-/noticia/101800672/drones-ganham-espaco-nas-lavouras-brasileiras-e-viram-opcao-para-agricultores-e-prestadores-de-servico', image: 'https://www.embrapa.br/image/journal/article?img_id=102601993&t=1755863187599' },
    ],
    'smart-grids': [
      { title: 'O papel das Smart Grids', description: 'Como as redes inteligentes transformam a distribuição de eletricidade.', link: 'https://at3w.com/pt-pt/blog/smart-grids-o-que-sao-e-como-estao-a-transformar-a-rede-de-distribuicao-de-eletricade/', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800' },
      { title: 'O Futuro da Distribuição', description: 'Uma visão sobre o futuro da distribuição de energia com as redes inteligentes.', link: 'https://www.unicep.edu.br/post/smart-grids-o-futuro-da-distribui%C3%A7%C3%A3o-de-energia', image: 'https://static.wixstatic.com/media/11062b_b5eac3a0f47d438fa9abcbd70bf8810e~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b5eac3a0f47d438fa9abcbd70bf8810e~mv2.jpg' },
    ],
    'ai-paradox': [
      { title: 'Risco ambiental da IA', description: 'O alto consumo de eletricidade pela IA e seus riscos para o meio ambiente.', link: 'https://news.un.org/pt/story/2025/06/1849246', image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/05-06-2025-Unsplash-data-centre-04.jpg/image1170x530cropped.jpg' },
      { title: 'IA e a agenda climática', description: 'Os desafios da IA para a agenda climática em relação ao consumo de água e energia.', link: 'https://www.ey.com/pt_br/newsroom/2025/11/ia-desafia-agenda-climatica-consumo-energia-agua', image: 'https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--27cf79a2-f6d1-4bea-bb1c-75aae83420b6/agencia-ey-ia-david.jpg?preferwebp=true&quality=85&width=2000' },
    ],
    'blockchain': [
      { title: 'Gasto energético das criptos', description: 'Pesquisa sobre o elevado gasto de energia no mercado de criptomoedas.', link: 'https://revistapesquisa.fapesp.br/mercado-de-criptomoedas-tem-elevado-gasto-energetico/', image: 'https://revistapesquisa.fapesp.br/wp-content/uploads/2023/05/RPF-computador-criptomoeda-2025-03-nova.jpg' },
      { title: 'Blockchain Verde', description: 'A opção que busca reduzir o uso de energia e as emissões da rede.', link: 'https://www.cnnbrasil.com.br/economia/financas/conheca-o-blockchain-verde-opcao-que-reduz-uso-de-energia-e-de-emissoes-da-rede/', image: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/02/shubham-dhage-T9rKvI3N0NM-unsplash.jpg?w=1200&h=900&crop=0'},
    ],
  };

  const createCarousel = (topic, articles) => {
    const carouselDiv = document.createElement('div');
    carouselDiv.className = 'carousel';
    const topicLink = document.querySelector(`.topics-menu__link[href="#${topic}"]`);
    const title = topicLink ? topicLink.innerText : topic.replace(/-/g, ' ');
    carouselDiv.innerHTML = `<h3 class="article-category__title">${title}</h3>`;

    const slidesDiv = document.createElement('div');
    slidesDiv.className = 'carousel-slides';

    articles.forEach(article => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'carousel-item';
      itemDiv.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="carousel-item__image">
        <div class="carousel-item__description">
          <h4>${article.title}</h4>
          <p>${article.description}</p>
          <a href="${article.link}" target="_blank" class="carousel-item__link">Leia mais</a>
        </div>
      `;
      slidesDiv.appendChild(itemDiv);
    });

    carouselDiv.appendChild(slidesDiv);

    if (articles.length > 1) {
      const prevButton = document.createElement('button');
      prevButton.className = 'carousel-button carousel-button--prev';
      prevButton.innerHTML = '&#10094;';
      carouselDiv.appendChild(prevButton);

      const nextButton = document.createElement('button');
      nextButton.className = 'carousel-button carousel-button--next';
      nextButton.innerHTML = '&#10095;';
      carouselDiv.appendChild(nextButton);

      let currentIndex = 0;
      const items = slidesDiv.querySelectorAll('.carousel-item');

      const updateCarousel = () => {
        slidesDiv.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
      });
    }

    return carouselDiv;
  };

  const buildAllCarousels = () => {
    carouselsWrapper.innerHTML = '';
    for (const topic in articlesData) {
      if (articlesData[topic].length > 0) {
        const carousel = createCarousel(topic, articlesData[topic]);
        carouselsWrapper.appendChild(carousel);
      }
    }
  };

  const showContent = (targetId) => {
    contentTopics.forEach(topic => {
      topic.classList.toggle('is-active', `#${topic.id}` === targetId);
    });

    const shapeTargetId = `#shapes-${targetId.substring(1)}`;
    iconSets.forEach(container => {
      container.classList.toggle('is-active', `#${container.id}` === shapeTargetId);
    });

    topicLinks.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === targetId);
    });
  };

  buildAllCarousels();

  topicLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const isMobile = window.innerWidth <= 768;

      if (document.querySelector(targetId)?.classList.contains('is-active')) return;
      showContent(targetId);
      window.history.pushState(null, '', targetId);

      if (isMobile) {
        if (mobileNavContainer.classList.contains('is-open')) {
          hamburgerMenu.classList.remove('is-open');
          mobileNavContainer.classList.remove('is-open');
        }
        mainPanel.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('popstate', () => {
    const hash = window.location.hash || '#data-centers';
    showContent(hash);
  });

  const initialTarget = window.location.hash || '#data-centers';
  showContent(initialTarget);
});
