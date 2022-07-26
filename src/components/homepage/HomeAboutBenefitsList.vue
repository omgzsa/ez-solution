<template>
  <div>
    <div>
      <ul class="custom-marker">
        <li v-for="item in customer" :key="item.id" class="py-2">
          <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
            {{ item.title }}
          </h4>
          <p class="body-2 text-sm-body-1">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div>
      <ul class="custom-marker">
        <li v-for="item in differences" :key="item.id" class="py-2">
          <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
            {{ item.title }}
          </h4>
          <p class="body-2 text-sm-body-1">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Array,
      // required: true,
    },
    differences: {
      type: Array,
      // required: true,
    },
  },
};
</script>

<style>
.custom-marker li::marker {
  content: url(../../assets/images/svgs/doublecircle.svg);
}

.custom-marker > li {
  padding-left: 0.5em;
}

/* .custom-marker li::marker {
  font-size: 150%;
  color: #0eab51;
} */
</style>
