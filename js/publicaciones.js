document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const description = document.getElementById('description');
  const contentContainer = document.getElementById('content-container');

  const content = {
    descargas: {
      title: 'ARTÍCULOS GMYC',
      text: 'Aquí puedes encontrar Articulos relacionados con nuestros proyectos y servicios.',
      downloads: [
        { title:"Restauración de la Vegetación en Ambientes Andinos: Logros y Retos. En: Monitoreo de Biodiversidad, Lecciones de una Megaproyecto Trasandino",  link: 'documentos/doc1.pdf', thumbnail: '/assets/about-1.jpg' },
        { title: 'Extensive and intensive ecosystem restoration monitoring across complex central Andean landscapes', link: 'documentos/doc2.pdf', thumbnail: '/assets/about-1.jpg'},
        { title: 'Extensive and intensive ecosystem restoration monitoring across complex central Andean landscapes', link: 'documentos/doc3.pdf', thumbnail: '/assets/about-1.jpg'},
        { title:"Restauración de la Vegetación en Ambientes Andinos: Logros y Retos. En: Monitoreo de Biodiversidad, Lecciones de una Megaproyecto Trasandino",  link: 'documentos/doc1.pdf', thumbnail: '/assets/about-1.jpg' },
        { title: 'Extensive and intensive ecosystem restoration monitoring across complex central Andean landscapes', link: 'documentos/doc2.pdf', thumbnail: '/assets/about-1.jpg'},
        { title: 'Extensive and intensive ecosystem restoration monitoring across complex central Andean landscapes', link: 'documentos/doc3.pdf', thumbnail: '/assets/about-1.jpg'}
      ]
    },
    videos: {
      title: 'Videos',
      text: 'Descubre nuestros proyectos a través de videos explicativos y testimoniales.',
      videos: [
        { title: 'Ensilaje de Forrajes tipo Trinchera', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Experiencia en el ensilaje de forraje de maiz del tipo bolsa, del Ing. Pedro Zarate Garcia, propietario de la Crianza La Joya, ubicada en Sicaya, Junin.' },
        { title: 'Ensilaje de Forrajes, Tipo Bolsa', link: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', description: 'Experiencia en el ensilaje de forraje de maiz del tipo bolsa, del Ing. Pedro Zarate Garcia, propietario de la Crianza La Joya, ubicada en Sicaya, Junin..' },
        { title: 'Ensilaje de Forrajes, Tipo Bolsa', link: 'https://www.youtube.com/embed/L_jWHffIx5E', description: 'Experiencia en el ensilaje de forraje de maiz del tipo bolsa, del Ing. Pedro Zarate Garcia, propietario de la Crianza La Joya, ubicada en Sicaya, Junin.' }
      ]
    },
    imagenes: {
      title: 'Publicaciones de Nuestras redes',
      text: 'Explora nuestras actividades y proyectos a través de imágenes representativas.',
      images: [
        '/assets/about-1.jpg',
        '/assets/about-2.jpg',
        '/assets/about-3.jpg'
      ]
    }
  };

  options.forEach(option => {
    option.addEventListener('click', () => {
      const contentKey = option.dataset.content;
      const selectedContent = content[contentKey];

      description.innerHTML = `
        <h2>${selectedContent.title}</h2>
        <p>${selectedContent.text}</p>
      `;

      if (contentKey === 'descargas') {
        const downloadsHTML = selectedContent.downloads.map(download => `
          <div class="downloads">
            <a href="${download.link}" target="_blank">
              <img src="${download.thumbnail}" alt="${download.name}">
            </a>
            <p style="color: #34b433; font-weight: bold; font-size: 12px;">${download.title}</p>
            
          </div>
        `).join('');

        contentContainer.innerHTML = downloadsHTML;
      } else if (contentKey === 'videos') {
        const videosHTML = selectedContent.videos.map(video => `
          <div>
            <iframe width="560" height="315" src="${video.link}" frameborder="0" allowfullscreen></iframe>
            <p style="color: #34b433; font-weight: bold; font-size: 12px;">${video.title}</p>
            <p style="font-size: 12px;">${video.description}</p>
          </div>
        `).join('');

        contentContainer.innerHTML = videosHTML;
      } else if (contentKey === 'imagenes') {
        const imagesHTML = selectedContent.images.map(image => `
          <div class="image-container01">
            <img src="${image}" alt="Imagen representativa">
          </div>
        `).join('');

        contentContainer.innerHTML = imagesHTML;
      }
    });
  });
});
