<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

<!-- BOOTSTRAP VUE ACCORDION -->
<section>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</section>

<section>
  <h2>popovers</h2>
  <button
    v-b-popover.top.hover="'Vivamus sagittis lacus vel auge.'"
    title="hover"
    type="button"
    class="btn btn-secondary"
  >Popover on top</button>

  <button
    v-b-popover.right="'Vivamus sagittis lacus vel auge.'"
    title="click"
    type="button"
    class="btn btn-secondary"
  >Popover on right click</button>
</section>

<!-- STANDARD BOOTSTRAP ACCORDION -->
  <!-- <div class="accordion" id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button
            class="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >Collapsible Group Item #1</button>
        </h2>
      </div>

      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div
          class="card-body"
        >Anim pariatur cliche
      </div>
    </div>

    <div class="card">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >Collapsible Group Item #1</button>
        </h2>
      </div>

      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionExample"
      >
        <div
          class="card-body"
        >Anim pariatur cliche
      </div>
    </div> -->

  </div>
</div>
</div>

<!-- STANDARD BOOTSTRAP GRID
<div class="container">
Stack the columns on mobile by making one full-width and the other half-width
<div class="row">
<div class="col-12 col-md-8">.col-12 .col-md-8</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop
<div class="row">
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

Columns are always 50% wide, on mobile and desktop
<div class="row">
<div class="col-6">.col-6</div>
<div class="col-6">.col-6</div>
</div> -->

<!-- BOOTSTRAP VUE GRID - OPTIMAL NATIVE COMPONENT -->
<b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 2</b-col>
    <b-col>2 of 2</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
<!-- Medium sized screens have an offset - other sizes will not -->
    <b-col offsetMd="3">2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>

</div>

  </div>
</template>

<script>
export default {
// "name" can be the page name like "home"
  name: 'HelloWorld',
  data () {
    return {
    msg: "Wecome to your Vue.js App - home",

    cards: [
      {
        text: `Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
      vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
      synth nesciunt you probably haven't heard of them accusamus labore VHS.`,
      id: 0,
    },
    {
      text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
    tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
    assumenda shoreditch et.`,
    id: 1,
    },
    {
      text: `Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
    tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
    assumenda shoreditch et.`,
    id: 2,
    }
  ]

  // Images would look like (*need to include a key so maybe <b-card :key="images.id" no-body class="mb-1">
  // images: [
  //   {
  //     src: "path/toimage.jpg",
  //     alt: `text`,
  //     id: 0
  //   }
  // ]

  };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<!-- test -->
