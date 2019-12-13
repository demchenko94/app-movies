import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';

import Chart from 'chart.js';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { Aspect6 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office';

import { selectYearsOfMovies } from '@app/store/movies';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent implements OnInit, OnDestroy {
  dataOfMovies$: Observable<object> = this.store.select(selectYearsOfMovies);
  private unsubscribe$ = new Subject<void>();
  chart: object;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.dataOfMovies$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.createChart(data);
    });
  }

  createChart(data) {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.dataYears,
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        plugins: {
          colorschemes: {
            scheme: Aspect6
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
