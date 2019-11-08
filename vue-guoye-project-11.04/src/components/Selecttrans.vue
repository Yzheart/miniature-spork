<template>




                <div style='width: 100%;background-color: rgb(243,243,243);position: absolute;top: .3rem; z-index: 999;height: 50%' >
            <div style="display: flex;justify-content: space-between">
                <a style="font-size: 0.12rem; margin-left: 7px;">默认分组</a><a style="font-size: 0.12rem;color: #FF9800; margin-right: 7px;" href="#">编辑</a>
            </div>
                    <div style="display: flex;margin-top: .1rem;
    justify-content: space-between;">
                        <button><span style="color: #FF9800;">全部关注</span></button>
                        <button>最新微博</button> <button>特别关注</button> <button>好友圈</button>


                    </div>

                    <div style="display: flex;margin-top: .1rem;
    justify-content: space-between;">
                        <button>原创</button>
                        <button>视频</button> <button>V+微博</button> <button>群微博</button>


                    </div>
                    <div style="display: flex;justify-content: space-between;margin-top: .1rem;">
                        <a style="font-size: 0.12rem; margin-left: 7px;">我的分组</a>
                    </div>
                    <div style="display: flex;margin-top: .1rem;
    justify-content: space-between;">
                        <button>搞笑</button>
                        <button>旅游</button> <button>音乐人</button> <button>美女</button>


                    </div>

                    <div style="display: flex;margin-top: .1rem;
    justify-content: space-between;">
                        <button>娱乐明星</button>
                        <button>娱乐明星</button> <button>名人明星</button> <button>同学</button>


                    </div>

                    <div style="display: flex;margin-top: .1rem;
    justify-content: space-between;">
                        <button>悄悄关注</button>


                    </div>
                </div>





</template>

<script>
    export default {
        name: "Selecttrans",
        data(){
            return {

                msg:"hello vue",
                flag:false

            }
        },
        methods:{
            show(){

            }
        },
        comments:{

        }

    }
</script>

<style scoped>
    button{
        background: rgb(230,230,230);
        border: 0;
        width: 22%;
        height: 36px;
        margin-left: 7px;
        margin-right: 7px;
        border-radius: 4px;
    }
    .v-enter{
        opacity: 0;
        transform: translate3d(0,-200px,0)
    }
    .v-enter-to{
        opacity: 1;
        transform:translate3d(0,0,0)

    }
    .v-enter-active{
        transition: all 2s ease;
    }
    .v-leave{
        opacity: 1;

    }
    .v-leave-to{
        opacity: 0;
        transform:translate3d(0,-200px,0)

    }
    .v-leave-active{
        transition: all 2s ease;

    }

</style>