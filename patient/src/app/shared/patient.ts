export class Patient {
  ID: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  appointmentDate: string;
  storeId: number;
  paidAppointment: boolean;

  constructor(ID?: number, firstName?: string, lastName?: string, email?: string, phoneNumber?: number, appointmentDate?: string, storeId?: number, paidAppointment?: boolean) {
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.appointmentDate = appointmentDate;
    this.storeId = storeId;
    this.paidAppointment = paidAppointment;
  }
}
