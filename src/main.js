import { createApp } from 'vue';

/**
 * import fortawesome library and register as global compponent
 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {createPinia} from "pinia";

import '@/index.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

library.add(faSearch);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
