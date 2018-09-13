// import header from '@../component/header'
const login =Vue.component('login-button',{
    template:`
    <div id="login-btn-div">
    <span class="login-btn"><router-link to="/login">LOGIN</router-link></span>
    </div>
    `
         });
        const slide= Vue.component('slider-image',{
            template:`<div id="image-slider"><div v-for="number in [currentNumber]" :key='number' id="log-image">
            <img :src="currentImage" v-on:mouseover="stopRotation" v-on:mouseout="startRotation" v-on:click="next"
                class="login-slider" alt="quizVegas"/>                
        </div>
        
        <ul id="dot-list">
               <li v-for="dots in images"> <div :class="{'dot':true,'active':(dots===currentImage)}" v-on:click="imgLocation(dots)" ></div></li>  
        </ul>    </div>  ` ,
        data: function () {
            return {
                images: ['../images/d1.png', '../images/d2.png', '../images/d3.png', '../images/d4.png'],
                currentNumber: 0,
                timer: null
            }
          },
          methods: {
            startRotation: function() {
                this.timer = setInterval(this.next, 3000);
            },
    
            stopRotation: function() {
                clearTimeout(this.timer);
                this.timer = null;
            },
    
            next: function() {
                this.currentNumber += 1
            },
            prev: function() {
                this.currentNumber -= 1
            },
            handleResize: function() {
                    if (window.innerWidth < 786) {
               this.images=['../images/m1.png','../images/m2.png','../images/m3.png','../images/m4.png','../images/m5.png']
            }
            },
            imgLocation: function(data){
                var num =this.images.indexOf(data);
                this.currentNumber=num;
                this.startRotation();
            } 
          },
          computed: {
            currentImage: function() {
              return this.images[Math.abs(this.currentNumber) % this.images.length];
          },
         
        }
                 });      

new Vue({
    el:'#log-btn'
});
const NotfoundComponent = {
	template: '<h1>Not found</h1>'
};


const routes = [
	{
  	path: '/',
  	component: slide
  },
  {
  	path: '/login',
  	component: login
  },
  {
  	path: '*',
    component: NotfoundComponent
  }
];

const router = new VueRouter({
    mode:'history',
	routes
});

new Vue({
	el: '#app',
	router
});
