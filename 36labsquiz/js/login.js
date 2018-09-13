const NotfoundComponent = {
	template: '<h1>Not found</h1>'
};

const HomeComponent = {
	template: `  <h1>Home</h1> `
};

const AboutComponent = {
	template: `<h1>About</h1> `
};

const routes = [
	{
  	path: '/',
  	component: HomeComponent
  },
  {
  	path: '/about',
  	component: AboutComponent
  },
  {
  	path: '*',
    component: NotfoundComponent
  }
];

const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router
});
