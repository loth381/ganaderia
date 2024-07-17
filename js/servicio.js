document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const description = document.getElementById('description');
  const slider = document.getElementById('slider');
  let currentSlide = 0;

  const content = {
    asesoria: {
      title: 'GANADERIA',
      text: 'GMACONS presta servicios y ejuta entrasformaciones de materia prima como fibra y carne de animales domesticos.',
      img: ['/assets/ganaderia01.webp', '/assets/ganaderia02.webp', '/assets/ganaderia03.webp', '/assets/ganadaria04.webp']
    },
    investigacion: {
      title: 'MEDIO AMBIENTE',
      text: 'GMACONS brinda asesoramiento y ejecución en temas ambientales y provee plantones de pastos nativos y forestales y a la vez ejecuta proyectos de construcciones de invernaderos y reservorios.',
      img: ['/assets/ambiente04.webp', '/assets/ambiente02.webp', '/assets/ambiente03.webp', '/assets/ambiente01.webp']
    },
    proyectos: {
      title: 'CONSTRUCCION',
      text: 'GMACONS también presta servicios de constructivos en edificaciones.',
      img: ['/assets/construcion01.webp', '/assets/construcion02.webp', '/assets/home03.webp','/assets/servicios02.webp']
    }
  };

  options.forEach(option => {
    option.addEventListener('click', () => {
      const selectedContent = content[option.dataset.content];
      description.innerHTML = `<h2>${selectedContent.title}</h2><p>${selectedContent.text}</p>`;
      slider.innerHTML = selectedContent.img.map(img => `<img src="${img}" alt="${selectedContent.title}" class="slider-image">`).join('');
      currentSlide = 0;
      updateSlider();
    });
  });

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % 4;
    updateSlider();
  }, 3000);
})