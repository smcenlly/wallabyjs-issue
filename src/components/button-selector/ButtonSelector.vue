<template>
  <div class="row buttonSelector-container">
    <q-btn
      v-for="(itemText, index) in values"
      :key="index"
      class="col copy-button"
      text-color="white"
      :class="{ buttonSelected: isSelected === index }"
      outline
      no-caps
      @click="userInput(index)"
    >
      {{itemText}}
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonSelector',
  props: ['values', 'selected'],
  methods: {
    userInput (index) {
      this.$emit('input', index);
      this.isSelected = index;
    }
  },
  data () {
    return {
      isSelected: this.selected
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~variables'
  .buttonSelected
    background: $secondary !important

  .buttonSelector-container
    margin-top: 12px
    width:100%
</style>
