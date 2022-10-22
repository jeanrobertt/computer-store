import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private _snackBar: MatSnackBar) { }

  notificar(mensagem: string) {
    this._snackBar.open(mensagem, "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
  }
}
