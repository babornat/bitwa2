<template>
  <nav class="navbar bg-light navbar-expand-lg navbar-light " id="mainNav">
    <div class="container px-4 px-lg-5 offset-lg-0">

      <div class="collapse navbar-collapse" id="navbarResponsive" >
        <ul class="navbar-nav mr-auto  py-lg-0 ">
          <li class="nav-item ">
            <router-link class="nav-link px-lg-3 py-3 py-lg-4 " to="/">

              Domů
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/nabidka">
              Nabídka
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/kontakt">
              Kontakty
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/rozvoz">
              Rozvoz
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/galerie">
              Galerie
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>
