<template>
    <div class="view">
        <div class="Movie-class">
            <b-row class="justify-content-md-center about">
                <h2 class="cen-text">Information</h2>
                <p class="cen-text">その他の情報</p>
            </b-row>
            <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px;">入試募集要項</p>

            <b-container class="movie-gal">
                <b-form-row class="justify-content-md-center">
                    <b-col md="3" sm="12"><a class="buttonton hb"
                            href="https://www.tsukuba.ac.jp/admission/undergrad/pdf/2021/r3-2.pdf">総合選抜・後期・推薦</a></b-col>
                    <b-col md="3" sm="12"><a class="buttonton hb"
                            href="http://www.tsukuba.ac.jp/admission/undergrad/pdf/2021/r3-ac-youkou.pdf">AC入試</a></b-col>
                    <b-col md="3" sm="12"><a class="buttonton hb"
                            href="https://www.tsukuba.ac.jp/admission/undergrad/pdf/2021/r3-hennyu-youkou.pdf">編入学</a></b-col>
                </b-form-row>

                <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px;  margin-top:2em;">関連リンク</p>
                <b-form-row class="justify-content-md-center">
                    <b-col md="3" sm="12"><a href="https://www.tsukuba.ac.jp/">筑波大学</a></b-col>
                    <b-col md="3" sm="12"><a href="http://inf.tsukuba.ac.jp/">情報学群</a></b-col>
                    <b-col md="3" sm="12"><a href="https://ac.tsukuba.ac.jp/">アドミッションセンター</a></b-col>
                    <b-col md="3" sm="12"><a href="https://www.mast.tsukuba.ac.jp">情報メディア創成学類</a></b-col>
                </b-form-row>

                <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px; margin-top:2em;">運営・お問い合わせ
                </p>
                <b-form-row class="justify-content-md-center">
                    <b-col md="12" sm="12">
                        <p style="text-align:center;">入試・授業などについて</p>
                    </b-col>
                    <b-col md="12" sm="12"><a href="https://klis.tsukuba.ac.jp">知識情報・図書館学類</a></b-col>

                    <b-col md="12" sm="12">
                        <p style="text-align:center;">ホームページ・Youtube</p>
                    </b-col>
                    <b-col md="12" sm="12"><a href="https://klis.tsukuba.ac.jp/klis_students/">大学説明会実行委員会</a></b-col>
                </b-form-row>

                <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px; margin-top:2em;">開発・制作</p>
                <b-form-row class="justify-content-md-center">
                    <b-col md="12" sm="12">
                        <p style="text-align:center;">知識情報・図書館学類では学生が説明会の企画運営・動画・ホームページ・印刷物の作製を学類と協力して行なっています。<br>
                            <b> 統括・片野樹里 / 動画・茂業哲也(@ninjamagicston) / ホームページ・村上貴人 (@murataka9) / 制作・大学説明会実行委員会</b></p>
                    </b-col>
                </b-form-row>

                <p class="cen-text" style="font-size:24pt;font-weight:100;margin-bottom:2px; margin-top:2em;">その他</p>
                <b-form-row class="justify-content-md-center">
                    <b-col md="12" sm="12">
                        <p style="text-align:center;">このホームページはGitHubコントリビューターの皆様のご協力により作成されております。<br>
                            アクセス解析のためGoogle Analyticsを使用しています。<br>
                        </p>
                    </b-col>
                    <b-col md="12" sm="12"><a
                            href="https://github.com/UTsukuba-Klis-OC/klis2020_oc/blob/master/LICENSE">OPEN MIT
                            LICENSE</a></b-col>
                    <b-col md="12" sm="12"><a
                            href="https://policies.google.com/privacy?hl=ja">Google Analytics プライバシーポリシー</a></b-col>
                </b-form-row>

            </b-container>


        </div>

    </div>
</template>

<script>
</script>


