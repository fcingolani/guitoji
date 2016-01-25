<template>
  <div class="wrapper">
    <h1>Guitoji</h1>
    <p>Calculadora de emojis para los nuevos <a href="http://www.bcra.gov.ar/Noticias/not000047.asp" target="_blank">billetes argentinos</a>.</p>
    <router-view keep-alive>
    </router-view>
    <p>
      <a href="https://fcingolani.com.ar/guitoji/" target="_blank">Guitoji</a>
      fue hecho por <a href="https://twitter.com/fcingolani" target="_blank">@fcingolani</a>,
      inspirado por un <a href="https://twitter.com/Juansante/status/689829579020767233" target="_blank">tweet de @Juansante</a>.
    </p>
  </div>
</template>

<style lang="sass">
@import '../../styles/normalize.css';

@import url(https://fonts.googleapis.com/css?family=Chango);

@import '../../styles/variables.scss';

body {
  color: $color_a;;
  background: $color_c;
  text-align: center;
  border-top: 20px solid $color_e;
  padding-top: 20px;
}

h1 {
  text-align: center;
  font-family: 'Chango', cursive;
  color: $color_e;
  font-size: 7rem;
  margin-top: 0px;
  margin-bottom: 20px;
}

a {
  color: $color_e;
}

.wrapper {
  width: 600px;
  margin: 0 auto;
}

.btn {
    padding: 10px 15px;
    margin: 0px 5px;
    background: $color_e;
    color: #FFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: solid 1px $color_e;
    cursor: pointer;
    text-decoration: none;
}

.btn:hover {
    background: darken($color_e, 10);
}

.btn:active {
    background: ligthen($color_e, 10);
}

@media ( max-width: 600px ) {

  h1 {
    font-size: 18vw;
  }

  .wrapper {
    width: 80%;
  }

}



</style>
