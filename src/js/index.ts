import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface IRecord {
    nr: number
    title: string
    artist: string
    duration: number
    yearOfPublication: number
}

let baseUrl: string = "https://restmusicrecords.azurewebsites.net/api/MusicRecords"


new Vue({
    el: "#app",
    data: {
        records: []
    },
    methods: {
        getAllRecords() {
            this.helperGetAndShow(baseUrl)
        },
        helperGetAndShow(url: string) { // helper metode: getAllRecord + getByVendor are very similar
            axios.get<IRecord[]>(url)
                .then((response: AxiosResponse<IRecord[]>) => {
                    this.records = response.data
                })
                .catch((error: AxiosError) => {
                    //this.message = error.message
                    alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        }
    }
})