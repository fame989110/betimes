import { Component,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { user } from '../user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  addUserForm = new FormGroup({
    Addname : new FormControl(),
    Addemail : new FormControl(),
    Addpassword : new FormControl(),
    Addcpassword : new FormControl(),
  });
 name=""
 email=""
 password=""
 confirm=""
  constructor(private elementRef: ElementRef,private router:Router,private http:HttpClient){
    
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#F0F8FF';
}
back(){
  this.router.navigateByUrl('/_login')
}
register(){
this.name=this.addUserForm.value.Addname
this.email=this.addUserForm.value.Addemail
this.password=this.addUserForm.value.Addpassword
this.confirm=this.addUserForm.value.Addcpassword
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
if(this.name == null){
  alert("กรุณากรอกชื่อ")
}else if(!expression.test(this.email)){
  alert("wrong email")
 }else if(this.password != this.confirm){
  alert("ใส่ password ไม่ตรงกัน")

 } else{
  /*this.http.post<user[]>('/user/add',{"name":this.name,"email":this.email,"password":this.password}).subscribe(Response=>{
    if(Response == null){
      alert("ชื่อผู้ใช้ซ้ำ")
      
    }else{
      alert("ลงชื่อเข้าใช้สำเร็จ")
      this.router.navigateByUrl('/_login')
   
    }
 
  })*/

  this.router.navigateByUrl('/_login')
   
 }



}
}