<template>
  <aside v-if="show" class="pt-5 shadow">
    <img
      @click="goDash"
      src="./assets/img/horizon-logo.png"
      alt="3C Plus"
      class="logo px-2 pb-5"
    />
    <div class="d-flex flex-column justify-content-between h-100">
      <nav>
        <div v-for="(item, index) in menu" :key="index">
          <RouterLink
            :to="'/' + item.path"
            :class="{
              'menu-link ps-3': true,
              'menu-active': $route.path === '/' + item.path,
            }"
          >
            <span>{{ item.label }}</span>
          </RouterLink>
          <hr v-if="index != menu.length -1" class="m-0"/>
        </div>
      </nav>
      <div class="px-2">
        <button @click="goHome" class="btn-primary rounded w-100 mb-2">
          Sair
        </button>
        <p class="text-center yst">Feito com 💛 por Yellow Sollutions.</p>
      </div>
    </div>
  </aside>
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  components: {
    RouterView,
    RouterLink,
  },

  data() {
    return {
      menu: [
        {
          path: "dashboard",
          label: "Dashboard",
        },
        {
          path: "clientes",
          label: "Clientes",
        },
        {
          path: "configurar",
          label: "Configurações",
        },
      ],
    };
  },

  methods: {
    goDash() {
      this.$router.push("/dashboard");
    },
    goHome() {
      this.$router.push("/");
    },
  },

  computed: {
    show() {
      if (
        this.$route.path == "/" ||
        this.$route.path == "/planos" ||
        this.$route.path == "/login"
      )
        return false;
      return true;
    },
  },
};
</script>

<style scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  z-index: 2;
  background-color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
}

.logo {
  cursor: pointer;
}

aside nav {
  display: flex;
  flex-direction: column;
}

.menu-link {
  height: 30px;
  width: 100%;

  font-family: "Inter";

  display: flex;
  align-items: center;
  transition: 0.5s;
}

.menu-link:hover {
  background-color: var(--color-grey-100);
  transition: 0.5s;
}

.menu-link > img {
  height: 20px;
}

.menu-active {
  background-image: url("./assets/img/active-indicator.svg");
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
