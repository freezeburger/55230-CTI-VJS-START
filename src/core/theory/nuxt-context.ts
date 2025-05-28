import { useContext } from 'unctx' // npm i unctx

const isNuxt = () => !!useContext('nuxt-app')

const getLinkComponent = () => isNuxt() ? NuxtLink : RouterLink
