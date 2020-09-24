import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";


import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MindlyService } from './mindly.service';
import { Portfolio } from './portfolio';

@Component({
  selector: 'mindly',
  templateUrl: './mindly.component.html',
  styleUrls: ['./mindly.component.css']
})

export class MindlyComponent implements OnInit {

  inputForm: FormGroup;
  portfolio: Portfolio[];
  
  portfolioObject: Portfolio;

  constructor(private route: ActivatedRoute, private router: Router,
              private  portfolioService: MindlyService, private formBuilder: FormBuilder) {

    this.portfolioObject = new Portfolio();
  }

  ngOnInit() {
    this.portfolioService.findAll().subscribe(data => {
      this.portfolio = data;
    });

    this.inputForm = this.formBuilder.group({
      cryptocurrency: ['Bitcoin'],
      amount: ['', Validators.required],
      dateOfPurchase: [''],
      walletLocation: ['', Validators.required]
    });
  }

  /**
   * confirmation of deletion and delete request element Portfolio
   * @param portfolioItem
   */
  

  /**
   * delete element Portfolio
   * @param portfolioItem
   */
  deletePortfolio(portfolioItem: Portfolio): void {
    this.portfolioService.deletePortfolio(portfolioItem)
      .subscribe(data => {
        this.portfolio = this.portfolio.filter(u => u !== portfolioItem);
      })
  };

  /**
   * saving a new item Portfolio
   */
  onSubmit() {
    
    console.log(this.portfolio)
    this.portfolioObject = this.inputForm.value;
    if (this.inputForm.valid) {
      this.portfolioService.save(this.portfolioObject).subscribe(result => this.ngOnInit());
      console.log('form submitted');
    }
  }
}
