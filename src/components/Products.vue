<template>
  <div class="table">
    <h1>Список сгенерированных товаров</h1>
    <table>
      <tr>
        <th>Кол-во</th>
        <th>Описание</th>
      </tr>
      <tr v-for="item in $route.params.content" v-bind:key="item.description">
        <td>{{ item.count }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </table>
    <button @click="getPdf">Создать PDF</button>
    <button @click="getXlsx">Создать XLSX</button>
  </div>
</template>

<script>
import { PDF, XLSX } from "../../actions"
import axios from 'axios'
import download from 'downloadjs'

export default {
  name: "Products",
  methods: {
    getPdf: function () {
      axios.get(PDF, {
            responseType: 'blob',
            params: {id: this.$route.params.id}
          })
          .then((response) => {
            const content = response.headers['content-type'];
            download(response.data, 'test.pdf', content)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    getXlsx: function () {
      axios.get(XLSX, {
        responseType: 'blob',
            params: {id: this.$route.params.id}
      })
      .then((response) => {
        console.log(response)
        const content = response.headers['content-type'];
        download(response.data, 'test.xlsx', content)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
}
td {
  border: 1px solid black;
}
button {
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px;
}
</style>