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
                name: "principal",
                component: Principal
            },
            {
                path: '/client/mybooking/',
                name: "booking",
                component: Booking
            },
            {
                path: '/locate',
                name: "locate",
                component: Locate
            },
            {
                path: '/about',
                name: "about",
                component: About
            },
            {
                path: '/rooms',
                name: 'rooms',
                component: Rooms
             },
              {
                path: '/client/auth',
                name: 'reserves',
                component: Reserves
              }
        ]
    })

export default router