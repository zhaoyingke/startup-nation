<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'The Bold Font';
  src: url('./assets/fonts/TheBoldFont.woff2') format('woff2'),
      url('./assets/fonts/TheBoldFont.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
html, body {
  background-color: #cedbe6;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  max-width: 800px;
  margin: auto;

  font-size: 26px;
  line-height: 32px;
  color: #245e85;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'The Bold Font';
}
button {
  font-family: 'The Bold Font';
  border: 2px solid #245e85;
  text-transform: uppercase;
  padding: 12px 16px 8px 16px;
  font-size: 26px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  color: #245e85;
  outline: none;

  &:hover {
    background-color: transparent;
  }
}
</style>
