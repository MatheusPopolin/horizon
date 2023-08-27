<template>
  <div class="dashs fade-in bg-orange p-4">
    <div class="header mt-4 mb-5">
      <h1 class="header-title">Yellow Sollutions</h1>
      <h5>Meu board</h5>
    </div>

    <div class="bg-white rounded shadow p-3 mb-3" v-for="y in 3" :key="y">
      <h4>Categoria {{y}}</h4>

      <ul class="px-0 d-flex gap-3">
        <li v-for="i in 5" :key="i" class="card p-1 col">
          <h5 class="m-0">Metrica {{i}}</h5>
          <p class="m-0 text-center">{{i}}{{i}}{{i}}.{{i}}{{i}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
