import { Component,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name1:any=""
  data:any={}
  constructor(private elementRef: ElementRef,private router:Router,private route:ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.params.subscribe(prams=>{
      this.data = prams
      console.log(this.data) 
      this.name1= this.data.name
    })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#F0F8FF';

        
       
     
}
logOut(){
  this.router.navigateByUrl('/_login')
}

tracking(){
  this.router.navigateByUrl('/tracking')
}

}
