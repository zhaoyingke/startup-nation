import Vue from 'vue'
import TypeIt from 'typeit'
import Mousetrap from 'mousetrap'
import once from 'lodash/once'

Vue.directive('typeit', {
  inserted: (el, binding, vNode) => {
    const strings = el.textContent.match(/.*?[.?!](\s|$)/gu).map(d => `<p>${d.trim()}</p>`).join('')
    if (strings) {
      el.textContent = ''
      vNode.typeIt = new TypeIt(el, {
        strings,
        speed: 20,
        html: true,
        cursor: false,
        afterComplete: () => {
          if (binding.value) binding.value()
        }
      })
      vNode.typeIt.go()
    } else if (binding.value) {
      binding.value()
    }

    const complete = () => {
      if (vNode.typeIt.is('started')) {
        vNode.typeIt.reset()
        el.innerHTML = strings
        if (binding.value) {
          binding.value()
        }
        // return false to prevent default browser behavior
        // and stop event from bubbling
        return false
      }
    }

    Mousetrap(vNode.parent).bind(['space', 'enter', 'esc'], once(complete))
  }
})
