<template>
  <div class="conteudo bg-orange fade-in">
    <div class="main-content">
      <!-- HEADER -->
      <div class="bg-dark bg-ellipses pt-4 mb-4">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="px-5">
              <!-- Title -->
              <h1 class="display-5 text-center text-primary">Planos e preços</h1>

              <!-- Text -->
              <p class="lead text-center text-white">
                Temos planos e preços que se adaptam perfeitamente ao seu
                negócio. Faça do site do seu cliente um sucesso com nossos
                produtos.
              </p>
            </div>
          </div>
          <!-- / .row -->
        </div>
      </div>

      <!-- CONTENT -->
      <div class="container-fluid px-5">
        <div class="row px-5">
          <div class="col-12 col-lg-4">
            <!-- Card -->
            <div class="card">
              <div class="card-body">
                <!-- Title -->
                <h6 class="text-uppercase text-center text-muted my-4">
                  Plano grátis
                </h6>

                <!-- Price -->
                <div class="row g-0 align-items-center justify-content-center">
                  <div class="col-auto">
                    <div class="h2 mb-0">$</div>
                  </div>
                  <div class="col-auto">
                    <div class="display-2 mb-0">19
                      
                    </div>
                  </div>
                </div>
                <!-- / .row -->

                <!-- Period -->
                <div class="h6 text-uppercase text-center text-muted mb-5">
                  / mês
                </div>

                <!-- Features -->
                <div class="mb-3">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Atividade ilimitada</font
                          ></font
                        ></small
                      >
                      <i class="fe fe-check-circle text-success"></i>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Mensagens diretas</font
                          ></font
                        ></small
                      >
                      <i class="fe fe-check-circle text-success"></i>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Membros</font
                          ></font
                        ></small
                      >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >10 membros</font
                          ></font
                        ></small
                      >
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Administradores</font
                          ></font
                        ></small
                      >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Sem acesso</font
                          ></font
                        ></small
                      >
                    </li>
                  </ul>
                </div>

                <!-- Button -->
                <a @click="goLogin" class="btn w-100 btn-light"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Comece com o básico
                    </font></font
                  ></a
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <!-- Card -->
            <div class="card">
              <div class="card-body">
                <!-- Title -->
                <h6 class="text-uppercase text-center text-muted my-4">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Plano padrão
                    </font></font
                  >
                </h6>

                <!-- Price -->
                <div class="row g-0 align-items-center justify-content-center">
                  <div class="col-auto">
                    <div class="h2 mb-0">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">$</font></font
                      >
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="display-2 mb-0">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">29</font></font
                      >
                    </div>
                  </div>
                </div>
                <!-- / .row -->

                <!-- Period -->
                <div class="h6 text-uppercase text-center text-muted mb-5">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"> / mês </font></font
                  >
                </div>

                <!-- Features -->
                <div class="mb-3">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Atividade ilimitada</font
                          ></font
                        ></small
                      >
                      <i class="fe fe-check-circle text-success"></i>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Mensagens diretas</font
                          ></font
                        ></small
                      >
                      <i class="fe fe-check-circle text-success"></i>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Membros</font
                          ></font
                        ></small
                      >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >50 membros</font
                          ></font
                        ></small
                      >
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Administradores</font
                          ></font
                        ></small
                      >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >5 administradores</font
                          ></font
                        ></small
                      >
                    </li>
                  </ul>
                </div>

                <!-- Button -->
                <a @click="goLogin" class="btn w-100 btn-primary"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Comece com padrão
                    </font></font
                  ></a
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <!-- Card -->
            <div class="card">
              <div class="card-body">
                <!-- Title -->
                <h6 class="text-uppercase text-center text-muted my-4">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Plano empresarial
                    </font></font
                  >
                </h6>

                <!-- Price -->
                <div class="row g-0 align-items-center justify-content-center">
                  <div class="col-auto">
                    <div class="h2 mb-0">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">$</font></font
                      >
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="display-2 mb-0">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">99</font></font
                      >
                    </div>
                  </div>
                </div>
                <!-- / .row -->

                <!-- Period -->
                <div class="h6 text-uppercase text-center text-muted mb-5">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"> / mês </font></font
                  >
                </div>

                <!-- Features -->
                <div class="mb-3">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Atividade ilimitada</font
                          ></font
                        ></small
                      >
                      <i class="fe fe-check-circle text-success"></i>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Mensagens diretas</font
                          ></font
                        ></small
                      >
                      <i class="fe fe-check-circle text-success"></i>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Membros</font
                          ></font
                        ></small
                      >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Ilimitado</font
                          ></font
                        ></small
                      >
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center justify-content-between px-0"
                    >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Administradores</font
                          ></font
                        ></small
                      >
                      <small
                        ><font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Ilimitado</font
                          ></font
                        ></small
                      >
                    </li>
                  </ul>
                </div>

                <!-- Button -->
                <a @click="goLogin" class="btn w-100 btn-light"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Comece com Empresa
                    </font></font
                  ></a
                >
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 text-center yst">Feito com 💛 por Yellow Sollutions.</p>
        <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.conteudo {
  height: 100vh;
  width: 100vw;
}


</style>
