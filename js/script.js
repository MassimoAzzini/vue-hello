const { createApp } = Vue;

createApp({
  data(){
    return {
      firstName: 'Massimo',
      lastName: 'Azzini',
      textHtml: ''
    }
  },

  method: {
    newTextHtml(){
      this.textHtml = `<h1>Mi chiamo: ${this.firstName} ${this.lastName}</h1>`;
    }
  },

  mounted(){
    this.newTextHtml();
  }



}).mount('#app')