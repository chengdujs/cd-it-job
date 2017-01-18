<template lang="html">

</template>

<script>
export default {
  name:search-detail,
  data(){
    return{
      comDetail:{} //companyDetail
    }
  },
  props(){

  },
  created(){
    ajax.get('/static/mock/companyDetail.json')
      .then(data => {
        this.comDetail = data;
      });
  },
}
</script>

<style lang="css">
</style>
