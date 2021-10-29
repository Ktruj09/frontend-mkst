export class User{
    constructor(
        public _id: string,
        public name: string,
        public email: string,
        public password: string,
        public address: string,
        public type_user: string,
        public image: string

    ){}
}