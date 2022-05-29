export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const CourseFormErrorMessages = [
  new ErrorMessage('subject', 'required', 'A subject must be given.'),
  new ErrorMessage('subject', 'maxlength', 'Subject is allowed to have max. 25 characters'),
  new ErrorMessage('level', 'required', 'A level must be selected.'),
];


