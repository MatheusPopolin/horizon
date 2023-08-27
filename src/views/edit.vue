<template>
  <div class="dashs fade-in bg-orange p-4">
    <div class="header mt-4">
      <div class="header-body">
        <div class="row align-items-center">
          <div class="col">
            <!-- Title -->
            <h1 class="header-title">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Empresa teste</font
                ></font
              >
            </h1>
          </div>
        </div>
        <!-- / .row -->
        <div class="row align-items-center">
          <div class="col">
            <!-- Nav -->
            <ul class="nav nav-tabs nav-overflow header-tabs">
              <li class="nav-item">
                <a class="nav-link active"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Geral
                    </font></font
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Dados financeiros
                    </font></font
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Contatos
                    </font></font
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Segurança
                    </font></font
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Notificações
                    </font></font
                  ></a
                >
              </li>
            </ul>
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
.nav{ 
  border: none;
}

.nav-link{
  border: none;
  cursor: pointer;
}
</style>
