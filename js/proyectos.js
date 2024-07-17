document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const description = document.getElementById('description');
  const slider = document.getElementById('slider');
  let currentSlide = 0;

  const content = {
    asesoria: {
      title: 'Proveedor de plantas nativas para bio restauración de Perú LNG',
      text: 'Se ha implementado plantas nativas de las zonas alto andino como las especies de calamagrostis rigida, la festuca sp, Que son especies palatables para la alpaca o vino, llama, vacuno y vicuña.',
      img: ['/assets/ganaderia01.jpeg', '/assets/ganaderia02.jpeg', '/assets/ganaderia03.jpeg', '/assets/ganadaria04.jpeg']
    },
    investigacion: {
      title: 'Proveedor de plantas nativas para parcelas demostrativas de SERFOR',
      text: 'Se ha implementado especies nativas de festuca sp, bromus, lanatus, poa sp. ',
      img: ['/assets/ambiente04.jpeg', '/assets/ambiente02.jpeg', '/assets/ambiente03.jpeg', '/assets/ambiente01.jpeg']
    },
    proyectos: {
      title: 'Construcción de reservorio para riego',
      text: 'Se viene implementando la construcción de reservorio con geomembrana (hdp)',
      img: ['/assets/construcion01.jpeg', '/assets/construcion02.jpeg', '/assets/home03.jpeg','/assets/servicios02.jpeg']
    },
    estudios:{
      title: 'Construcción de viveros',
      text: 'Se viene implementando la construcción de viveros para realizar trabajos de producción de material vegetativo, especies nativas para forestación y producción de hortalizas.  ',
      img: ['/assets/construcion01.jpeg', '/assets/construcion02.jpeg', '/assets/home03.jpeg','/assets/servicios02.jpeg']
    },
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