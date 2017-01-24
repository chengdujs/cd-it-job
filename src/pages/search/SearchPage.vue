<template>
  <div class="page-search">
    <h1>搜索</h1>
    <filter-search></filter-search>
  </div>
</template>
<script>
  import { filterSearch } from 'components/filterSearch'
  export default {
    components: {
      filterSearch
    }
  }
</script>
