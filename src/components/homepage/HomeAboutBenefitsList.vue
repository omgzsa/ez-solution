<template>
  <div>
    <div>
      <ul>
        <li v-for="item in customer" :key="item.id" class="py-4">
          <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
            {{ item.title }}
          </h4>
          <p class="body-2 text-sm-body-1">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="item in differences" :key="item.id" class="py-4">
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
