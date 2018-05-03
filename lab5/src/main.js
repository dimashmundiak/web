import Vue from 'vue'
import Rating from './components/Rating'
new Vue({
  el: '#app',
  template: '<Rating :grade="3" :maxStars="5" :hasCounter="true"/>',
  components: { Rating }
})