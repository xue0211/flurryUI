import {
    createWebHashHistory,
    createRouter
} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Docfile from './components/DocfileDemo.vue'
import SwitchDemo from './components/SwitchPage/SwitchDemo.vue'
import ButtonDemo from './components/ButtonPage/ButtonDemo.vue'
import DialogDemo from './components/DialogPage/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from "./views/GetStarted.vue";
import Install from "./views/Install.vue";


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc,
            children: [
                { path: '', component: Docfile },
                { path: 'intro', component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        }
    ]
})  