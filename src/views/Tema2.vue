<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Trasiego de mieles


    .row.mt-5
      .col-10.offset-1
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para el trasiego de las mieles de caña panelera o el traspaso de una paila a la otra, es recomendable disponer las pailas en posición o forma de cascada, para disminuir el esfuerzo físico del operario durante la transferencia de las mieles de una paila a la otra y también para evitar la pérdida del producto durante el proceso de evaporación del agua; asimismo, que las pailas sean construidas en acero inoxidable por ser los intercambiadores de calor usados durante el proceso.
           
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Proceso de concentración de jugo de caña

    p.mb-5 El proceso real de producción panelera se lleva a cabo al iniciar el paso de decantación del jugo extraído de la caña, con el propósito de liberarlo de las impurezas, separando la tierra y el bagacillo del jugo, paso seguido, las mieles continúan el proceso de calor y se adicionan floculantes y se regula el pH del jugo.

    p.mb-5 A continuación, se presentan los elementos que se deben tener presentes en el proceso de concentración de jugo de la caña:

    .tarjeta.color-slyder.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Próximo al estado de ebullición, muchas de las partículas coloidales dispersas en el jugo se coagulan, estas sustancian llevan por nombre “cachaza”; si estas no son separadas del jugo se dañan las características de la panela y por ello se hace necesario removerlas del jugo, liberándolo de las sustancias indeseadas. Separar la cachaza del jugo debe hacerse de manera cuidadosa, y logra hacerse por métodos físicos; el proceso de calentamiento continúa sobre el jugo clarificado para evaporar aproximadamente el 80 % del agua y así concentrar los azúcares hasta convertirlo en miel (Prada et al., 2015). Cuando esta alcanza entre 92 y 96 °Brix, se retira de la hornilla y se bate. En el proceso de evaporación del jugo de caña puede consumir alrededor del 80 % de la energía suministrada por la hornilla (Ruiz et al., 2019).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-2.png', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Durante la etapa de evaporación los jugos alcanzan la temperatura de ebullición (alrededor de 95 ºC), aquí se suministra la energía necesaria para evaporar el agua concentrada en los azúcares, se espera un paso de 15 ºB a 22 ºB (grados brix) a mieles que lleguen hasta los 60 ºB a 75 ºB. 
            p.mb-4 El balance de masa se realiza mediante el uso de la siguiente igualdad:
            .col-md-6.mx-auto.mb-5
              figure
                img(src='@/assets/curso/temas/T2/img-4.png', alt='')
            p.mb-4 <b>Donde:</b>
            ul.lista-ul
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | <b><i>Mj:</i></b> cantidad de jugo a concentrar, kg
                  li 
                    i.lista-ul__vineta
                    | <b><i>Bj:</i></b> sólidos solubles del jugo, ºB
                  li 
                    i.lista-ul__vineta
                    | <b><i>mm:</i></b> cantidad de miel o panela obtenida, kg
                  li 
                    i.lista-ul__vineta
                    | <b><i>Bm:</i></b> sólidos solubles de la miel o panela, ºB
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-3.png', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Cuando se está produciendo panela se llega al punto miel y se inicia la etapa de concentración, aquí sigue la separación del agua por el método de evaporación, en este punto se logra alcanzar la concentración mayor de sólidos solubles óptimos para una buena panela, normalmente se alcanza entre 92 °B y 94 °B, para panela en bloque o 96 °B, para panela granulada. En algunas regiones, cuando las mieles alcanzan las temperaturas que van entre 106 °C y 108 °C se les agrega bajas concentraciones de lechada de cal con la finalidad de afinar el grano, además se adiciona el agente antiadherente para evitar que las mieles se adhieran a las paredes de la paila punteadora disminuyendo la caramelización y el quemado. Es aconsejable el uso de manteca vegetal o aceite de cocina, para lo anterior se recomienda usar dos cucharadas soperas por cada 30 kg de panela a obtener (Mendieta & Escalante, 2013).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-5.png', alt='')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La concentración de las mieles es la etapa más crítica puesto que allí se registran temperaturas que van desde 100 °C y 125 °C, considerándose las más altas del proceso. Es aconsejable realizar esta etapa en el menor tiempo posible y asegurarse de que las mieles tengan el pH recomendado alrededor de 5.8 porque la inversión de la sacarosa se acelera en forma tal que el contenido de azúcares reductores iniciales por lo menos se duplica durante la concentración. El punto óptimo de la panela se obtiene entre 116 °C y 128 °C, y el porcentaje de sólidos solubles oscila entre 88 °B y 97 °B. Sin embargo, en la práctica, los operarios logran determinar el punto exacto de la panela por (1) la consistencia, (2) el color y (3) la densidad de las mieles, las cuales se establecen por la velocidad de escurrimiento sobre el cazo o remellón, por las características de las burbujas que forman con las mieles o por el sonido que produce el estrellar una masa de miel enfriada en agua y estrellada contra la lámina de la falca.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T2/img-6.png', alt='')


    ol.lista-ol--cuadro.mb-3
      li
        .lista-ol--cuadro__vineta.listas-primera 
          span 
        p <b>Rendimiento de jugo a panela</b>


    .row.justify-content-center.align-items-center.mb-5
      .col-md-7
        p.mb-3 La materia prima para la producción de panela es la caña de azúcar. La relación entre la cantidad de panela producida y la cantidad de caña empleada es muy variable, dependiendo de factores como el tipo de caña, la calidad de los suelos, el piso térmico y los fertilizantes utilizados, entre otros. El promedio nacional es de seis (6) kg de panela por cada 100 kg de caña, aunque existen zonas donde este nivel de rendimiento se duplica. Luego de cortada, la caña se muele (molienda) para la extracción del jugo, con rendimientos que varían entre el 55 y el 70 por ciento, dependiendo del tipo de molino utilizado. Después de la molienda, el residuo de la caña triturada, conocido como bagazo, conserva una humedad que varía entre 45 y 60 por ciento, por lo que es costumbre en muchos trapiches someterlo a un proceso de secado al ambiente en sitios llamados bagaceras, para luego utilizarlo como combustible. El jugo extraído de la caña se somete a un proceso de limpieza antes de ser utilizado.
      .col-md-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/T2/img-7.png', alt='mujer con un laptop y un robot')


    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4.mb-4.color-cajon-segundo
        p Al igual que para la producción de mieles, la utilidad del jugo convertido a panela es mayor cuando la concentración de los jugos es mayor, y cuando la concentración final de la panela es menor. Así mismo, jugos más diluidos, brix más bajo, producen mayor cantidad de agua evaporada y menos panela, por cada 100 kg de jugo que entren al proceso (Prada, 2002).


    .col-md-6.mx-auto.mb-5
      figure
        .titulo-sexto.color-acento-contenido
          p.mb-0 
            p.mb-1 <b>Tabla 1.</b><i> Cantidad de jugo requerida para producir un (kg) de panela, de acuerdo con la concentración del jugo y de la panela</i>
        img(src='@/assets/curso/temas/T2/img-8.svg', alt='')



    .row.justify-content-center.align-items-center.mb-5
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/T2/img-9.svg', alt='mujer con un laptop y un robot')
      .col-md-9
        p.mb-3 <b>Requerimientos de energía para la evaporación del agua de los jugos</b>
        p.mb-5 Para llevar a cabo la eficiencia y mejora en el proceso de producción de la panela, es importante comprender que el aumento de la capacidad de las hornillas y la eficiencia en transferencia de calor -para separar el agua de los jugos de la caña por medio del proceso conocido como evaporación- se debe llevar a cabo de manera eficaz.
        p.mb-5 Es de esta manera, que se presentan los requerimientos de energía para la evaporación del agua de los jugos:
    

    .row.mb-5.mt-5
      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="fac")
          .row(titulo="Demanda de concentración de energía térmica")
            .col-md-10.mb-4.mb-md-0
              p.mb-3 Es inevitable que el proceso demande de elevadas concentraciones de energía térmica para disminuir la concentración y cantidad de agua contenida en los jugos de la caña, para que la transferencia de calor ocurra se requiere el uso del bagazo, residuo de la caña el cual es obtenido durante la etapa de molienda, como combustible, de esta manera al generar fuego se transfiere la energía calórica elevada a las pailas paneleras mientras contienen los jugos, para separar el agua del jugo de caña. La autosuficiencia de la energía térmica se evidencia por ser usado el bagazo como combustible, la cual puede afectar la transferencia de energía por la característica del combustible, pues el bagazo húmedo afecta la temperatura. Otra ganancia del bagazo es que su uso permite evitar o disminuir la deforestación de la zona reduciendo la concentración de gases liberados a la capa gaseosa ambiental contribuyendo con el cuidado de la atmósfera y la concentración de gases.

          .row(titulo="Autoalimentación energética")
            .col-md-10.mb-4.mb-md-0
              p Se consigue al disponer de cámaras de combustión y pailas que permitan la conversión y transferencia de energía de forma eficiente, como también de técnicas para reducir las pérdidas de calor en las paredes del ducto y la chimenea. La cantidad de energía necesaria para evaporar el agua de los jugos y alcanzar la concentración de miel o de panela, dependen básicamente de la cantidad de agua a evaporar, del calor latente de vaporización y en menor grado de la presión atmosférica del local donde se desarrolle el proceso.
          
          .row(titulo="Evaporación")
            .col-md-10.mb-4.mb-md-0
              p.mb-3 Durante la evaporación se presenta un cambio de fase del agua, la cual pasa de estado líquido a estado de vapor. Este valor normalmente se identifica como λ (letra griega lambda). Así mismo, al ir evaporando el agua se va concentrando la solución del jugo y por tanto el valor del calor latente de vaporización va disminuyendo, porque cada vez hay menos agua en los jugos. La mayor parte de la energía consumida durante la evaporación del agua de los jugos se puede calcular usando la siguiente ecuación:
              .col-md-6.mx-auto.mb-5
                figure
                  img(src='@/assets/curso/temas/T2/img-11.svg', alt='')
              p.mb-4 <b>Donde:</b>
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | <b><i>mH<sub>2</sub>O</i></b> = Masa de agua a evaporar, kg
                    li 
                      i.lista-ul__vineta
                      | <b><i>λ</i></b> = Calor latente de vaporización, kcal/kg de agua (540)

      .col-md-4.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-10.png', alt='')


    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Jugo de caña


    .row.justify-content-center.align-items-center.mb-5
      .col-md-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/T2/img-12.png', alt='mujer con un laptop y un robot')
      .col-md-7
        p.mb-3 Dentro de la agroindustria el sector panelero transforma el jugo de la caña en un producto alimenticio de nombre panela, este es un producto sólido rico en carbohidratos, vitaminas y minerales. Para llevar a cabo la extracción del jugo se requiere de una infraestructura que sea amigable con el medio ambiente, sin que genere algún tipo de contaminación. Terminada la clarificación, se inicia la evaporación del agua aumentando de esta manera la concentración de azúcares en los jugos. La eficiencia térmica de la hornilla, y su efecto sobre los jugos, se cuentan dentro del conjunto de factores que influyen en la calidad de la panela. Cuando los jugos alcanzan un contenido de sólidos solubles cercano a 70 º Brix adquieren el nombre de mieles, y se inicia la concentración. La evaporación del agua contenida en los jugos por calentamiento a 96 º C permite alcanzar la concentración de sólidos apropiada para la consolidación y el moldeo de la panela entre 120 y 125º C (Osorio, 2007a) (Fernández del Campo, 1901).
      

    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4.mb-4.color-cajon-segundo
        p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros. 



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
