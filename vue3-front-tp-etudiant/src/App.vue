<template>
  <div id="app">
    <nav class="navbar navbar-expand ">
      <router-link to="/"  class="navbar-brand bg-white"><img src="https://www.imt.fr/wp-content/uploads/2021/08/logo-imtne.png" alt="Home"></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/personnes/" class="nav-link">Personnes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ajouter-personne" class="nav-link">Ajouter</router-link>
        </li>
        <!--
    <li class="nav-item">
       <a class="pull-left" href="/"><img src="https://www.imt.fr/wp-content/uploads/2021/08/logo-imtne.png" alt="Home"></a>
    </li>
    -->
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
