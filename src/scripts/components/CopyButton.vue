<template>
  <a class="btn" v-el:copy v-bind:data-clipboard-text="text">Copiar</a>
</template>

<script>
var Clipboard = require('clipboard');

export default {

  name: "CopyButton",

  props: {
    text: String
  },

  attached () {
    new Clipboard(this.$els.copy);
  }

}
</script>
