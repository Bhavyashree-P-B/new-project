import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private route: ActivatedRoute,
        private router: Router) {

    }
    isMobile: any;

    ngOnInit() {

        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } public openNav() {
        $('.sidenav.mobile').show('slow');
    }
    public signin(tab) {
        $('.signn-tab li').removeClass('active');
        $('.signinModal-container form').each(function () {
            $(this)[0].reset();
        });
        $('#signinModal').modal({ show: true });
        if (tab == "login") {
            $('.signn-tab').find('[href="#login"]').tab('show');
            $('.signn-tab').find('[href="#login"]').closest('li').addClass('active');
        } else if (tab == "signup") {
            $('.signn-tab').find('[href="#register"]').tab('show');
            $('.signn-tab').find('[href="#register"]').closest('li').addClass('active');
        }
    }

}


