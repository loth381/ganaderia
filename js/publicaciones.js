document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');
  const description = document.getElementById('description');
  const contentContainer = document.getElementById('content-container');

  const content = {
    descargas: {
      title: 'GANADERIA',
      text: 'Descubre las últimas noticias y avances en ganadería sostenible',
      downloads: [
        { title:"Ganadería de Arequipa en alerta tras muertes de alpacas por friajes",  link: 'https://gestion.pe/peru/friaje-en-arequipa-genera-perdidas-economicas-a-alpaqueros-midagri-forrajes-alpacas-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/IMAYT43ITJHDVJWBFEUOK3WVTE.jpeg?auth=e1500a5684c7ce960609643e473f2c20c1aaaad793235a0b1527e06ce9711ace&width=580&height=330&quality=75&smart=true' },
        { title: 'Priorizarán construcción de cobertizos en las zonas altoandinas', link: 'https://gestion.pe/peru/priorizaran-construccion-de-cobertizos-en-las-zonas-altoandinas-fenomeno-el-nino-friaje-heladas-nevadas-ganaderia-agricultura-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/PX7A26KU3FFIZADJHGRYFAVJII.jpg?auth=cd9df1ee145e424b6666fbcc27006bdc3250b04cf3cd0af9efce603387decf83&width=580&height=330&quality=75&smart=true'},
        { title: 'Agricultura y ganadería pierden US$ 123,000 millones al año por desastres naturales', link: 'https://gestion.pe/mundo/agricultura-y-ganaderia-pierden-us-123000-millones-al-ano-por-desastres-climaticos-desastres-climaticos-agricultura-ganaderia-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/D4JNJ7VEBRAF5OOLG6V3JFDJZY.jpg?auth=35824aec02ad88b44ce0b68c0c2fec028f58ef07039c4ab958379cd52c6f727e&width=580&height=330&quality=75&smart=true'},
      ]
    },
    videos: {
      title: 'MEDIO AMBIENTE',
      text: 'Descubre las últimas noticias y avances en medio ambiente',
      videos: [
        { title:"Naturaleza y oportunidades para el sector privado",  link: 'https://gestion.pe/opinion/naturaleza-y-oportunidades-para-el-sector-privado-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/5QGVNOZWTRGO3JJIV5I2X4UZZE.jpg?auth=6973c2562ae89a26ebc8fda29f2185410ab27aa31e7ef687749e2e7f724ed159&width=580&height=330&quality=75&smart=true' },
        { title: 'Gobierno aprueba hoja de ruta en economía circular de agua potable y saneamiento', link: 'https://gestion.pe/economia/gobierno-aprueba-hoja-de-ruta-en-economia-circular-de-agua-potable-y-saneamiento-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/Z7FL2DNJFJE6PJUT4LHI3SODQU.jpg?auth=cb7dbd9196bc557a347be5d8e3709015e5e60882acdd99a98cc3dd95d68434b6&width=580&height=330&quality=75&smart=true'},
        { title: 'Ciudadanos podrán enviar opiniones y sugerencias para la compensación ecológica: SEIA', link: 'https://gestion.pe/peru/minam-ciudadanos-podran-enviar-opiniones-y-sugerencias-para-la-compensacion-ecologica-impactos-ambientales-residuales-gobierno-seia-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/36ZYSZ2EVFAJFOVO4LI2HVESJ4.jpg?auth=062b77455b87ec1d0a225d7889776c0e1604f4ac3472f7955c3a83feb38ac029&width=580&height=330&quality=75&smart=true  '},
      ] 
    },
    imagenes: {
      title: 'CONSTRUCCION',
      text: 'Descubre las últimas noticias y avances en Construcione.',
      images: [
        { title:"Importaciones de materiales de construcción crecieron 196% a mayo",  link: 'https://gestion.pe/economia/importaciones-de-materiales-de-construccion-crecieron-196-a-mayo-idexcam-obras-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/26ZB7Z7P6JC6PJB2O6R2JMG4FQ.jpg?auth=7efd967f04b0c7d48b53051a2f75b73a3e2c406bbf6eb9b76482446c92e9b9b1&width=580&height=330&quality=75&smart=true' },
        { title: 'Una de las “trabas” clave que dejaba a inmobiliarias en stand by, ahora liberada', link: 'https://gestion.pe/economia/una-de-las-trabas-clave-que-dejaba-a-inmobiliarias-en-stand-by-ahora-liberada-barrera-burocratica-indecopi-propiedad-privada-vecinos-certificado-de-conformidad-de-obra-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/Z4RIGP6B5ZGSHGJXBXKMQLS3OY.jpg?auth=6b4758192d8e455b83ef3b825cbb170d3c9f23f06329cf8f9aef6961f86ec29b&width=580&height=330&quality=75&smart=true'},
        { title: 'Unicon busca invertir en nueva línea de producción de concreto en Jicamarca', link: 'https://gestion.pe/economia/empresas/unicon-busca-invertir-en-nueva-linea-de-produccion-de-concreto-en-jicamarca-construccion-empresas-grupo-unacem-lima-its-produce-noticia/', thumbnail: 'https://gestion.pe/resizer/v2/5HHU4IS4ZFGZTNZHKVLZNFM56E.jpeg?auth=ac7c8849e44513d414ebe48f4697064a88a087f5b3ac0e256eb771b456b8ba06&width=580&height=330&quality=75&smart=true'},
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
            <p style="color: white; font-weight: bold; font-size: 15px;">${download.title}</p>
            
          </div>
        `).join('');

        contentContainer.innerHTML = downloadsHTML;
      } else if (contentKey === 'videos') {
        const videosHTML = selectedContent.videos.map(video => `
          <div class="downloads">
            <a href="${video.link}" target="_blank">
              <img src="${video.thumbnail}" alt="${video.name}">
            </a>
            <p style="color: white; font-weight: bold; font-size: 15px;">${video.title}</p>
          </div>
        `).join('');

        contentContainer.innerHTML = videosHTML;
      } else if (contentKey === 'imagenes') {
        const imagesHTML = selectedContent.images.map(image => `
         <div class="downloads">
            <a href="${image.link}" target="_blank">
              <img src="${image.thumbnail}" alt="${image.name}">
            </a>
            <p style="color: white; font-weight: bold; font-size: 15px;">${image.title}</p>
          </div>
        `).join('');

        contentContainer.innerHTML = imagesHTML;
      }
    });
  });
});
