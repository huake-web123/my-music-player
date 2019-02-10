import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const reg = require.context('./svg', false, /\.svg$/)
requireAll(reg)
