import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultDateFormatter: (date: any) => date.toISOString(),
  defaultTimeFormatter: () => 'HH:mm'
})
