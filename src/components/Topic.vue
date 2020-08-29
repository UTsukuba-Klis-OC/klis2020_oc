<template>
    <div class="view">
        <div class="about-class">
        <b-row class = "justify-content-md-center about">
        <div class="whiteback">
        <h2 class="cen-text">About KLIS</h2>
        <p class="cen-text">KLIS = 知識情報・図書館学類学類は知識の形式化や探索・収集技術，伝達方法，知識と情報の仲介技術，データを分析的，解析的にあつかって知識を抽出する手法などを修得する文理融合の学類です。</p>
        <b-col md="auto" sm="12"><a class="buttonton" href="https://klis.tsukuba.ac.jp/">学類ホームページ</a></b-col>
        <b-col md="auto" sm="12"><iframe class="youtube-pv" src="https://www.youtube.com/embed/4zEaN6-jSdw" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        </div>
        </b-row>
        </div>

        <div class="study-class">
        <video playsinline autoplay muted loop>
        <source src="../assets/haikei_hp.mp4" type="video/mp4">
        </video>
        <b-row class = "justify-content-md-center about">
        <h2>STUDY</h2>
        <p>KLISではどんな学びができるのか？<br>2つの授業を見てみよう。</p>
        <b-col margin="1em" md="auto" sm="12"><iframe class="youtube-pv yt-r" src="https://www.youtube.com/embed/jtiaKHiGVTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col md="auto" sm="auto"><iframe class="youtube-pv yt-r" src="https://www.youtube.com/embed/1BLI8Dw3OKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        </b-row>
         </div>

        <div class="people-class">
        <b-row class = "justify-content-md-center about">
        <h2 style="margin-top:1em;" class="right-text">PEOPLE</h2>
        <p class="right-text">学生生活のイメージを知ろう。<br>KLISとMASTの学生が中心となって作る「かすがらいふ」を今すぐダウンロードしよう。</p>
        </b-row>

        <b-row class = "justify-content-md-center about">
        <b-col><img style="margin-top:0; margin-bottom:1em; filter:drop-shadow(0 0 .5rem black)" width="200px" src="../assets/hyoushi.png" alt="かすがらいふ表紙"></b-col>
        <b-col><a class="buttonton right-b" href="https://klis.tsukuba.ac.jp/klis_students/2020/2020summer.pdf">ダウンロード</a></b-col>
        </b-row>
        </div>



    </div>
</template>

<script>
</script>


<style scoped lang="scss">

h2 {
    color: #ACB6E5;/*非対応のブラウザでの文字色を設定*/
    background: -webkit-linear-gradient(50deg, #8e5dff, #29ffe2); /*背景色にグラデーションを指定*/
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
    filter: drop-shadow(0 0 .3rem black);
    font-size: 14pt;
    text-align: left!important;
     position: relative;
    z-index:100;

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
    z-index: 9990;
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
// .whiteback{
//     background:rgba($color: white, $alpha: .5)
// }

.about-class{
    width: 100%;
    background: linear-gradient( 135deg, rgba(106, 255, 255, 0.322), rgba(253, 131, 208, 0.151)),
    url(../assets/sakura-slash.png);
    background-position: center;
    padding-top: 2em;
    // filter: contrast(80%);
    background-size: cover;
    position: relative;
    z-index: 0;
    // width: 80vw;
    // margin:0 auto;

}
.study-class{
    padding-top: 2em;

    width: 100%;
    // background-image: url(../assets/sakura-slash.png);
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom:40px;
    z-index: 1;
    background: linear-gradient( 135deg,  rgb(31, 31, 31), rgb(31, 31, 31),   rgb(31, 31, 31), rgb(31, 31, 31),rgb(49, 85, 161));
    // background:rgb(31, 31, 31);
    // width: 80vw;
    // margin:0 auto;
    // background: linear-gradient( 185deg, rgba(73, 27, 69, 0.877), rgba(33, 23, 80, 0.171));
}
.people-class{
    padding-top: 2em;
    width: 100%;
    // background-image: url(../assets/sakura-slash.png);
    background-position: left;
    background-size: cover;
    position: relative;
    background: rgba($color: #000000, $alpha: 0.0);
    background: linear-gradient( 140deg, rgb(31, 31, 31),  rgba(31, 31, 31, 0.288), rgba(0, 119, 255, 0.651),rgba(0, 255, 115, 0.651)),
    url(../assets/kasugalife.png);
    z-index: 0;
    //   width: 80vw;
    // margin:0 auto;

}



.about{
    display: block;
    width: 88vw;
    text-align: center;
    margin: auto!important;
    padding:5% 15%;
}
.youtube-pv{
    display: block;
    margin:1em auto;
    width:50vw;
    height: 25vw;
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
  z-index: 2;
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