import {createRouter, createWebHashHistory} from 'vue-router'

import Home from "@/views/Home.vue";
import AppParent from '@/views/app/Parent.vue'
import AppDashboard from '@/views/app/Dashboard.vue'
import AppRegistrationCenter from '@/views/app/RegistrationCenter.vue'
import AppCloudProject from '../views/app/CloudProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/app',
    name: 'app',
    component: AppParent,
    children: [
      {
        path: "dash",
        name: "dash",
        component: AppDashboard
      }, {
        path: "rc",
        name: "rc",
        component: AppRegistrationCenter
      }, {
        path: "cloudProject",
        name: "cloudProject",
        component: AppCloudProject
      },
    ]
  }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
