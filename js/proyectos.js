document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const description = document.getElementById('description');
    const image = document.getElementById('image');

    const content = {
      asesoria: {
        title: 'Biorestauración del Gasoducto de Perú LNG. PERU LNG SRL',
        text: 'Este proyecto se inició en el año 2011, y tiene como objetivo la recuperación de la vegetación nativa (pastizal, arbustiva, bofedal) de las áreas cruzadas por el gasoducto de PERU LNG. GMyC realiza actividades de capacitación, monitoreo, planificacion y supervisión del proceso de biorestauracion de estos ecosistemas hasta alcanzar un nivel de estadio apropiado de recuperación.',
        img: '/assets/about-1.jpg'
      },
      investigacion: {
        title: 'Cierre Ambiental de Minas, CIA MINERA ARES SAC',
        text: 'Este proyecto se inició en el año 2014, y tiene como objetivo el cierre ambiental de las áreas de exploración minera de la compañía en diversos lugares del país. Para ello GMyC realiza estudios de suelos y vegetación, elabora planes de restauración y ejecuta el cierre ambiental.',
        img: '/assets/about-2.jpg'
      },
      proyectos: {
        title: 'Ecología de la Propagación de Eriotheca sp. SMITHSONIAN INSTITUTE',
        text: 'Este proyecto se inició en el año 2011, y tuvo como objetivo el desarrollo de investigaciones del proceso de propagación de la especie Eriotheca sp, desde la cosecha de la semilla, la germinación y el desarrollo de las plántulas y plantones en condiciones de laboratorio y vivero. Estos mismos estudios sirvieron de base para investigaciones en campo en la localidad de San Miguel, Ayacucho.',
        img: '/assets/about-3.jpg'
      },
      ejecucion: {
        title: 'Caracterización de Praderas Nativas. ZOCAEDA',
        text: 'Este proyecto se inició el año 2015, y tuvo como objetivo asesorar y capacitar a profesionales y productores integrantes de este estudio, en las bases para el manejo y mejoramiento de los pastizales altoandinos en las comunidades campesinas de la región Huancavelica.',
        img: '/assets/about-2.jpg'
      }
    };

    options.forEach(option => {
      option.addEventListener('click', () => {
        const selectedContent = content[option.dataset.content];
        description.innerHTML = `<h2>${selectedContent.title}</h2><p>${selectedContent.text}</p>`;
        image.src = selectedContent.img;
        image.alt = selectedContent.title;
      });
    });
  });