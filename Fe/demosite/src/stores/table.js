import { defineStore } from "pinia";
import { ref } from "vue"

const tableStore = defineStore("table", () => {
    let isIntro = ref(false);
    const controlIntro = () => {
        isIntro.value = !isIntro.value;
        console.log(isIntro.value);
    }
  return {
    isIntro,
    controlIntro,
  }
})
export default tableStore