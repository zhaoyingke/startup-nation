import Vue from 'vue'
import TypeIt from 'typeit'

Vue.directive('typeit', {
  inserted: (el, binding, vNode) => {
    const text = el.textContent
    el.textContent = ''
    vNode.typeIt = new TypeIt(el, {
      strings: text.match(/.*?[.?!](\s|$)/gu).map(d => d.trim()) || '',
      speed: 80,
      afterComplete: () => {
        if (binding.value) binding.value()
      }
    })
    vNode.typeIt.go()
  }
})
