document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const description = document.getElementById('description');
  const slider = document.getElementById('slider');
  let currentSlide = 0;

  const content = {
    asesoria: {
      title: 'Proveedor de plantas nativas para bio restauración de Perú LNG',
      text: 'Se ha proveído material vegetativo para la Biorestauracion en el derecho de día con especie nativas de la zona alto andina como las especies calamagrostis rígida, la festuca sp. Que son especies palatables para la ganadería alto andina.',
      img: ['/assets/project01.webp', '/assets/project02.webp', '/assets/project03.webp', '/assets/project04.webp']
    },
    investigacion: {
      title: 'Proveedor de plantas nativas para parcelas demostrativas ',
      text: 'Se ha proveído de material vegetativo de especies nativos de la zona alto andina, para parcelas demostrativas para diferentes regiones del Perú. ',
      img: ['/assets/project05.webp', '/assets/project07.webp', "/assets/servicios01.webp" , '/assets/redes2.webp']
    },
    proyectos: {
      title: 'Construcción de reservorio para riego',
      text: 'Se viene implementando la construcción de reservorio con geomembrana (HDP), para riegos de pastos nativos y pasto cultivo ',
      img: ['/assets/project08.webp', '/assets/project09.webp', '/assets/project10.webp','/assets/project14.webp']
    },
    estudios:{
      title: 'Construcción de viveros',
      text: 'se viene implementando la construcción de viveros para realizar trabajos de producción de material vegetativo con especies nativas para la Biorestauracion, forestación, producción de hortalizas, etc',
      img: ['/assets/project11.webp', '/assets/project12.webp', '/assets/project13.webp','/assets/project12.webp  ']
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