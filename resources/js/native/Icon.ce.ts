import { defineCustomElement, getCurrentInstance, h } from 'vue';
import Icon from "./Icon.ce.vue";

customElements.define("web-icon", defineCustomElement(Icon));
