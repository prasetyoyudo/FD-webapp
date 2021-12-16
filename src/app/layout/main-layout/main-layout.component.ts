import { Component, OnInit }  from '@angular/core';
import { FormBuilder,
          FormGroup,
          Validators }        from '@angular/forms';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public searchForm         = new FormGroup({})

  constructor(
    private formBuilder   : FormBuilder,
  ) { }

  async ngOnInit() {
    await this.buildForm()
  }

  async buildForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', [
        Validators.required,
      ]],
    })
  }
}
