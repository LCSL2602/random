import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public flagMsg:boolean = true
  public num:any = ''
  public list_addend:any[] = []
  public countMark:number = 0
  public time = new Date()
  public sizeScreen:number
  public counterRevision:number = 0
  public numToRandom:number = 6
  constructor() {}

  ngOnInit(): void {
    this.sizeScreen = screen.width
  }

  clean():void {
    this.list_addend = []
    this.num = 0
  }

  generateNumber():number{
    return  Math.floor(Math.random() * (this.numToRandom - 1) + 1)
  }

  add_random():void {
    this.countMark++
    this.flagMsg = false
    this.time = new Date()

    if(this.countMark === 21){
      this.numToRandom = 6
      this.counterRevision = 0
      this.countMark = 0
    }

    if(this.list_addend.length === 4) this.clean() 
    
    while(this.list_addend.length < 4){
      const numRandom = this.generateNumber()
      if(this.list_addend.indexOf(numRandom) === -1){
        if(numRandom !== 5){
          this.list_addend.push(numRandom)
        }else{
          this.counterRevision++
          if(this.counterRevision === 1) this.numToRandom = 5
        }
        this.num = numRandom
        break
      }
    }
}

}
