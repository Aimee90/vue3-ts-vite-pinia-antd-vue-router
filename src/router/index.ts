import { createRouter, createWebHashHistory } from "vue-router"

import Common from "./modules/common"
const routes = [
  ...Common
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router