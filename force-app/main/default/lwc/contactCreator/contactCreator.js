import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';

export default class AccountCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    //fields = [CONTACT_NAME, CONTACT_EMAIL];
    fields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_EMAIL];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "Success"
        });
        this.dispatchEvent(toastEvent);
    }
}