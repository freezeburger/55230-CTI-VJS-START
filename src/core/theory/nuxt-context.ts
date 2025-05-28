import { useContext } from 'unctx' // npm i unctx

const isNuxt = () => !!useContext('nuxt-app')


// Pseudo
const getLinkComponent = () => isNuxt() ? NuxtLink : RouterLink
