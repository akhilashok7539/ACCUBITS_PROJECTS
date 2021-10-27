import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFilter=false;
  cardData;
  filterdashboard = true;
  multi= [
    {
      "name": "Deposit",
      "series": [
        {
          "name": "Jan",
          "value": 6200
        },
        {
          "name": "Feb",
          "value": 7300
        },
        {
          "name": "Mar",
          "value": 894
        },
        {
          "name": "Apr",
          "value": 6200
        },
        {
          "name": "May",
          "value": 7300
        },
        {
          "name": "Jun",
          "value": 894
        },
        {
          "name": "Jul",
          "value": 6200
        },
        {
          "name": "Aug",
          "value": 7300
        },
        {
          "name": "Sep",
          "value": 894
        },
        {
          "name": "Oct",
          "value": 6200
        },
        {
          "name": "Nov",
          "value": 7300
        },
        {
          "name": "Dec",
          "value": 894
        }
      ]
    },
  
    {
      "name": "Withdraw",
      "series": [
        {
          "name": "Jan",
          "value": 5200
        },
        {
          "name": "Feb",
          "value": 6300
        },
        {
          "name": "Mar",
          "value": 1094
        },
        {
          "name": "Apr",
          "value": 7200
        },
        {
          "name": "May",
          "value": 3300
        },
        {
          "name": "Jun",
          "value": 2894
        },
        {
          "name": "Jul",
          "value": 9200
        },
        {
          "name": "Aug",
          "value": 300
        },
        {
          "name": "Sep",
          "value": 1894
        },
        {
          "name": "Oct",
          "value": 3200
        },
        {
          "name": "Nov",
          "value": 5300
        },
        {
          "name": "Dec",
          "value": 8894
        }
      ]
    },
    
  ];
  view: any[] = [700, 300];

  // options
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  showGridLines: boolean = false;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };


  constructor(
    private service: ApiService,
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getOverallDetails();
  }

  getOverallDetails(){
    // const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/dashboard').subscribe((response) => {
      this.cardData = response.data.cards;
      this.multi =  response.data.transactionChart;
    });
  }

  filterOpen(){
    this.showFilter = !this.showFilter;
  }
  setFilter(data){
    // console.log(data)
    delete data.userId
    const params = this.commonService.removeEmptyStringsData(data);
    console.log(data);
    this.getDashboardDetails(data);
  }

  onSelect(e){
    console.log(e)
  }

  getDashboardDetails(data)
  {
    let apiparams = {
      fromDate: data.start,
      toDate:data.end,
      country:data.country,
    }
    const params = this.commonService.removeEmptyStringsData(apiparams);

    this.service.httpGet('/v1/admin/dashboard?'+params).subscribe((response) => {
      this.cardData = response.data.cards;
      this.multi =  response.data.transactionChart;
    });
  }

}
