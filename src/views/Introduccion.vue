<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-md-8.mb-4.mb-md-0
        p.mb-4 Apreciado aprendiz, bienvenido a este componente formativo, orientado al conocimiento de la preparación de la materia prima y de los insumos para la producción panelera, En un primer momento, un acercamiento para identificar los equipos e instrumentos indispensables para dicha preparación; de igual manera, se podrán aprender aspectos importantes que deben ser considerados para el mantenimiento de tales instrumentos; en un segundo momento, se aprenderá sobre el proceso del trasiego de mieles, el papel que juega la temperatura en la concentración de los jugos de la caña y su manipulación.
        p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
        p.mb-5 <b>Le deseamos un exitoso aprendizaje.</b>
    
      .col-md-4
        figure
          img(src='@/assets/curso/temas/introduccion/img-1.png', alt='')
    
    .col-12
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
