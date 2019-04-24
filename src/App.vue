<template>
  <div id="app">
    <button
      @click="toggleSound"
      class="toggle-sound">
      <span v-if="musicPaused">🔈</span>
      <span v-else>🔇</span>
    </button>
    <audio
      ref="audio"
      autoplay
      loop>
      <source :src="require(`@/assets/startup-nation-theme.mp3`)" type="audio/mp3">
    </audio>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      musicPaused: false
    }
  },
  methods: {
    toggleSound () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.musicPaused = false
      } else {
        this.$refs.audio.pause()
        this.musicPaused = true
      }
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'The Bold Font';
  src: url('./assets/fonts/TheBoldFont.woff2') format('woff2'),
      url('./assets/fonts/TheBoldFont.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

html {
  padding: 0;
  margin: 0;
}

*, ::after, ::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: #cedbe6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  height: 100%;
  max-width: 500px;
  margin: 5px auto;

  font-size: 20px;
  line-height: 32px;
  color: #245e85;
  // text-transform: uppercase;
  // font-weight: bold;
  // font-family: 'The Bold Font';
  // text-align: center;

}

p {
  margin-top: 0;
}

span{
  .ti-container {
    font-family: 'Questrial', sans-serif;
    font-size: 20;
    text-transform: none;
    text-align: left;
  }

  .ti-container::before {
    display: none;
  }
}

button {
  font-family: 'The Bold Font';
  border: 2px solid #245e85;
  text-transform: uppercase;
  padding: 12px 16px 8px 16px;
  font-size: 22px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  color: #245e85;
  outline: none;
  text-align: center;
  display: inline-block;
  margin: 0 5px 5px 0;

  &:hover {
    background-color: transparent;
  }
}

.toggle-sound {
  background-color: transparent;
  border: none;
  float: left;
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 5px;
}
</style>
