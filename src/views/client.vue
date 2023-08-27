<template>
  <div class="dashs fade-in bg-orange p-4">
    <div class="header mt-4 mb-5">
      <h1 class="header-title">Cliente Yellow</h1>
    </div>

    <!-- Nav -->
    <ul class="nav nav-tabs">
      <li><a class="nav-link active" data-bs-toggle="tab" href="#marketing">Marketing</a></li>
      <li v-for="item in teams" :key="item">
        <a class="nav-link" data-bs-toggle="tab" :href="'#' + item">{{ item }}</a>
      </li>
    </ul>

    <div class="tab-content">
      <div
        id="marketing"
        class="bg-white rounded shadow p-3 mb-3 tab-pane fade in active show"
      >
        <h4>Marketing</h4>
        <ul class="px-0 d-flex gap-3">
          <li v-for="i in 5" :key="i" class="card p-1 col">
            <h5 class="m-0">Metrica {{ i }}</h5>
            <p class="m-0 text-center">{{ i }}{{ i }}{{ i }}.{{ i }}{{ i }}</p>
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade in"
        v-for="(item, i) in teams"
        :key="i"
        :id="item"
      >
        <div class="bg-white rounded shadow p-3 mb-3" v-for="i in 3" :key="i">
          <h4>{{ item }}</h4>

          <ul class="px-0 d-flex gap-3">
            <li v-for="i in 5" :key="i" class="card p-1 col">
              <h5 class="m-0">Metrica {{ i }}</h5>
              <p class="m-0 text-center">
                {{ i }}{{ i }}{{ i }}.{{ i }}{{ i }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: ["Produto", "Parcerias", "Atendimento", "Comercial"],
    };
  },
};
</script>

<style scoped>
.nav{ 
  border: none;
}

.nav-link{
  border: none;
  cursor: pointer;
}
</style>