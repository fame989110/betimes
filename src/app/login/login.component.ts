import { SocialAuthService, FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit{
  userList = <user>{};
  userArray:user[]=[]
  addUserForm = new FormGroup({
    Addname : new FormControl(),
    Addpassword : new FormControl()
  });

 
  constructor(private elementRef: ElementRef,private authService: SocialAuthService,private router:Router,private http:HttpClient){
   
  }
  user?: SocialUser;
  loggedIn?: boolean;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user)
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }


  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#F0F8FF';
}

  login(){

   /* this.http.post<user[]>('/user/find',{"name":this.addUserForm.value.Addname,"password":this.addUserForm.value.Addpassword}).subscribe(Response=>{
      this.userArray =Response
      if(this.userArray[0] != null){
        this.router.navigate(['home',this.userArray[0]])
      }else{
        alert("wrong detail")
      }
    })*/

    this.router.navigate(['home'])
  }

  register(){
    this.router.navigateByUrl('/register')
  }
}
