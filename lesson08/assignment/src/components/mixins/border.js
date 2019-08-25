export const toggle = {
  data () {
    return {
      isShowing: false
    }
  },

  methods: {
    toggleshow() {
      this.isShowing = !this.isShowing;
    }
  }
}
