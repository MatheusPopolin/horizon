<template>
  <div class="dashs fade-in bg-orange p-4">
    <div class="header mt-4 mb-5">
      <div class="row align-items-center">
        <div class="col">
          <h1 class="header-title text-truncate">Clientes</h1>
        </div>
        <div class="col-auto">
          <a @click="goRegister" class="btn btn-primary ms-2">
            Adicionar cliente
          </a>
        </div>
      </div>
    </div>

    <div class="table-responsive bg-white rounded shadow">
      <table class="table table-sm table-hover table-nowrap card-table">
        <thead>
          <tr>
            <th>
              <a class="list-sort text-muted" data-sort="item-name">Nome</a>
            </th>
            <th>
              <a class="list-sort text-muted" data-sort="item-industry">Área</a>
            </th>
            <th>
              <a class="list-sort text-muted" data-sort="item-location"
                >Endereço</a
              >
            </th>
            <th>
              <a class="list-sort text-muted" data-sort="item-owner"
                >Representante</a
              >
            </th>
            <th colspan="2">
              <a class="list-sort text-muted" data-sort="item-created"
                >Cadastrado em:</a
              >
            </th>
          </tr>
        </thead>
        <tbody class="list fs-base">
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Launchday</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Web design</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">Los Angeles, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Dianna Smiley</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-01-14"
                >Jan 14, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset"
                >Medium Corporation</a
              >
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Publishing</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">San Francisco, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Ab Hadley</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-03-22"
                >Mar 22, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Lyft</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Transportation</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">San Francisco, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Adolfo Hess</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-04-01"
                >Apr 01, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">PayPal</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Finance</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">San Jose, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Daniela Dewitt</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-05-09"
                >May 09, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Dropbox Inc.</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">File hosting</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">San Francisco, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Miyah Myles</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-06-16"
                >Jun 16, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Squarespace</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Hosting</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">New York City</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Ryu Duke</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-08-22"
                >Aug 22, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Github</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Hosting</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">Redmond, WA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Glen Rouse</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-03-05"
                >Mar 05, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Slack</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Messaging</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">San Francisco, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Miyah Myles</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-04-30"
                >Apr 30, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset">Launchday</a>
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Web design</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">Los Angeles, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Dianna Smiley</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-01-14"
                >Jan 14, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a @click="goClient" class="item-name text-reset"
                >Medium Corporation</a
              >
            </td>
            <td>
              <!-- Text -->
              <span class="item-industry">Publishing</span>
            </td>
            <td>
              <!-- Text -->
              <span class="item-location">San Francisco, CA</span>
            </td>
            <td class="item-phone">
              <a class="item-owner text-reset">Ab Hadley</a>
            </td>
            <td>
              <!-- Badge -->
              <time class="item-created" datetime="2020-03-22"
                >Mar 22, 2020</time
              >
            </td>
            <td class="text-end">
              <!-- Dropdown -->
              <div class="dropdown">
                <a
                  class="dropdown-ellipses dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="goEdit">Editar</a>
                  <a class="dropdown-item">Excluir</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goEdit() {
      this.$router.push("/editar-cliente");
    },
    goRegister() {
      this.$router.push("/cadastrar-cliente");
    },
    goClient() {
      this.$router.push("/cliente");
    },
  },
};
</script>

<style scoped>
tr {
  cursor: pointer;
}
</style>
