export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;
    
    contructor(values: Object = {}) {
     Object.assign(this, values);
    }
}
