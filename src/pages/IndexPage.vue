<template>
  <q-page class="flex flex-center center-items">
    <div class="flex-container">
      <q-select v-model="selectedValue" :options="options" label="Select a city" outlined filled clearable
        @update:model-value="handleSelection">
      </q-select>
    </div>
    <div class="flex-container">
      <div class="flex-item text-primary" v-if="data">
        <b>Wheather: </b> {{ data['weather'][0]['description'] }}
      </div>
      <div class="flex-item text-primary" v-if="data">
        <b>Temprature: </b> {{ data['main']['temp'] }}°C
      </div>
      <div class="flex-item text-primary" v-if="data">
        <b>Min Temprature: </b> {{ data['main']['temp_min'] }}°C
      </div>
      <div class="flex-item text-primary" v-if="data">
        <b>Max Temprature: </b> {{ data['main']['temp_max'] }}°C
      </div>
      <div class="flex-item text-primary" v-if="data">
        <b>Wind speed: </b> {{ data['wind']['speed'] }}
      </div>
    </div>
  </q-page>
</template>


<script>
import { getWeather } from 'src/api/index';
export default {
  data() {
    return {
      selectedValue: { label: '', value: '' },
      options: [
        { label: 'London', value: 'London' },
        { label: 'Kyiv', value: 'Kyiv' },
        { label: 'Dnipro', value: 'Dnipro' }
      ],
      data: null
    };
  },
  methods: {
    async handleSelection() {
      if (this.selectedValue) {
        await this.fetchAPIData();
      } else {
        this.data = 'Selected value is null or undefined';
      }
    },
    async fetchAPIData() {
      try {
        const result = await getWeather(this.selectedValue.value);
        this.data = result;
      } catch (error) {
        this.data = 'Error fetching API data:';
      }
    }
  }
};
</script>
