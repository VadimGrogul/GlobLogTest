import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LongestWordFinderComponent } from '../longest-word-finder/longest-word-finder.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  dialogRef: MatDialogRef<LongestWordFinderComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    this.dialogRef = this.dialog.open(LongestWordFinderComponent, {
      width: '600px'
    });

    this.dialogRef.componentInstance.ignoreSymbols = true;
  }
}
