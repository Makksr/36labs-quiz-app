<template>
    <div>
        <div v-for="number in [currentNumber]" :key='number' id="log-image">
            <img
                :src="currentImage"
                v-on:mouseover="stopRotation"
                v-on:mouseout="startRotation" v-on:click="next"
                class="login-slider"/>                
       </div>
       <!-- <ul id="dot-list">
               <li v-for="dots in images"> <div :class="{'dot':true,'active':(dots===currentImage)}" v-on:click="imgLocation(dots)" ></div></li>  
       </ul>   -->
    </div>
</template>

<script>
export default {
  name: 'slider-image',
  data () {
    return {
      images: ['../images/d1.png', '../images/d2.png', '../images/d3.png', '../images/d4.png'],
        currentNumber: 0,
        timer: null
    };
    mounted =function() {
        this.startRotation();
        this.handleResize();
    },
    methods=function() {
        startRotation=function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation =function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next =function() {
            this.currentNumber += 1
        },
        prev=function() {
            this.currentNumber -= 1
        }
        handleResize=function() {
                if (window.innerWidth < 786) {
           this.images=['../images/m1.png','../images/m2.png','../images/m3.png','../images/m4.png','../images/m5.png']
        }
        }
        imgLocation=function(data){
            var num =this.images.indexOf(data);
            this.currentNumber=num;
            this.startRotation();
        } 
    },
    computed=function() {
    	currentImage= function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
     
    }
  }
}
</script>

