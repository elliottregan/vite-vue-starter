import {createRouter, createWebHistory} from 'vue-router';
import Messages from '@/pages/Messages.vue';
import Bookings from '@/pages/Bookings.vue';
import Activity from '@/pages/Activity.vue';

const routes = [
  {
    name: 'App',
    path: '/',
  },
  {
    name: 'Bookings',
    path: "/bookings",
    component: Bookings
  }, {
    name: 'Messages',
    path: "/messages",
    component: Messages
  }, {
    name: 'Activity',
    path: "/activity",
    component: Activity
  },
];

export default createRouter({history: createWebHistory(), routes});
