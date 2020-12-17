import Router from 'vue-router'

import Principal from './components/Principal'
import Vue from 'vue'
import Booking from './components/Booking'
import Locate from './components/Locate'
import About from "./components/About"
import Rooms from './components/Rooms'
import Reserves from './components/Reserves'

Vue.use(Router)


const router = new Router({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "Principal",
                component: Principal
            },
            {
                path: '/booking',
                name: "Booking",
                component: Booking
            },
            {
                path: '/locate',
                name: "Locate",
                component: Locate
            },
            {
                path: '/about',
                name: "About",
                component: About
            },
            {
                path: '/rooms',
                name: 'Rooms',
                component: Rooms
              },
              {
                path: '/reserves',
                name: 'Reserves',
                component: Reserves
              }
        ]
    })

export default router