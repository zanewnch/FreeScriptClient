import {defineStore} from "pinia";
import type {AxiosResponse} from "axios";
import type Result from "@/utils/Result";
import request from "@/utils/Request";


export const useRegisterStore = defineStore('register', {
    state: (): {
        username: string,
        password: string,
        usernameIsError: number,
        passwordIsError: number,
        submitIsWrong: boolean
        
    } => {
        return {
            username: "",
            password: "",
            usernameIsError:0,
            passwordIsError:0,
            submitIsWrong: true
        }
    },
    actions: {
        async login(username: string, password: string): Promise<void> {
            try {

                // 1. Validate whether the username and password are empty, if empty, directly return
                // this validation already finished by form method(trigger:blur)
                // form method use usernameValidate() and passwordValidate()

                

                // 2. Send a request to the backend to login
                const res: AxiosResponse<Result<string>> = await request.post('/user/register', {

                        username: username,
                        password: password
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if(res.data.code == 1){
                        this.submitIsWrong = false;
                    }

                console.log(res);
            } catch (e) {
                console.log(e);
            }
        },
        usernameValidate():void{
            if(this.username.length === 0){
                this.usernameIsError = 1;
            }
        },
        passwordValidate():void{
            if(this.password.length === 0){
                this.passwordIsError = 1;
            }
        }
    },
    /*
    invoke getter 裡面的method時不能用 methodName()
    這是pinia store的規則 
    */
    getters: {
        /**
         * @description: Validate whether the username and password are empty
         * @return {boolean}
         * @date: 2021/5/30 16:47
         * @param
         */
        isEmpty(): boolean {
            return this.username.length == 0 || this.password.length == 0;

        }
    }

})