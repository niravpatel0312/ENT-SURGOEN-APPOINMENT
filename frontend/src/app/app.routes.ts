import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminViewEmpComponent } from './admin-view-emp/admin-view-emp.component';
import { AdminAddEmpComponent } from './admin-add-emp/admin-add-emp.component';
import { AdminUpdateEmpComponent } from './admin-update-emp/admin-update-emp.component';
import { EmpViewTimeslotComponent } from './emp-view-timeslot/emp-view-timeslot.component';
import { EmpAddSlotComponent } from './emp-add-slot/emp-add-slot.component';
import { EmpUpdateSlotComponent } from './emp-update-slot/emp-update-slot.component';
import { PatientTakeAppointmentComponent } from './patient-take-appointment/patient-take-appointment.component';
import { PatientViewAppointmentComponent } from './patient-view-appointment/patient-view-appointment.component';
import { EmpViewNewAppointmentComponent } from './emp-view-new-appointment/emp-view-new-appointment.component';
import { EmpViewPatientProfileComponent } from './emp-view-patient-profile/emp-view-patient-profile.component';
import { EmpAddPatientProfileComponent } from './emp-add-patient-profile/emp-add-patient-profile.component';
import { EmpUpdatePatientProfileComponent } from './emp-update-patient-profile/emp-update-patient-profile.component';
import { EmpConfirmAppointmentReportComponent } from './emp-confirm-appointment-report/emp-confirm-appointment-report.component';
import { EmpNotconfirmAppointmentReportComponent } from './emp-notconfirm-appointment-report/emp-notconfirm-appointment-report.component';
import { EmpTodayAppointmentReportComponent } from './emp-today-appointment-report/emp-today-appointment-report.component';
import { EmpPatientDetailReportComponent } from './emp-patient-detail-report/emp-patient-detail-report.component';
import { EmpViewPatientwiseProfileComponent } from './emp-view-patientwise-profile/emp-view-patientwise-profile.component';

export const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"about",component: AboutComponent},
    {path:"contact",component: ContactComponent},
    {path:"patient_regis",component: RegistrationComponent},
    {path:"login",component: LoginComponent},
    {path:"admin_view_emp",component: AdminViewEmpComponent},
    {path:"admin_add_emp",component: AdminAddEmpComponent},
    {path:"admin_update_emp/:eid",component: AdminUpdateEmpComponent},
    {path:"emp_view_timeslot",component: EmpViewTimeslotComponent},
    {path:"emp_add_timeslot",component: EmpAddSlotComponent},
    {path:"emp_update_timeslot/:sid",component: EmpUpdateSlotComponent},
    {path:"patient_take_appointment",component: PatientTakeAppointmentComponent},
    {path:"patient_view_appointment",component: PatientViewAppointmentComponent},
    {path:"emp_view_new_appointment",component: EmpViewNewAppointmentComponent},
    {path:"emp_view_patient_profile",component: EmpViewPatientProfileComponent},
    {path:"emp_add_patient_profile",component: EmpAddPatientProfileComponent},
    {path:"emp_update_patient_profile/:pid",component: EmpUpdatePatientProfileComponent},
    {path:"emp_confirm_appointment_report",component: EmpConfirmAppointmentReportComponent},
    {path:"emp_notconfirm_appointment_report",component: EmpNotconfirmAppointmentReportComponent},
    {path:"emp_today_appointment_report",component: EmpTodayAppointmentReportComponent},
    {path:"emp_patient_detail_report",component: EmpPatientDetailReportComponent},
    {path:"emp_view_patientwise_profile/:prid",component: EmpViewPatientwiseProfileComponent},
    {path:"admin_patient_detail_report",component: EmpPatientDetailReportComponent},
    {path:"admin_confirm_appointment_report",component: EmpConfirmAppointmentReportComponent},
    {path:"admin_notconfirm_appointment_report",component: EmpNotconfirmAppointmentReportComponent},
    {path:"admin_today_appointment_report",component: EmpTodayAppointmentReportComponent},
];
