<template>
    <div class="view">
        <div class="Movie-class">
        <b-row class = "justify-content-md-center about">
        <h2 class="cen-text">Movie</h2>
        <p class="cen-text">Movie Contentsでは学生主導で制作した動画コンテンツをお楽しみください。</p>
        <b-col md="auto" sm="12"><a class="buttonton hb" href="https://www.youtube.com/channel/UCAwdGVp2VT_6KY2ZPp__h3w/">オフィシャル▶Youtube</a></b-col>
        <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px;">PV系</p>
        </b-row>

        <b-container class="movie-gal">
        <b-form-row md="auto" xs="12">
        <b-col><iframe  src="https://www.youtube.com/embed/4zEaN6-jSdw" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col><iframe src="https://www.youtube.com/embed/B-PKg8WaaMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col xs="12"><iframe src="https://www.youtube.com/embed/PJX7RcN6JpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col xs="12"><iframe src="https://www.youtube.com/embed/4wuJqok3oeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        </b-form-row>

        <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px;">講義＆説明系</p>
        <b-form-row class = "justify-content-md-center">
        <b-col xs="12"><iframe  src="https://www.youtube.com/embed/jtiaKHiGVTg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col xs="12"><iframe src="https://www.youtube.com/embed/1BLI8Dw3OKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col xs="12"><iframe src="https://www.youtube.com/embed/bLn7ZOaf8HQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col xs="12"><iframe src="https://www.youtube.com/embed/QEnbgouyo8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        </b-form-row>
        </b-container>


        </div>

    </div>
</template>

<script>
</script>


<style scoped lang="scss">

h2 {
    color: #ACB6E5;/*非対応のブラウザでの文字色を設定*/
    background: -webkit-linear-gradient(50deg, #ff52c5, #c70fff); /*背景色にグラデーションを指定*/
    -webkit-background-clip: text; /*テキストでくり抜く*/
    -webkit-text-fill-color: transparent;/*くり抜いた部分は背景を表示*/
    filter: drop-shadow(0 0 .1rem white);
    text-align: left;
    font-weight: 800;
    font-size:36pt;
    position: relative;
    z-index:100;

    &.right-text{
        text-align: right!important;
    }
    &.cen-text{
        text-align:center!important;
    }
}


p{
    color:rgb(255, 255, 255);
    filter: drop-shadow(0 0 .2rem black);
    font-size: 14pt;
    text-align: left;
     position: relative;
    z-index:100;
    margin:1em 0;

    &.right-text{
        text-align: right!important;
    }
    &.cen-text{
        text-align:center!important;
    }
}

.buttonton{
   background: #ACB6E5;/*非対応のブラウザでの文字色を設定*/
   background: -webkit-linear-gradient(0deg, #976ff3, #38e4cd); /*背景色にグラデーションを指定*/
    /*-webkit-background-clip: text; テキストでくり抜く*/
    /*-webkit-text-fill-color: transparent;/*くり抜いた部分は背景を表示*/
    display: inline-block;
    margin:3em auto!important;
    color: white;
    padding:10px 20px;
    font-size: 14pt;
    font-weight: 600;
    border-style:none;
    outline:0;
    border-radius: 25px;
    text-decoration: none;
    z-index: 100;
    position: relative;
    
    &:hover{
       filter: contrast(200%);
        transition: .3s;
         outline:0;
    }

    &.right-b{
        margin:3em auto 3em 0!important;
    }
}

.bimg{
    border-style:none!important;
    overflow:hidden;
    width: 80vw;
    height: 30vh;
    margin: 0;
    padding: 0;
    outline:0;
    // transform:skewX(-15deg);
    // -webkit-clip-path: polygon(0 calc(0% + 7vw), 100% 100%, 100% 100%, 0 100%);
    //       clip-path: polygon(0 calc(0% + 7vw), 0 100%, 0% 0%, 100% 0);
    // &:hover{
    //    filter: contrast(200%);
    //    opacity: 60%;
    //     transition: .3s;
    //      outline:0;}

}

.Movie-class{
    padding-top: 2em;
    padding-bottom: 8em;
    width: 100%;
    background: linear-gradient( 135deg, rgba(181, 42, 209, 0.986), rgba(0, 0, 0, 0.281)),
    url(../assets/spot-2.png);
    background-position: center;
    // filter: contrast(80%);
    background-size: cover;
    // width: 80vw;
    // margin:0 auto;

}

.movie-gal{
    display: block;
    margin:0 auto;
}


.study-class{
    padding-top: 1em;

    width: 100%;
    // background-image: url(../assets/sakura-slash.png);
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom:40px;
    z-index: 0;
    // background: linear-gradient( 135deg,rgba(0, 255, 115, 0.651),  rgb(31, 31, 31),rgba(0, 119, 255, 0.651));
    background:rgb(31, 31, 31);
    // width: 80vw;
    // margin:0 auto;
    // background: linear-gradient( 185deg, rgba(73, 27, 69, 0.877), rgba(33, 23, 80, 0.171));
}
.people-class{
    padding-top: 1em;
    width: 100%;
    // background-image: url(../assets/sakura-slash.png);
    background-position: left;
    background-size: cover;
    position: relative;
    background: rgba($color: #000000, $alpha: 0.0);
    background: linear-gradient( 135deg, rgb(31, 31, 31),  rgba(0, 119, 255, 0.651),rgba(0, 255, 115, 0.651)),
    url(../assets/kasugalife.png);
    z-index: 0;
    //   width: 80vw;
    // margin:0 auto;

}



.about{
    display: block;
    width: 88vw;
    text-align: center;
    margin:0 auto!important;
    padding:2% 15% 2% 15%;
}
.douga{
    display: block;
    margin:1em auto;
    width:20vw;
    height: 10vw;
    &.yt-r{
        position: relative;
        width:33vh;
        height: 20vh;
        margin: 3em 0 1em auto;
        z-index: 2;
    }

}
 @media screen and (mim-width:480px){
     .yt-r{
        width:40vh;
        height: 22vh;
        margin: 1em 10px;
    }
            
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
//   background: url('../images/bg.png') no-repeat;
  background-size: cover;
  z-index: 1;
    // transform:skewX(-15deg);
    -webkit-clip-path: polygon(0 calc(0% + 7vw),  0% 0%, 100% 0%, 00% 100%);
          clip-path: polygon(0 calc(0% + 7vw), 0% 0%, 80% 0%, 0 100%);
//     -webkit-clip-path: url(#svgPath);
//   clip-path: url(#svgPath);
background:black;

}


        .body {
            z-index: 10;
            display: block;
            position: relative;
            
        }
        .view {
           
            margin:0!important;
            overflow: hidden;
            
        }
</style>