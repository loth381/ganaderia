document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const description = document.getElementById('description');
    const image = document.getElementById('image');

    const content = {
      asesoria: {
        title: 'Asesoría y Capacitación',
        text: 'GMyC, brinda asesoría y capacitación sobre aspectos de desarrollo y conservación como ganadería, agricultura, forestal, riegos, medio ambiente, sistemas de información geográfica y percepción remota, análisis estadístico, proyectos, de manera presencial y virtual.',
        img: '/assets/about-1.jpg'
      },
      investigacion: {
        title: 'Investigación',
        text: 'GMyC, desarrolla investigaciones en las áreas productivas y ambientales, con el objetivo de resolver problemas puntuales relacionados al sector productivo y ambiental.',
        img: '/assets/about-2.jpg'
      },
      proyectos: {
        title: 'Proyectos y Planes',
        text: 'GMyC, elabora y diseña proyectos y planes de desarrollo y conservación en el marco de las normas vigentes en el país.',
        img: '/assets/about-3.jpg'
      },
      estudios: {
        title: 'Estudios',
        text: 'GMyC, desarrolla estudios técnicos a nivel semidetallado y detallado, de acuerdo a objetivo del cliente. Los estudios realizados son Monitoreo ambientales, Estudios de impacto ambiental, Valoracion ambiental, Tasacion de predios, Zonificacion ecológica económica, Ordenamiento territorial',
        img: '/assets/pdffondo.jpg'
      },
      ejecucion: {
        title: 'Ejecución',
        text: 'GMyC, ejecuta proyectos en materia productiva y ambiental, como Biorestauracion de ecosistemas, Cierre ambiental, Produccion ganadera, Produccion agrícola.',
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