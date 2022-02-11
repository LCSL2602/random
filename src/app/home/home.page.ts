import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public flagMsg:boolean = true
  public num:any = ''
  public list_addend:any[] = []
  public countMark:number = 0
  public time = new Date()

  constructor() {}

  clean(){
    this.list_addend = []
    this.num = 0
  }

  add_random(){
    this.countMark++
    this.flagMsg = false
    this.time = new Date()
    if(this.countMark === 20){
        this.num = 5
        this.countMark = 0
    }else{
        if(this.list_addend.length == 4){
            this.clean()
        }
        while(this.list_addend.length < 4){
            const numRandom = Math.floor(Math.random() * (5 - 1) + 1)
            if(this.list_addend.indexOf(numRandom) == -1){
                this.num = numRandom
                this.list_addend.push(numRandom)
                break
            }
        }
    }
}

}
