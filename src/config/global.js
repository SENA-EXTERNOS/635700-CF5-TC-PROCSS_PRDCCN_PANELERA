export default {
  global: {
    componenteFormativo: 'Preparación de la materia prima e insumos',
    descripcionCurso:
      'En Colombia, muchas familias campesinas se benefician del proceso de producción panelera, desde la transformación del jugo de caña, pasando por la limpieza y evaporación, hasta el empaque y la distribución de la panela. El conocimiento generacional se refleja en la calidad del producto y, por ello, el proceso deber estar basado en las buenas prácticas de manufactura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Equipos e instrumentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Extracción de jugos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Molino y mantenimiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Hornillas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Pailas y mantenimiento',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Clarificación, evaporación y concentración de jugos',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Trasiego de mieles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Proceso de concentración de jugo de caña',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Jugo de caña',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Equipos e instrumentos',
      referencia: 'Rojas, G. (2016). Elaboración Papelón / Panela.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndBPM6f5tX4',
    },
    {
      tema: 'Equipos e instrumentos',
      referencia:
        'TvAgro. (2019). Cuál es el Proceso de Elaboración de la Panela. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=hgUj0tKM8OA',
    },
    {
      tema: 'Equipos e instrumentos',
      referencia: 'AEA Región Andina. (2014). Hornillas paneleras eficientes.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=01jkgR9jotM',
    },
    {
      tema: 'Equipos e instrumentos',
      referencia:
        'Tipica aguardiente tradicional de caña. (2021, mayo 8). Maestro constructor de hornillas paneleras [Video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=26kRgyaEqdQ',
    },
  ],
  glosario: [
    {
      termino: 'Batido',
      significado:
        'Proceso manual a través del cual la miel pierde su capacidad de adherencia y adquiere la textura indicada para el moldeo; se realiza después de que la miel obtiene el punto y ha sido colocada en una batea.',
    },
    {
      termino: 'Clarificación',
      significado:
        'Eliminación de los sólidos en suspensión, las sustancias coloidales y algunos compuestos colorantes presentes en los jugos durante la producción de panela mediante la aglomeración de dichas partículas. Se efectúa en la paila clarificadora de la hornilla mediante la coagulación floculación de las impurezas presentes en el jugo, por el efecto combinado de temperatura, tiempo y acción de los agentes clarificantes.',
    },
    {
      termino: 'Evaporación',
      significado:
        'Etapa que sigue a la clarificación, donde el calor suministrado es aprovechado básicamente en el cambio de fase del agua (líquido a vapor) eliminándose cerca del 90 % del agua presente con lo cual se aumenta el contenido inicial de los sólidos solubles entre 16 y 21 °Brix hasta el punto de panela, a una temperatura promedio de 120 °C.',
    },
    {
      termino: 'Extracción',
      significado:
        'Separación del jugo por medio de la compresión de la caña, haciéndola pasar por tres mazas de acero que giran en sentido contrario.',
    },
    {
      termino: 'Hornilla',
      significado:
        'Equipo donde se realizan las operaciones térmicas del proceso usando la energía producida por la combustión del bagazo de la caña.',
    },
    {
      termino: 'Humedad',
      significado:
        'Contenido de agua en la panela y el bagazo de la caña; se expresa en porcentajes.',
    },
    {
      termino: 'Moldeado',
      significado:
        'Proceso de disposición en moldes o gaveras de la miel cristalizada para que se solidifique y se obtenga la panela.',
    },
    {
      termino: 'Molino de caña',
      significado:
        'Instrumento que permite la extracción del jugo de caña de azúcar; está compuesto por un sistema de tres mazas y una cuchilla central, la mayor parte de estos implementos se construyen en hierro fundido.',
    },
    {
      termino: 'Pailas',
      significado:
        'Vasijas o recipientes metálicos que reciben los jugos y transfieren el calor necesario para realizar la clarificación, evaporación y concentración.',
    },
    {
      termino: 'Sacarosa',
      significado:
        'Disacárido comúnmente conocida como azúcar de mesa, está formado a partir de dos azúcares sencillos o monosacáridos que son la glucosa y la fructuosa. En la naturaleza se encuentra en un 20 % del peso en la caña de azúcar y en un 15 % del peso de la remolacha azucarera, de la que se obtiene el azúcar de mesa. La miel también es un fluido que contiene gran cantidad de sacarosa parcialmente hidrolizada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agricultura & Ganadería. (s. f.). <i>Aumentando la eficiencia energética en los trapiches paneleros del país</i>. Periódico virtual especializado en noticias del sector agropecuario.',
      link:
        'https://www.agriculturayganaderia.com/website/aumentando-la-eficiencia-energetica-en-los-trapiches-paneleros-del-pais/',
    },
    {
      referencia:
        'Cabello, M., Cabello, J., Moya, J., Goytisolo, R., Velásquez, J. & Mestizo, J. (2012). Modelación matemática de la flotación de la maza superior de los molinos de caña de azúcar. <i>Ingeniería Mecánica, 15</i>(1), p. 44-53.',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_abstract&pid=S1815-59442012000100005&lng=es&nrm=iso&tlng=es',
    },
    {
      referencia:
        'Cristancho, A. (2012). <i>Diseño de un sistema de recirculación de gases en hornillas paneleras de evaporación abierta usando EES</i>. [Proyecto de grado para optar al título de Ingeniera Mecánica, Universidad de los Andes].',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/14973/u615569.pdf?sequence=1  ',
    },
    {
      referencia:
        'Deantonio, L. Ospina, C., Varó, V. & Lópe, X. (2020). <i>Tecnologías para el sector panelero</i>.',
      link: 'https://doi.org/10.21930/agrosavia.brochure.7403534',
    },
    {
      referencia:
        'Espinoza, G. (2017).<i> Estudio fluidodinámico y estructural de pailas paneleras pirotubulares</i> [Tesis de pregrado en Ingeniería Mecánico-Eléctrica. Universidad de Piura, Facultad de Ingeniería. Programa Académico de Ingeniería Mecánico-Eléctrica. Piura, Perú].',
      link: 'https://pirhua.udep.edu.pe/handle/11042/2736',
    },
    {
      referencia:
        'Fernández del Campo, L. (1901). <i>Cultivo de la caña de azúcar</i>. Serie: Biblioteca Agrícola de la Secretaría de Fomento, digitalizado en 2012.',
      link: 'https://doi.org/10.5962/bhl.title.156871 ',
    },
    {
      referencia:
        'García, H. (2020).<i> Curso básico descriptivo para el diseño, construcción y operación de hornillas paneleras</i>. Fedepanela.',
      link: 'http://www.sipa.org.co/wp/wp-content/uploads/Tema1_Hornillas.pdf ',
    },
    {
      referencia:
        'Gottret, M. & Rodríguez, G. (2018). <i>Aprendiendo del pasado para proyectarnos hacia el futuro: adopción e impacto de la tecnología de panela en la hoya del río Suárez y Cundinamarca (Colombia)</i>. Informe Técnico, CORPOICA, & CIAT.',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/12342/44660_59329.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Hernández, S., Cely, M. & Torres, Z. (2018) Capacidades y tendencias tecnológicas en el proceso de producción de panela artesanal. Un estudio de vigilancia tecnológica. <i>Revista científica profundidad construyendo futuro, 15</i>(15), p. 49¬-63.',
      link: 'https://doi.org/10.22463/24221783.3310',
    },
    {
      referencia:
        'Mendieta, O. & Escalante, H. (2013). Análisis experimental de la evaporación del jugo de caña de azúcar en película sobre una placa plana. <i>Ciencia y Tecnología Agropecuaria,14</i>(2), p. 113–127.',
      link:
        'http://hdl.handle.net/20.500.12324/33966,http://revista.corpoica.org.co/index.php/revista/article/view/403,10.21930/rcta.vol14_num2_art:403',
    },
    {
      referencia:
        'Moreno, J., Castrillón, N. & Zuluaga, C. (2017). Procesamiento en paralelo y distribuido en dos SGBDS: un caso de estudio. <i>Revista Tecnura, 21</i>(52), p. 111–129.',
      link: 'https://doi.org/10.14483/udistrital.jour.tecnura.2017.2.a09 ',
    },
    {
      referencia:
        'Morales, V., Osorio, A. & Rodríguez, J. (2017). Innovaciones en el trapiche panelero: la producción de panela granulada. <i>Agroproductividad, 10</i>(11), p. 41– 47.',
      link:
        'https://link.gale.com/apps/doc/A530914345/IFME?u=anon~3b9335c6&sid=googleScholar&xid=9e5d814c',
    },
    {
      referencia:
        'Osorio, G. (2007).<i> Manual técnico buenas prácticas agrícolas (BBA) y buenas prácticas de manufactura (BPM) en la producción de caña y panela.</i>',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/18313/43120_50541.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Osorio, G. (2007). <i>Manual técnico buenas prácticas agrícolas (BBA) y buenas prácticas de manufactura (BPM) en la producción de caña y panela. Extracción de jugos, (Tabla 22)</i>. Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO).',
      link: 'https://www.fao.org/3/a1525s/a1525s00.pdf',
    },
    {
      referencia:
        'Prada, L. (2002). <i>Mejoramiento en la calidad de miel y panela</i>.',
      link: 'http://hdl.handle.net/20.500.12324/17691  ',
    },
    {
      referencia:
        'Prada, L., García, H. & Chaves, A. (2015). Efecto de las variables de evaporación: presión y flujo calórico en la calidad de la panela. <i>Ciencia y Tecnología Agropecuaria, 16</i>(1), p. 7–23.',
      link:
        'http://hdl.handle.net/20.500.12324/33945,http://revista.corpoica.org.co/index.php/revista/article/view/376,10.21930/rcta.vol16_num1_art:376',
    },
    {
      referencia:
        'Quezada, W. (2007). <i>Guía técnica de agroindustria panelera</i>.',
      link:
        'http://repositorio.utn.edu.ec/bitstream/123456789/934/1/GuíaTécnicadeAgroindustriaPanelera.pdf ',
    },
    {
      referencia:
        'Rodríguez, J. (2017). Innovaciones en el trapiche panelero: la producción de panela granulada.<i> Agroproductividad, 10</i>(11).',
      link:
        'https://revista-agroproductividad.org/index.php/agroproductividad/article/view/67 ',
    },
    {
      referencia:
        'Romero, E., Scandaliaris, J., Digonzelli, P., Leggio, M., Giardina, J., Fernández, J., Casen, S., Tonatto, M. & Alonso, L.  (2009). <i>La caña de azúcar, características y ecofisiología</i>.',
      link:
        'https://www.researchgate.net/publication/284772525_La_cana_de_azucar_caracteristicas_y_ecofisiologia',
    },
    {
      referencia:
        'Ruiz, I., Melo, L., Ramírez, L. & Blanco, X. (2019). <i>Implementación tecnológica en proceso de fabricación de panela orgánica para cubrir demanda española</i>. Institución Universitaria Politécnico Grancolombiano.',
      link:
        'https://alejandria.poligran.edu.co/bitstream/handle/10823/1375/TG%20-%20Blanco%20Melo%20Ramirez%20Ruiz.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Vargas, R. (2019). <i>Zonificación de la Hoya del Río Suárez por propiedades físicas del suelo, para el cultivo de caña panelera</i> [Tesis Maestría, Universidad Nacional].',
      link: 'https://repositorio.unal.edu.co/handle/unal/76943',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
