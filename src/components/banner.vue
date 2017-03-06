<template>
    <div class="banner">
        <div class="slider-wrap">
            <ul class="slider-img" :style="sliderActive">
                <li class="slider-item" v-for="item in sliderImg"><img :src="item.url"></li>
            </ul>
        </div>
        <ul class="banner-page">
            <li class="slider-btn" v-for="(item,index) in bannerlist" :class="{'active':canActive(index)}"></li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'banner',
    props : {
        bannerlist : {
            require : true
        }
    },
    data () {
        return {
            sliderActive : {
                transform: 'translate3d(0,0,0)'
            },
            nowSlider : 0
        }
    },
    computed : {
        sliderBtn : function() {
            return this.bannerlist
        },
        sliderImg : function() {
            // const [...saveImg] = this.bannerlist;
            //  saveImg.unshift(imglast)
            //  saveImg.push(imgfirst)
            // if (this.nowSlider >= this.bannerlist.length-1) {
                // saveImg.push(this.bannerlist[0])
            //  }
             // console.log(saveImg)
            return saveImg
        },
    },
    mounted () {
        this.sliderStart()
    },
    methods : {
        canActive(index) {
            return index === this.nowSlider
        },
        sliderStart () {
             const sliderLength = this.bannerlist.length;
            setInterval(() => {
                this.nowSlider ++
                this.nowSlider %= sliderLength
                this.sliderActive = Object.assign({}, {
                    transform: `translate3d(${-100*(this.nowSlider)}%,0,0)`
                })
                // if (this.nowSlider === sliderLength-1) {
                    // this.sliderImg.shift()
                    // this.sliderImg.push(this.bannerlist[0])
                    // this.sliderActive = Object.assign({},{
                    //     paddingLeft : '100vw',
                    //     transform: `translate3d(${-100*(this.nowSlider)}%,0,0)`
                    // })
                    // this.nowSlider = 0
                    // return;
                // } else {
                // }
            },3000)
        }
    }
}
</script>
<style scoped>
.banner{
   position:relative;
   margin-top:4rem;
}
.banner-page{
   position:absolute;
   bottom:1rem;
   justify-content:center;
   display: flex;
   align-items:center;
   width:100%;
}
.slider-btn{
    width:0.8rem;
    height:0.8rem;
    background-color:#aaa;
    border-radius: 50%;
    margin-right:0.5rem;
}
.slider-btn.active{
    background:#c62f2f;
}
.slider-wrap{
    overflow:hidden;
}
.slider-img{
    display: flex;
    display: -ms-flexbox;
    flex-direction:row;
    transition:transform 2s;
    font-size:0;
}
.slider-item {
    width: 100vw;
    height:13rem;
}
.slider-item>img{
    width: 100vw;
}
</style
