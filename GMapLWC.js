import { LightningElement, track } from 'lwc';
export default class GMapLWC extends LightningElement {
    @track iFrameURL = 'https://rudhrainfosolution3-dev-ed.my.salesforce.com/apex/GMapVF';
    @track fromAddress;
    @track toAddress;

    addressFromChange(event) {
        this.fromAddress = '';
        this.fromAddress = event.target.street;
        
        this.fromAddress += ', ' + event.target.city;
        this.fromAddress += ', ' + event.target.province;
        this.fromAddress += ',' + event.target.country;
        this.fromAddress += ', ' + event.target.postalCode;
        console.log('From ', this.fromAddress);
        if(this.toAddress != '' && this.fromAddress != '')
            this.iFrameURL = 'https://rudhrainfosolution3-dev-ed.my.salesforce.com/apex/GMapVF?startpoint='+ this.fromAddress +'&endpoint='+ this.toAddress;
    }

    addressToChange( event ) {
        this.toAddress = '';
        this.toAddress = event.target.street;
        this.toAddress += ', ' + event.target.city;
        this.toAddress += ', ' + event.target.province;
        this.toAddress += ',' + event.target.country;
        this.toAddress += ', ' + event.target.postalCode;
        console.log('To ', this.toAddress);
        if(this.toAddress != '' && this.fromAddress != '')
            this.iFrameURL = 'https://rudhrainfosolution3-dev-ed.my.salesforce.com/apex/GMapVF?startpoint='+ this.fromAddress +'&endpoint='+ this.toAddress;
    }
}