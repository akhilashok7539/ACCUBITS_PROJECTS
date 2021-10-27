import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-suggestion',
  templateUrl: './page-suggestion.component.html',
  styleUrls: ['./page-suggestion.component.scss']
})
export class PageSuggestionComponent implements OnInit {
  @Input() suggestionData;
  @Output() pageLiked = new EventEmitter<any>();
  @Input() index;
  envurl='';
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.envurl = environment.api_url;
  }
  likeClub(data){
    var apiData = {
      teamId: data.teamId,
      status: 1
    }
    this.service.httpPost('/v1/feed/page/like', apiData).subscribe((response) => {
      this.pageLiked.emit(this.index);
    });
  }

}
