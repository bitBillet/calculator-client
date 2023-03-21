<template>
  <div class="drawer-form">
    <h3>Начать работу с данными по умолчанию</h3>
    <div class="error" v-if="true === error">Неверно заданные значения</div>
    <p>Здесь вы можете создать и сохранить условия по умолчанию. Затем вы можете начать конфигурацию нажав на картинку.</p>
    <form @submit.prevent="submit">
      <label for="cabinet-width">
        <span>Ширина шкафа (мм): мин.:  200 макс.:  1200</span>
        <input type="text" id="cabinet-width" v-model="cabinetWidth">
      </label>
      <br>
      <label for="cabinet-height">
        <span>Высота боковины, мм:</span>
        <select id="cabinet-height" v-model="sidewallHeight">
          <option value="94">94</option>
          <option value="126">126</option>
        </select>
      </label>
      <br>
      <label for="sidewall-body-width">
        <span>Толщина боковины корпуса (мм):</span>
        <select id="sidewall-body-width" v-model="sidewallBodyWidth">
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="19">19</option>
        </select>
      </label>
      <br>
      <label for="nominal-length">
        <span>Номинальная длина, м:</span>
        <select id="nominal-length" v-model="nominalLength">
          <option value="270">270</option>
          <option value="300">300</option>
          <option value="350">350</option>
          <option value="400">400</option>
          <option value="450">450</option>
          <option value="500">500</option>
        </select>
      </label>
      <br>
      <label for="damping-function">
        <span>Функция демпфирования:</span>
        <select id="damping-function" v-model="dampingFunction">
          <option value="silent-system">Тихий ход</option>
          <option value="push-to-open">Открытие при нажатии</option>
        </select>
      </label>
      <br>
      <label for="material">
        <span>Материал</span>
        <select id="material" v-model="material">
          <option value="steel">Сталь</option>
          <option value="tree">Дерево</option>
        </select>
      </label>
      <br>
      <label for="connection">
        <span>Вид соединителя передней панели:</span>
        <select id="connection" v-model="connectionType">
          <option value="screw">Прикручивание</option>
          <option value="press">Прессовка</option>
        </select>
      </label>
      <br>
      <button type="submit">Продолжить</button>
    </form>
  </div>
</template>

<script>
import { CREATE } from "../../actions";
import axios from 'axios'

export default {
  name: "DrawerForm",
  data: () => {
    return {
      cabinetWidth: null,
      sidewallHeight: null,
      sidewallBodyWidth: null,
      nominalLength: null,
      dampingFunction: null,
      material: null,
      connectionType: null,
      error: false,
    }
  },
  methods: {
    submit: function () {
      const data = {
        cabinetWidth: this.cabinetWidth,
        sidewallHeight: this.sidewallHeight,
        sidewallBodyWidth: this.sidewallBodyWidth,
        nominalLength: this.nominalLength,
        dampingFunction: this.dampingFunction,
        material: this.material,
        connectionType: this.connectionType,
        color: this.$route.params.color
      }
      axios.post(CREATE, data)
      .then((resp) => {
        if (true === resp.data.error) {
          this.error = true;
        } else {
          this.$router.push({
            name: 'products', params: {content: resp.data.content, id: resp.data.id}
            })
        }
      })
    },
  }
}
</script>

<style scoped>
.error {
  color: red;
  padding: 0;
  margin: 0;
}
</style>