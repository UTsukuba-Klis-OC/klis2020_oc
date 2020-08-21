<template>
  <!-- <div class="example-modal-window"> -->
    <!-- <button class="sbutton" type="button" @click="openModal"><img class="sbimg" src="../assets/submitbutton.png"></button> -->
    <transition name="submit">
      <div class="overlay" @click="$emit('close')">
      <div class="panel" @click.stop>
        <h2 class="title white shadow">Zoom学生相談<br>事前登録</h2>
        <h4 style="margin:1em 0; color:paleturquoise" class="lightcoral">8月30日開催</h4>
        <p class="white shadow">Zoomによるオンライン学生相談を行います。聞きたいこと，相談したいことがある方はぜひお申し込みください！</p>
        <div class="yoyaku"><a href="#cal">オンライン相談<br>今すぐ予約！</a></div>
        <h5 style="margin-top:2em;" class="shadow white">学生相談のSTEP</h5><ul class="shadow white" style="list-style: none; text-align:left;"><li><b>STEP1</b> 事前登録</li><li><b>STEP2</b> Zoomをダウンロード!</li><li><b>STEP3</b> 送られたURLで入室!</li></ul>
        
        <img style="margin-top:3em;" class="shadow" alt="zoom logo" width="70px" src="../assets/zoom_icon.png">
        <br>
        <a href="https://apps.apple.com/jp/app/zoom-cloud-meetings/id546505307"><img  style="margin-top:1em" alt="appstore" height="40px" src="../assets/appstore.svg"></a>
        <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ja"><img style="filter:grayscale(1); margin-top:1em;" alt="google play" height="60px" src="../assets/play.png"></a>

        <h4 id="cal" style="margin-top:2em;" class="shadow white">予約</h4>
        <p class="shadow white">予約カレンダー or<a target="_blank" rel=”noopener” href="https://coubic.com/klis2020"> こちら</a>からいますぐ簡単予約！</p>
        <p class="shadow white" style="font-size:5pt;">*Microsoft InternetExploerには非対応。Chrome/Edge等をお使いください。利用は無料，通信料等がかかる場合があります。</p>
        <iframe class="glass" src="https://coubic.com/klis2020/widget/calendar?from_pc=listMonth&from_sp=listMonth" style="border: none; width: 100%; height: 780px;" allowtransparency='true' frameborder=0 scrolling="no"></iframe>
        <button class="cb button" type="button" @click="$emit('close')">×</button>
      </div>
      </div>
    </transition>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'MyComponent',
    methods: {
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },
    mount () {
        this.show()
    }
}
</script>

<style scoped>
/* modal-window */
.overlay {
    background: rgba(0, 0, 0, .8);
    backdrop-filter: blur(5px);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    transition: all .5s ease;
}
 
.panel {
    display:block;
    width: 90vw;
    height: 85vh;
    background: rgba(0, 0, 0, .2);
    padding: 7vh 5vw;
    position: absolute;
    margin:5vh 5vw;
    /* left: 50%;
    top: 50%; */
    /* margin-left: -150px;
    margin-top: -100px; */
    transition: all .1s ease;
    overflow: auto;
}
.modal-enter,
.modal-leave-active {
    opacity: 0;
}
 
.modal-enter .panel,
.modal-leave-active .panel{
    top: -200px;
    transition: all .1s;
}

.yoyaku{
    background: darkturquoise;
    border-radius: 10px;
    border:solid 2px whitesmoke;
    width: 200px;
    font-weight: 400;
    text-align:center;
    margin:2em auto 0 auto;
}
.yoyaku a{
  color:whitesmoke!important;
  text-decoration: none;
}
.yoyaku:hover{
    background:cyan;
    transition: 80ms;
}

.shadow{
    filter: drop-shadow(0 0 0.75rem black);
}
.white{
    color: whitesmoke;
}

.cb{
    border-style: none;
    background: rgba(255,255,255, 0.8);
    padding: 18px 25px;
    border-radius:50%;
    outline:0;
    position:absolute;
    z-index: 100;
}
.cb:hover{
    transition: 0.5s;
    background: black;
    color: whitesmoke!important;
}

.button{
    z-index: 0;
    position: fixed;
    top:2vh;
    right: 2.5vw;
}

.sbutton{
    position: fixed;
    bottom: 90px; 
    right: 5px;  
    border-style: none;
    background:rgba(0,0,0,0);
    z-index: 10;
    outline:0;
}

.sbutton:hover{
  filter: contrast(200%);
  transition: 80ms;
}

.sbimg{
  height: 130px;
  min-height: 10vh!important;
}

.glass{
  filter: contrast(120%);
  filter: drop-shadow(0 0px 4px white)
}


</style>

