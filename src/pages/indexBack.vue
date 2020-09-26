<template>
  <div>
    <reg-productList :test="value" @test.once="onTest"  @test2.once="onTest"/>
    <reg-product :test="value">
      <div>
        {{value2}}
      </div>
    </reg-product>
    <input-tag />
    <button @click="changeValue">Test</button>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { IRequestStatement } from '../../_core/store/http';

@Component({
  components: {},
})
export default class Index extends Vue {

  value = 'none';
  value2 = 'none';

  changeValue(){
    console.log(window.scrollY);
    this.value = Math.floor(Math.random() * 1000000) + '' ;
    this.value2 = Math.floor(Math.random() * 1000000) + '' ;
  }

  onTest(){
    console.log('page\'s onTest called');
  }
}
</script>

<style></style>
