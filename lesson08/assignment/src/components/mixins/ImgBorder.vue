<!-- Mixin for image border on click -->
<script>
export default {
  name: "ImgBorder",
  methods: {
    clicked(el) {
      this.border = !this.border
    }
  }
}
</script>
