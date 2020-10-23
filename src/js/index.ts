import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"



new Vue({
    el: "#app",
    data: {
        name: "",
        greeting: ""
    },
    methods: {
        sayHello(name: string) {
            console.log("Say Hello " + name)
            if (name.length == 0) {
                this.greeting = "Hello NoName"
            }
            else {
                this.greeting = "Hello " + name
            }
        }
    }
})