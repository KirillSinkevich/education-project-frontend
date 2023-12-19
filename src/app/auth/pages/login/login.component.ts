import {ChangeDetectionStrategy, Component} from '@angular/core';
import { loginImports } from './login.imports';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ILoginForm } from '../../interfaces';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import {TuiLinkModule} from "@taiga-ui/core";
import {AuthService} from "../../services/auth.service";
import {ISignInParams} from "../../../shared/models/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [loginImports, TuiInputPasswordModule, TuiLinkModule],
})
export default class LoginComponent {
  readonly form: FormGroup<ILoginForm> = new FormGroup<ILoginForm>({
    email: new FormControl('kirillsinkevich94@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('kPNkcoT2JPQgKZObbqKOMefx', [Validators.required]),
  } as ILoginForm);

  constructor(private _authService: AuthService) {}

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    this._authService.signIn(this.form.value as ISignInParams).subscribe();
  }
}
