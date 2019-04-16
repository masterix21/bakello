<template>
    <div class="flex h-screen">
        <div :class="['hidden md:block md:w-48', sidebarClasses]">
            <div class="h-16 bg-black flex items-center justify-center text-grey shadow border-b-4 border-grey-darker">
                <slot name="header-logo">Logo</slot>
            </div>

            <slot name="menu-left">
              <ul class="list-reset text-grey-dark pt-5 pb-5 leading-loose">
                  <li class="text-sm">
                      <span class="font-bold text-white uppercase border-b border-grey-darker pt-3 pb-3 pl-5 pr-5 flex">Anagrafiche</span>
                      <ul class="list-reset text-sm text-grey bg-grey-darker border-b border-grey-dark pt-2 pb-2 pl-5 pr-5 hidden">
                          <li><i class="fas fa-users text-xs mr-2"></i> Clienti</li>
                          <li><i class="fas fa-tags text-xs mr-2"></i> Prodotti</li>
                      </ul>
                  </li>
                  <li class="text-sm">
                      <span class="font-bold text-white uppercase bg-black border-b border-grey-darker pt-3 pb-3 pl-5 pr-5 flex">Vendita</span>

                      <ul class="list-reset text-sm text-grey bg-grey-darker border-b border-grey-dark pt-2 pb-2 pl-5 pr-5">
                          <li><i class="fas fa-fire text-xs mr-2"></i> Preventivi</li>
                          <li><i class="fas fa-piggy-bank text-xs mr-2"></i> Ordini</li>
                      </ul>
                  </li>
                  <li class="text-sm">
                      <span class="font-bold text-white uppercase border-b border-grey-darker pt-3 pb-3 pl-5 pr-5 flex">Contabilit&agrave;</span>

                      <ul class="list-reset text-sm text-grey bg-grey-darker border-b border-grey-dark pt-2 pb-2 pl-5 pr-5 hidden">
                          <li><i class="fas fa-euro-sign text-xs mr-2"></i> Fatture</li>
                          <li><i class="fab fa-creative-commons-nc-eu text-xs mr-2"></i> Note credito</li>
                      </ul>
                  </li>
                  <li class="text-sm">
                      <span class="font-bold text-white uppercase border-b border-grey-darker pt-3 pb-3 pl-5 pr-5 flex">Magazzino</span>

                      <ul class="list-reset text-sm text-grey bg-grey-darker border-b border-grey-dark pt-2 pb-2 pl-5 pr-5 hidden">
                          <li><i class="fas fa-people-carry text-xs mr-2"></i> DDT</li>
                          <li><i class="fas fa-warehouse text-xs mr-2"></i> Giacenze</li>
                      </ul>
                  </li>
              </ul>
            </slot>
        </div>
        <div class="flex-1 bg-grey-light">
            <div class="h-16 bg-white flex items-center shadow">
                <input type="text" placeholder="Ricerca..." class="flex-1 h-full px-4 border-b-4 focus:outline-none focus:bg-white focus:border-purple text-lg focus:text-purple" />

                <slot name="header-menu">
                  <a class="h-full border-b-4 border-grey-light px-8 flex items-center justify-center cursor-pointer">
                      <img src="https://lorempixel.com/36/36/people" class="border-2 rounded-full align-middle mr-2" />
                      <p class="text-sm text-grey-dark">Luca Longo</p>
                      <i class="fas fa-angle-down text-xs ml-2 mt-1 text-grey-dark"></i>
                  </a>
                </slot>
            </div>

            <div class="container p-8">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'bklo-layouts-client',
  props: {
    sidebarClasses: {
      type: Array,
      default: () => (['bg-grey-darkest'])
    }
  }
}
</script>



<style scoped>

</style>
