<template>
  <Header />
  <div id="nav">
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

:root {
  --main-color: #FF3333;
  --second-color: #fafafa;
  --text-color: #222;
}

*{
  margin: 0;
  padding: 0;
  font-family: Oswald, sans-serif;
}
body{
  background: var(--second-color);
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: var(--main-color);
}
.link {
  transition: 0.2s;
}
.link:hover {
  color: var(--main-color);
  text-shadow: 0 0 8px var(--main-color);
  cursor: pointer;
}

</style>