<style scoped lang="scss">
    h2 {
        color: #ACB6E5;
        /*非対応のブラウザでの文字色を設定*/
        background: -webkit-linear-gradient(50deg, #00ff2a, #002df8);
        /*背景色にグラデーションを指定*/
        -webkit-background-clip: text;
        /*テキストでくり抜く*/
        -webkit-text-fill-color: transparent;
        /*くり抜いた部分は背景を表示*/
        filter: drop-shadow(0 0 .1rem white);
        text-align: left;
        font-weight: 800;
        font-size: 36pt;
        position: relative;
        z-index: 100;

        &.right-text {
            text-align: right !important;
        }

        &.cen-text {
            text-align: center !important;
        }
    }


    p {
        color: rgb(255, 255, 255);
        filter: drop-shadow(0 0 .2rem black);
        font-size: 14pt;
        text-align: left;
        position: relative;
        z-index: 100;
        margin: 1em 0;

        &.right-text {
            text-align: right !important;
        }

        &.cen-text {
            text-align: center !important;
        }
    }

    .buttonton {
        background: #ACB6E5;
        /*非対応のブラウザでの文字色を設定*/
        background: -webkit-linear-gradient(0deg, #976ff3, #38e4cd);
        /*背景色にグラデーションを指定*/
        /*-webkit-background-clip: text; テキストでくり抜く*/
        /*-webkit-text-fill-color: transparent;/*くり抜いた部分は背景を表示*/
        display: inline-block;
        margin: 10px auto !important;
        color: white;
        padding: 10px 30px;
        font-size: 14pt;
        font-weight: 600;
        border-style: none;
        outline: 0;
        border-radius: 25px;
        text-decoration: none;
        z-index: 100;
        position: relative;

        &:hover {
            filter: contrast(200%);
            transition: .3s;
            outline: 0;
        }

        &.right-b {
            margin: 3em auto 3em 0 !important;
        }
    }

    .bimg {
        border-style: none !important;
        overflow: hidden;
        width: 80vw;
        height: 30vh;
        margin: 0;
        padding: 0;
        outline: 0;
        // transform:skewX(-15deg);
        // -webkit-clip-path: polygon(0 calc(0% + 7vw), 100% 100%, 100% 100%, 0 100%);
        //       clip-path: polygon(0 calc(0% + 7vw), 0 100%, 0% 0%, 100% 0);
        // &:hover{
        //    filter: contrast(200%);
        //    opacity: 60%;
        //     transition: .3s;
        //      outline:0;}

    }

    .Movie-class {
        padding-top: 2em;
        padding-bottom: 8em;
        width: 100%;
        // background: linear-gradient( 135deg, rgba(181, 42, 209, 0.986), rgba(0, 0, 0, 0.281)),
        // url(../assets/spot-2.png);
        background: linear-gradient(135deg, rgba(42, 148, 209, 0.986), rgba(255, 81, 81, 0.281));
        background-position: center;
        // filter: contrast(80%);
        background-size: cover;
        // width: 80vw;
        // margin:0 auto;

    }

    .movie-gal {
        display: block;
        margin: 0 auto;
    }



    .about {
        display: block;
        width: 88vw;
        text-align: center;
        margin: 0 auto !important;
        padding: 2% 15% 2% 15%;
    }

    .douga {
        display: block;
        margin: 1em auto;
        width: 20vw;
        height: 10vw;

        &.yt-r {
            position: relative;
            width: 33vh;
            height: 20vh;
            margin: 3em 0 1em auto;
            z-index: 2;
        }

    }

    @media screen and (mim-width:480px) {
        .yt-r {
            width: 40vh;
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
        -webkit-clip-path: polygon(0 calc(0% + 7vw), 0% 0%, 100% 0%, 00% 100%);
        clip-path: polygon(0 calc(0% + 7vw), 0% 0%, 80% 0%, 0 100%);
        //     -webkit-clip-path: url(#svgPath);
        //   clip-path: url(#svgPath);
        background: black;

    }


    .body {
        z-index: 10;
        display: block;
        position: relative;

    }

    .view {

        margin: 0 !important;
        overflow: hidden;

    }
</style>