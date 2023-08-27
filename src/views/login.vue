<template>
  <div class="row align-items-center conteudo p-5 fade-in">
    <div class="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2">
      <!-- Image -->
      <div class="text-center">
        <img
          src="../assets/img/illustration.svg"
          alt="Ilustração"
          class="img-fluid"
        />
        <!-- <img src="../assets/img/illustration.svg" alt="..." class="img-fluid" /> -->
      </div>
    </div>

    <div
      class="col-12 col-md-5 col-xl-4 order-md-1 shadow pt-5 pb-2 px-4 rounded"
    >
      <!-- Heading -->
      <img src="../assets/img/horizon-logo.png" class="pb-4" />

      <!-- Subheading -->
      <p class="text-muted text-center pb-3">Acesse aos seus paineis.</p>

      <!-- Form -->
      <form>
        <!-- Email address -->
        <div class="form-group pb-4">
          <!-- Label -->
          <label class="form-label">Endereço de email </label>

          <!-- Input -->
          <input
            type="email"
            class="form-control"
            placeholder="nome@endereço.com"
          />
        </div>

        <!-- Password -->
        <div class="form-group pb-4">
          <div class="row">
            <div class="col">
              <!-- Label -->
              <label class="form-label">Senha </label>
            </div>
            <div class="col-auto">
              <!-- Help text -->
              <a class="form-text small text-muted pointer"
                >Esqueceu sua senha?
              </a>
            </div>
          </div>
          <!-- / .row -->

          <!-- Input group -->
          <div class="input-group input-group-merge">
            <!-- Input -->
            <input class="form-control" type="password" placeholder="Senha" />
          </div>
        </div>

        <!-- Submit -->
        <button @click="goDash" class="btn btn-lg w-100 btn-primary mb-4">
          Entrar
        </button>

        <!-- Link -->
        <div class="text-center mb-4">
          <small class="text-muted text-center"
            >Não tem uma conta ainda?
            <a class="pointer" @click="goPricing"
              >Conheça nossos planos
            </a></small
          >
        </div>
        <p class="text-center yst">Feito com 💛 por Yellow Sollutions.</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goDash() {
      this.$router.push("/dashboard");
    },
    goPricing() {
      this.$router.push("/planos");
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
