<!-- Mixin for image border on click -->
<script>
export default {
  name: "ImgBorder",
  methods: {
    clicked(el) {
      document.getElementById('imageBorder').style.border = '4px solid red';
    }
  }
}
</script>
