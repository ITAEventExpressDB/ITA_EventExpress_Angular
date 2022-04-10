import { Component, OnInit } from '@angular/core';
import { ContactAdminFormService } from '../services/contact-admin-form.service';

@Component({
  selector: 'app-contact-admin-form',
  templateUrl: './contact-admin-form.component.html',
  styleUrls: ['./contact-admin-form.component.scss']
})
export class ContactAdminFormComponent implements OnInit {
    title = 'Add';
    admins: any;
    router = 'ContactAdmin';
    editing = { val: false, title: 'Add', messageId: '' };
  
    constructor(private admin: ContactAdminFormService) {
      this.getAdmins();
    }
    cancel() {
      this.editing = { val: false, title: 'Add', messageId: '' };
    }

  
    getAdmins() {
      this.admin.allMessagesForAdmins().subscribe((data) => {
        this.admins = data;
        console.log(this.admins);
      });
    }

    getAdminByMessageId(messageId:string) {
      this.admin.messageById(messageId).subscribe((data) => {
        this.admins = data;
        console.log(data);
        
      });
    }
  
    getAdminFormData(data: any) {
      
        (this.editing.val
          ? this.admin.editAdmin(this.editing.messageId, data)
          : this.admin.addContactAdmin(data)
        ).subscribe(() => {
          this.getAdmins();
          console.log(data);
          
          this.cancel();
        });
      }
  

    deleteAdmin(id: string) {
      this.admin.deleteAdmin(id).subscribe(() => {
        this.getAdmins();
      });
    }

    editAdminStatus(messageId: string) {
      this.editing = { val: true, title: 'Edit', messageId };
    }
  
    ngOnInit(): void {}
}
