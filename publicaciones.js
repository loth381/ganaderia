document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const description = document.getElementById('description');
  const contentContainer = document.getElementById('content-container');

  const content = {
    descargas: {
      title: 'Descargas',
      text: 'Aquí puedes encontrar documentos relacionados con nuestros proyectos y servicios.',
      downloads: [
        { name: 'Documento 1', link: 'documentos/doc1.pdf', thumbnail: 'assets/about-1.jpg', description: 'Descripción del documento 1.' },
        { name: 'Documento 2', link: 'documentos/doc2.pdf', thumbnail: 'assets/about-1.jpg', description: 'Descripción del documento 2.' },
        { name: 'Documento 3', link: 'documentos/doc3.pdf', thumbnail: 'assets/about-1.jpg', description: 'Descripción del documento 3.' }
      ]
    },
    videos: {
      title: 'Videos',
      text: 'Descubre nuestros proyectos a través de videos explicativos y testimoniales.',
      videos: [
        { title: 'Video 1', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Descripción del video 1.' },
        { title: 'Video 2', link: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', description: 'Descripción del video 2.' },
        { title: 'Video 3', link: 'https://www.youtube.com/embed/L_jWHffIx5E', description: 'Descripción del video 3.' }
      ]
    },
    imagenes: {
      title: 'Imágenes',
      text: 'Explora nuestras actividades y proyectos a través de imágenes representativas.',
      images: [
        'assets/about-1.jpg',
        'assets/about-2.jpg',
        'assets/about-3.jpg'
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
            <p>${download.description}</p>
          </div>
        `).join('');

        contentContainer.innerHTML = downloadsHTML;
      } else if (contentKey === 'videos') {
        const videosHTML = selectedContent.videos.map(video => `
          <div>
            <iframe width="560" height="315" src="${video.link}" frameborder="0" allowfullscreen></iframe>
            <p>${video.description}</p>
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
