<template>
    <div class="view">
        <div class="about-class">
        <b-row class = "justify-content-md-center about">
        <h2>About KLIS</h2>
        <p>KLIS = 知識情報・図書館学類学類は知識の形式化や探索・収集技術，伝達方法，知識と情報の仲介技術，データを分析的，解析的にあつかって知識を抽出する手法などを修得する文理融合の学類です。</p>
        <b-col md="auto" sm="12"><a class="buttonton hb" href="https://klis.tsukuba.ac.jp/">学類ホームページ</a></b-col>
        <b-col md="auto" sm="12"><iframe class="youtube-pv" src="https://www.youtube.com/embed/4zEaN6-jSdw" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        </b-row>
        </div>

        <div class="study-class">
        <video playsinline autoplay muted loop>
        <source src="../assets/haikei_hp.mp4" type="video/mp4">
        </video>
        <b-row class = "justify-content-md-center about">
        <h2>STUDY</h2>
        <p>KLISではどんな学びができるのか？2つの授業を見てみよう。</p>
        <b-col md="auto" sm="12"><iframe class="youtube-pv yt-r" src="https://www.youtube.com/embed/jtiaKHiGVTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        <b-col md="auto" sm="auto"><iframe class="youtube-pv yt-r" src="https://www.youtube.com/embed/1BLI8Dw3OKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
        </b-row>
         </div>

        <div class="people-class">
        <b-row class = "justify-content-md-center about">
        <h2 style="margin-top:1em;">PEOPLE</h2>
        <p>学生生活のイメージを知ろう。<br>KLISとMASTの学生が中心となって作る「かすがらいふ」を今すぐダウンロードしよう。</p>
        </b-row>

        <b-row class = "justify-content-md-center about">
        <b-col><img style="mergin-top:2em; margin-bottom:3em; filter:drop-shadow(0 0 .5rem black)" width="200px" src="../assets/hyoushi.png" alt="かすがらいふ表紙"></b-col>
        <b-col><a class="buttonton hb right-b" href="../assets/2020summer.pdf">ダウンロード</a></b-col>
        </b-row>
        </div>



    </div>
</template>

<script>
</script>


<style scoped lang="scss">

h2 {
    color: #ACB6E5;/*非対応のブラウザでの文字色を設定*/
    background: -webkit-linear-gradient(50deg, #ad8aff, #29ffe2); /*背景色にグラデーションを指定*/
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
    margin:6em auto!important;
    color: white;
    padding:10px 3vw;
    font-size: 14pt;
    font-weight: 600;
    border-style:none;
    outline:0;
    border-radius: 25px;
    text-decoration: none;
    &:hover{
       filter: contrast(200%);
        transition: .3s;
         outline:0;
    }
    z-index: 100;

    &.right-b{
        margin:6em auto 3em 0!important;
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

.about-class{
    width: 100%;
    background: linear-gradient( 135deg, rgba(106, 255, 255, 0.322), rgba(253, 131, 208, 0.151)),
    url(../assets/sakura-slash.png);
    background-position: center;
    // filter: contrast(80%);
    background-size: cover;
    // width: 80vw;
    // margin:0 auto;


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