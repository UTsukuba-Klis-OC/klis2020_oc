<template>
    <div class="view">
        <canvas id="granim-canvas"></canvas>
        <div class="body">

            <div class="hyoushi">
                <img alt="klis oppencampus 2020 logo" class="b-logo d-inline-block align-top"
                    src="../assets/utlogo.svg">
            </div>
            <div class="typer">
                <vue-typer :text='["KLIS OPEN CAMPUS ONLINE 2020","2020.8.30 ONAIR"]' :repeat='0' :shuffle='false'
                    initial-action='typing' :pre-type-delay='70' :type-delay='100' :pre-erase-delay='2000'
                    :erase-delay='200' erase-style='select-all' :erase-on-complete='false' caret-animation='blink'>
                </vue-typer>
            </div>

            <div class="schedule">
                <h3>Movie Contents</h3>
                <ul style="list-style: none;">
                    <li>学類プロモーションビデオ</li> 
                    <li>ビブリオバトル説明</li>
                    <li>模擬講義</li>
                    <li>学生へのインタビュー</li>
                    <li>キャンパスツアー</li>
                </ul>
                <h3>Live Session</h3>
                <ul style="list-style: none;">
                    <li>スチューデントトーク</li> 
                    <li>学生相談</li>
                </ul>
                <p style="color:pink; font-weight:bold;">コンテンツ制作 & 更新中！</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Granim from 'granim'

    export default {
        name: 'granim',
        data() {
            return {
                GObj: Object
            }
        },
        mounted() {
            this.GObj = new Granim({
                element: '#granim-canvas',
                name: 'granim',
                opacity: [1, 1],
                states: {
                    'default-state': {
                        gradients: [
                            ['#29323c', '#485577'],
                             ['#ffd700', '#20b2aa'],
                            ['#FF6B6B', '#556270'],
                            ['#483d8b', '#7fffd4']
                        ],
                        transitionSpeed: 7000
                    }
                }
            })
        }
    }
</script>


<style scoped>

        .body {
            z-index: 10;
            display: block;
            position: relative;
        }

        #granim-canvas {
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            display: block;
        }
        .schedule{
            color:whitesmoke;
            margin: 3em 0 0 0;
            padding:0 25vw 0 0;
            text-align:right;
            border-radius: 20px;
            font-size: 12pt;
            filter: drop-shadow(0 0 0.1rem black);

        }

        .hyoushi {
            display: block;
            /* text-align: left; */
            margin: 0 2vw;
        }

        .b-logo {
            max-width: 370px;
            margin-top: 1vh;
            display: block;
            filter: drop-shadow(0 3px 0.5rem black);
            
        }

        /* TYPER */
        .typer {
            margin: 4em 23vw 0 23vw;
            max-width: 340px;
            padding: 3em 5vw; 
            display: block;
            /* text-align: left; */
            background-color: rgba(250, 250, 250, 0.5);
            color:whitesmoke;

            border-radius:64% 36% 20% 80% / 38% 31% 69% 62%;

            /* border-radius: 20px; */
        }

        .vue-typer {
            font-family: sans-serif;
            font-size: 20pt;
            z-index: 10;
            color:whitesmoke;
        }
        span.char.customt.typed{
            color: whitesmoke !important;
        }

        .view {
            height: 90vh;
            margin-bottom: 10vh !important;
            padding-bottm: 10vh !important;
        }
</style>