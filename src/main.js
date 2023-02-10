import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTwitter,
  faFacebookSquare,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faTwitter, faFacebookSquare, faPinterest, faInstagram);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
