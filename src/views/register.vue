<template>
<div class="dashs fade-in bg-orange p-4">
    <div class="header mt-4 mb-5">
      <div class="header-body">
        <div class="row align-items-center">
          <div class="col">
            <!-- Title -->
            <h1 class="header-title">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Empresa teste</font></font
              >
            </h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Form -->
    <form class="bg-white rounded shadow p-3">
      <div class="row">
        <div class="col-12 col-md-6 mb-2">
          <!-- First name -->
          <div class="form-group">
            <!-- Label -->
            <label class="form-label"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">
                  Empresa/cliente
                </font></font
              ></label
            >

            <!-- Input -->
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <!-- Last name -->
          <div class="form-group">
            <!-- Label -->
            <label class="form-label"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"> Ramo </font></font
              ></label
            >

            <!-- Input -->
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <!-- Phone -->
          <div class="form-group">
            <!-- Label -->
            <label class="form-label"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"> Telefone </font></font
              ></label
            >

            <!-- Input -->
            <input
              type="text"
              class="form-control mb-3"
              placeholder="(___)___-____"
              data-inputmask="'mask': '(999)999-9999'"
              inputmode="text"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label class="form-label"
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">
                  Endereço de email
                </font></font
              ></label
            >

            <!-- Input -->
            <input type="email" class="form-control mb-3" />
          </div>
        </div>
      </div>
      <!-- / .row -->

      <!-- Button -->
      <button @click="goClients" class="btn btn-primary">
        <font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">
            Salvar alterações
          </font></font
        >
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    goClients() {
      this.$router.push("/clientes");
    },
  },
};
</script>

<style scoped>
.conteudo {
  height: 100vh;
  width: 100vw - 240px;
  margin-left: 240px;
}
</style>
