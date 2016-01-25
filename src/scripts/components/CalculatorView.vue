<template>
  <p>
    <input class="guita" placeholder="Pesos" v-model="input" debounce="300" />
  </p>
  <p v-if="value != 0">
    <copybutton :text="text"></copybutton>
    <a class="btn" href="https://twitter.com/intent/tweet?text={{ text }}" target="_blank">Twittear</a>
  </p>
  <div class="emojis" v-html="icons"></div>
</template>

<script>
var _ = require('underscore');
var twemoji = require('twemoji');

var CopyButton = require('./CopyButton.vue');

export default {
  data () {
    return {
      input: ''
    }
  },

  components: {
    copybutton: CopyButton
  },

  computed: {

    value () {
      return parseInt(this.input) || 0;
    },

    text () {

      var denominations = [
        { value: 1000,  emoji: "🐦" },
        { value: 500,   emoji: "🐯" },
        { value: 200,   emoji: "🐋" },
        { value: 100,   emoji: "🐐" },
        { value: 50,    emoji: "🐥" },
        { value: 20,    emoji: "🐴" },
        { value: 10,    emoji: "🔟" },
        { value: 5,     emoji: "5️⃣" },
        { value: 2,     emoji: "2️⃣" },
        { value: 1,     emoji: "1️⃣" }
      ];

      var remainder = this.value;

      var emojis = _.map(denominations, function (denomination){
        var qty = Math.floor(remainder / denomination.value);
        remainder = remainder % denomination.value;
        return Array(qty+1).join(denomination.emoji);
      });

      return emojis.join('');

    },

    icons () {

      return twemoji.parse(this.text, {
        folder: 'svg',
        ext: '.svg'
      });

    }
  }
};
</script>

<style lang="sass">
@import '../../styles/variables.scss';

.guita {
  border: 0;
  outline: 0;
  background-color: transparent;
  text-align: center;
  font-size: 3em;
  width: 60%;
  box-shadow: 0px 2px 0px $color_b;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
}

.guita:focus {
  box-shadow: 0px 2px 0px $color_a;
}

.guita {
  &::-webkit-input-placeholder {
    color: $color_b;
  }
  &::-moz-placeholder {
    color: $color_b;
  }
  &:-ms-input-placeholder {
    color: $color_b;
  }
  &:-moz-placeholder {
    color: $color_b;
  }
}

.emojis {
  margin: 50px 0px;
}

.emoji {
  width: 20%;
  min-width: 50px;
}

</style>
