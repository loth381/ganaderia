document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const description = document.getElementById('description');
    const image = document.getElementById('image');

    const content = {
      asesoria: {
        title: 'Asesoría y Capacitación',
        text: 'GMyC, brinda asesoría y capacitación sobre aspectos de desarrollo y conservación como ganadería, agricultura, forestal, riegos, medio ambiente, sistemas de información geográfica y percepción remota, análisis estadístico, proyectos, de manera presencial y virtual.',
        img: '/assets/about-1.webp',
        link:"https://web.whatsapp.com/"
        
      },
      investigacion: {
        title: 'Asesoría y Capacitación',
        text: 'GMyC, brinda asesoría y capacitación sobre aspectos de desarrollo y conservación como ganadería, agricultura, forestal, riegos, medio ambiente, sistemas de información geográfica y percepción remota, análisis estadístico, proyectos, de manera presencial y virtual.',
        img: '/assets/hero.webp',
        link:"https://web.whatsapp.com/"
      },
      proyectos: {
        title: 'Asesoría y Capacitación',
        text: 'GMyC, brinda asesoría y capacitación sobre aspectos de desarrollo y conservación como ganadería, agricultura, forestal, riegos, medio ambiente, sistemas de información geográfica y percepción remota, análisis estadístico, proyectos, de manera presencial y virtual.',
        img: '/assets/about-3.webp',
        link:"https://web.whatsapp.com/"
      },
      estudios: {
        title: 'Estudios',
        text: 'GMyC, desarrolla estudios técnicos a nivel semidetallado y detallado, de acuerdo a objetivo del cliente. Los estudios realizados son Monitoreo ambientales, Estudios de impacto ambiental, Valoracion ambiental, Tasacion de predios, Zonificacion ecológica económica, Ordenamiento territorial',
        img: '/assets/pdffondo.webp',
        link:"https://web.whatsapp.com/"
      },
      ejecucion: {
        title: 'Ejecución',
        text: 'GMyC, ejecuta proyectos en materia productiva y ambiental, como Biorestauracion de ecosistemas, Cierre ambiental, Produccion ganadera, Produccion agrícola.',
        img: '/assets/about-2.webp',
        link:"https://web.whatsapp.com/"
      }
    };

    options.forEach(option => {
      option.addEventListener('click', () => {
        const selectedContent = content[option.dataset.content];
        description.innerHTML = `<h2>${selectedContent.title}</h2><p>${selectedContent.text}</p> <a href="${selectedContent.link}"><strong style="color:black;">Fuente:</strong> ${selectedContent.link}</a>`;
        image.src = selectedContent.img;
        image.alt = selectedContent.title;
      });
    });
  });