import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AlertComponent, PlaceholderDirective, CommonModule, FormsModule, MaterialModule, LoadingSpinnerComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  hide = true;
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(public authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {}

  onSwitchMode(){
      this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
      if (!form.valid){
          return;
      }

      const email = form.value.email;
      const password = form.value.password;

      let authObs: Observable<AuthResponseData>;

      this.isLoading = true;
      
      if (this.isLoginMode) {
          authObs = this.authService.login(email, password)
  
      } else {
          authObs = this.authService.signup(email,password)
  
      }

      authObs.subscribe(
          resData => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/login']);
      }, 
          errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
      }
      );
      form.reset();
  }
  onHandleError(){
      this.error = null;
  }
  ngOnDestroy() {
      if (this.closeSub){
          this.closeSub.unsubscribe();
      }
  }
  private showErrorAlert(message: string){
     const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
     const hostViewContainerRef = this.alertHost.viewContainerRef;
     hostViewContainerRef.clear();
     const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
     componentRef.instance.message = message;
     this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
     });
  }
  /* updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
} */
}

