const app = new Vue({
    el: '#app',
    data: {
      num:'Init',
      list_addend:[],
      time: new Date()
    },
    methods:{
        clean(){
            this.list_addend = []
            this.num = 0
        },
        add_random(){
            this.time = new Date()
            if(this.list_addend.length == 7){
                this.clean()
            }
                while(this.list_addend.length < 7){
                    let numRandom = Math.floor(Math.random() * (8 - 1) + 1)
                        if(this.list_addend.indexOf(numRandom) == -1){
                            this.num = numRandom
                            this.list_addend.push(numRandom)
                            break
                        }
                }
        }
    }
})