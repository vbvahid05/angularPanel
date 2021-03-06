import { promise } from 'selenium-webdriver';




export class AuthService {
    logedIn = false;
    loclStrg: boolean;
    finalStatus: boolean;

    isAuthenticate() {
        this.loclStrg = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.finalStatus = this.loclStrg || this.logedIn;
       //  this.finalStatus =   this.logedIn;
        const promisez = new Promise(
            (resolve , reject ) => {
                setTimeout(() => {
                    console.log(this.finalStatus);
                    resolve(this.finalStatus);
                }, 800);
            }
        );
        return promisez;
    }

     doLogin() {
        // check userName & password
        // if result true then:
         this.logedIn = true;
       // else
       // redirect to login or Registration forms
       // -------------------------

         localStorage.setItem('loggedIn', 'true');
         console.log(this.loclStrg + '/' + this.logedIn);
    }

    doLogOut() {
        this.logedIn = false;
        localStorage.setItem('loggedIn', 'false');
       // localStorage.clear('loggedIn');
        console.log(this.loclStrg + '/' + this.logedIn);
    }
    test() {
        return  this.logedIn;
    }
}
