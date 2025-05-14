import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reserve-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './reserve-dialog.component.html',
  styleUrl: './reserve-dialog.component.css'
})
export class ReserveDialogComponent implements OnInit{
  paymentMethod: string = 'Yape';
  mapUrl: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ReserveDialogComponent>
  ){}

  ngOnInit(): void {
    const coordStr = this.getCoordsForDestination(this.data.destination);
    const [lon, lat] = coordStr.split(',').map(Number);
    this.mapUrl = this.getLocationIQMapUrl(lat, lon);
  }
  

  close() {
    this.dialogRef.close();
  }

  submit() {
    // Aquí se podra enviar una solicitud real más adelante
    console.log('Solicitud enviada con método de pago:', this.paymentMethod);
    this.dialogRef.close();
  }

  getLocationIQMapUrl(lat: number, lon: number): string {
    const key = 'pk.5f9a5d97f12a7df1967fe3215f10ab7c';  // tu key real
    const zoom = 14;
    const size = '600x400';
    const marker = `icon:small-red-cutout|${lat},${lon}`;
  
    return `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${lat},${lon}&zoom=${zoom}&size=${size}&markers=${marker}`;
  }
  
  getCoordsForDestination(destination: string): string {
    const lookup: Record<string, string> = {
      'PUCP, San Miguel': '-77.0798,-12.0697',
      'UPC, Monterrico': '-76.9689,-12.1033',
      'UTP, San Juan de Lurigancho': '-76.9430,-12.0336',
      'UPN, Chorrillos': '-77.0128,-12.1737',
      'USIL, La Molina': '-76.9495,-12.0863',
      'Universidad de Lima': '-76.9772,-12.0896',
      'UNMSM, Lima': '-77.0775,-12.0561'
    };
  
    return lookup[destination] ?? '-77.0428,-12.0464'; // Fallback: Lima centro
  }


}
