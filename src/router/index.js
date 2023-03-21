import VueRouter from "vue-router"
import Home from "@/components/Home"
import DrawerForm from "@/components/DrawerForm"
import Products from "@/components/Products";

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/drawer-form/:color',
			component: DrawerForm,
			name: 'drawer-form'
		},
		{
			path: '/products',
			component: Products,
			name: 'products'
		}
	]
})