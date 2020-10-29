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

let baseUrl: string = "https://tristanmusicrecords.azurewebsites.net/api/MusicRecords"


new Vue({
    el: "#app",
    data: {
        records: [],
        titleToGetBy: "",
        artistToGetBy: "",
    },
    created(){
        this.getAllRecords()
    },
    methods: {
        getAllRecords() {
            this.helperGetAndShow(baseUrl)
        },
        getByTitle(title: string) {
            let url = baseUrl + "/title/" + title
            this.helperGetAndShow(url)
        },
        getByArtist(artist: string) {
            let url = baseUrl + "/artist/" + artist
            this.helperGetAndShow(url)
        },
        getByYearOfPublication(yearOfPublication: string) {
            let url = baseUrl + "/yearOfPublication/" + yearOfPublication
            this.helperGetAndShow(url)
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
        // getByTitle(title: string) {
        //     let url: string = baseUrl + "/" + title
        //     axios.get<IRecord>(url)
        //         .then((response: AxiosResponse<IRecord>) => {
        //             this.records = response.data
        //         })
        //         .catch((error: AxiosError) => {
        //             //this.message = error.message
        //             alert(error.message) // https://www.w3schools.com/js/js_popup.asp
        //         })
        // }
    }
})