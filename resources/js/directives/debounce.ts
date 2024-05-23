import { vue3Debounce } from "vue-debounce"

// const directive = {
//   beforeMount(el: any, binding: any, vnode: any) {
//     Object.keys(binding.value).forEach((name) => {
//       el.style.setProperty(name, binding.value[name]);
//     });
//   },
// };

export const vDebounce = vue3Debounce({ lock: true });
