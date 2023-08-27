<template>
  <div class="dashs fade-in bg-orange p-4">
    <div class="header mt-4 mb-5">
      <h1 class="header-title">Integrações disponíveis</h1>
    </div>

    <ul class="list-group list-group-lg list-group-flush list rounded shadow">
      <li v-for="i in 6" :key="i" class="list-group-item">
        <div class="row align-items-center">
          <div class="col-auto">
            <!-- Avatar -->
            <a href="#!" class="avatar avatar-lg">
              <img src="../assets/img/horizon-logo.png" />
            </a>
          </div>
          <div class="col ms-n2">
            <!-- Title -->
            <h4 class="mb-1 name">
              <a href="#!"
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Integração {{ i }}</font
                  ></font
                ></a
              >
            </h4>

            <!-- Text -->
            <p class="card-text small text-muted mb-1">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">
                  Empresa {{ i }} CORP SYNC LTDA MEI.
                </font></font
              >
            </p>
          </div>
          <div class="col-auto">
            <!-- Button -->
            <a v-if="clicked.includes(i)" class="btn btn-sm btn-white d-none d-md-inline-block">
              Integrado
            </a>
            <a v-else @click="clicked.push(i)" class="btn btn-sm btn-white d-none d-md-inline-block">
              Habilitar
            </a>
          </div>
        </div>
        <!-- / .row -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      clicked: [],
    }
  }
};
</script>

<style scoped>
img {
  height: 30px;
}
</style>
