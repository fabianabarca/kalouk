import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "uno.css";
import Citation from "./components/Citation.vue";
// @ts-ignore
import Mermaid from "./components/Mermaid.vue";
import BarChart from "./components/BarChart.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Citation", Citation);
    app.component("Mermaid", Mermaid);
    app.component("BarChart", BarChart);
  },
};
