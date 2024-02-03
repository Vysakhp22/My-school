import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: 'dashboard.component.css'
})

export class DashboardComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}