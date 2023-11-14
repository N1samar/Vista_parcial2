import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from 'src/app/core/services/api/dashboard.service';
import { IResponse } from 'src/app/data/interfaces/response.interface';

@Component({
  selector: 'app-dashnoard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashnoard.component.html',
  styleUrls: ['./dashnoard.component.scss']
})
export class DashboardComponent implements OnInit {
  pieChartOptions: any = {
    responsive: true,
  };
  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
  pieChartType: string = 'pie';
  pieChartLegend: boolean = true;

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDataForPieChart();
  }

  private loadDataForPieChart(): void {
    this.dashboardService.getData().subscribe((response: IResponse) => {
      if (response.success) {
        this.pieChartLabels = response.data.labels;
        this.pieChartData = response.data.data;
      } else {
        console.error('Error retrieving pie chart data:', response.message);
      }
    });
  }
}
