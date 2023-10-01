<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import demo1 from './demo1'
import demo2 from './demo2'
import demo3 from './demo3'
import demo4 from './demo4'
import demo5 from './demo5'

export default {
  name: 'Dashboard',
  components: { demo1, demo2, demo3, demo4, demo5 },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
