import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/api/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _authService: AuthService
  ) {
    this.formBuild();
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const { username, password } = this.form.value;

    this._authService.login({ username, password }).subscribe({
      next: ({ data }) => {
        this._router.navigate(['/admin']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private formBuild() {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
