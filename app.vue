<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
body {
    @apply bg-white text-gray-800 antialiased transition-colors duration-300;
}
</style>
