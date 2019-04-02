import Vue from 'vue'
import TypeIt from 'typeit'

Vue.directive('typeit', {
  inserted: (el, binding, vNode) => {
    const text = el.textContent.match(/.*?[.?!](\s|$)/gu)
    if (text) {
      el.textContent = ''
      vNode.typeIt = new TypeIt(el, {
        strings: text.map(d => d.trim()) || '',
        speed: 40,
        afterComplete: () => {
          if (binding.value) binding.value()
        }
      })
      vNode.typeIt.go()
    } else if (binding.value) {
      binding.value()
    }
    // if (binding.value) binding.value()
  }
})
