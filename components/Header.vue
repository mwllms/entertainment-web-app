<template>
  <header class="flex h-14 items-center justify-between bg-blue-semi-dark px-4 md:h-[72px] md:rounded-[10px]">
    <div>
      <img src="~/assets/img/logo.svg" alt="Entertainment Web App" />
    </div>
    <nav>
      <ul id="main-menu" class="flex h-full items-center space-x-6 md:space-x-8">
        <li>
          <nuxt-link :to="{ name: 'index' }" class="text-blue-grey">
            <IconNavHome />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'movies' }" class="text-blue-grey">
            <IconNavMovies />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'tv-series' }" class="text-blue-grey">
            <IconNavTvSeries />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'bookmarked' }" class="text-blue-grey">
            <IconNavBookmark />
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <button class="h-6 w-6 overflow-hidden rounded-full border border-white md:h-8 md:w-8">
      <img src="/images/image-avatar.png" alt="Peter Griffin" />
    </button>
  </header>
</template>
