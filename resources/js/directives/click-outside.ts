const directive = {
  beforeMount(el: any, binding: any, vnode: any) {
    el.clickOutsideEvent = function (event: any) {
      if (
        !(el === event.target || el.contains(event.target)) &&
        binding.value
      ) {
        binding.value(event, el);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
    document.addEventListener("touchstart", el.clickOutsideEvent);
  },
  unmounted(el: any) {
    document.removeEventListener("click", el.clickOutsideEvent);
    document.removeEventListener("touchstart", el.clickOutsideEvent);
  },
};

export const vClickOutside = directive;
