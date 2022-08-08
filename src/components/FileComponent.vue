<template>
  <div>
    <v-icon color="charger" class="mr-3">mdi-file-document-outline</v-icon
    ><v-btn text @click="downloadFile()"
      >Letölthető dokumentum közös képviselők számára</v-btn
    >
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      //
    };
  },
  async mounted() {
    this.downloadFile();
  },
  methods: {
    downloadFile() {
      axios({
        url: 'http://localhost:8080/tajekoztatas-kozos-kepviseloknek.pdf', //your url
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
</script>
