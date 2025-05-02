<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-responsive
      class="fill-height d-flex align-center justify-center"
      max-width="900"
    >
      <div class="text-center">
        <h4 class="text-body-2 mb-n1">Bem-vindo</h4>

        <picture>
          <source
            media="(max-width: 511px)"
            sizes="(max-width: 511px) 60vw, 200px"
            srcset="@/assets/ceca_logo.svg 200w"
          />
          <source
            media="(min-width: 512px)"
            sizes="(max-width: 512px) 60vw, 200px"
            srcset="@/assets/ceca_logo.svg 512w"
          />
          <img
            class="mb-4 ma-auto d-block"
            sizes="(max-width: 512px) 40vw, 200px"
            srcset="@/assets/ceca_logo.svg 200w, @/assets/ceca_logo.svg 512w"
            src="@/assets/ceca_logo.svg"
            alt="e-Cattle logo"
          />
        </picture>

        <h3 class="text-body-2 mb-n1">Remote Application</h3>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup></script>
