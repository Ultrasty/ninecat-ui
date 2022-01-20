<template>
  <div>
    <Hello
        :name="name"
    />
  </div>
</template>

<script>
export default {
  name:'App',
  data:function(){
    return {
      name:'Ninecat UI'
    }
  }
}
</script>
