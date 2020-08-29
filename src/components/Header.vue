<template>
  <b-navbar fixed="bottom" toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">
        <!-- <div class="c1">知識情報・図書館学類</div><div class="c2">オープンキャンパス<div class="year">2020</div></div> -->
         <img alt="klis oppencampus 2020 logo" class="b-logo d-inline-block align-top" src="../assets/logo.svg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#top">Home</b-nav-item>
        <b-nav-item href="#about">About</b-nav-item> 
        <!-- <b-nav-item-dropdown dropup text="about" right>
          <b-dropdown-item href="#">KLISとは？</b-dropdown-item>
          <b-dropdown-item href="#">学び</b-dropdown-item>
          <b-dropdown-item href="#"></b-dropdown-item> 
        </b-nav-item-dropdown> -->

        <b-nav-item href="#movie">Movie</b-nav-item>
         <b-nav-item href="#" disabled>Live</b-nav-item>
         <!-- <b-dropdown>
          <b-dropdown-item href="#">Movie</b-dropdown-item>
          <b-dropdown-item href="#">Live</b-dropdown-item>
          <b-dropdown-item href="#">Web Contents</b-dropdown-item> 
         </b-dropdown> -->

        <b-nav-item href="#" disabled>Contact</b-nav-item>
        <b-nav-item href="#" disabled>More</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item>
              <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
          </b-nav-item>
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<!-- style中身は省略 -->
<style scoped>

#nav{
 overflow: scroll;
 
}
.b-navbar{
    height: 10vh;
   
}
.b-logo{
    width: 200px;
}
.navbar-brand{
    display: flex!important;


}

/* 
.c1{
    font-size:10pt;
    font-family: ;
    margin-right: 1cm;
    display: block;
}
.c2{
    font-size:12pt;
    position:absolute;
    display: block;
    font-weight: 600;
}
.year{
    font-size: 12pt;
    position:relative;
    display: block;
    float: right;
    font-weight: 400;
    color: blueviolet;
} */

</style>