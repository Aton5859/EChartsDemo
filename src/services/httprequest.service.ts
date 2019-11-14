import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class httpRequest {
    private serviceAdd;
    public http;

    constructor(
        Http: HttpClient
    ) {
        this.http = Http;
    }

    public get(url, message, params: Object, res?: Function) {
        try {
            let that: this = this;
            that.http.get(that.serviceAdd + "/edi.stocktask_Web/v1/" + url, { params })
                .subscribe(result => {
                    res(result);
                }, error => {
                });
        } catch (error) {
        }

    }

    public post(url, message, body?: any, options?: { params?: HttpParams | { [param: string]: string | string[]; } }, res?: Function) {
        try {
            let that: this = this;
            that.http.post(that.serviceAdd + "/edi.stocktask_Web/v1/" + url, body, options)
                .subscribe(result => {
                    res(result);
                }, error => {
                });
        } catch (error) {
        }
    }

    public put(url, message, body?: any, options?: { params?: HttpParams | { [param: string]: string | string[]; } }, res?: Function) {
        try {
            let that: this = this;
            that.http.put(that.serviceAdd + "/edi.stocktask_Web/v1/" + url, body, options)
                .subscribe(result => {
                    res(result);
                }, error => {
                })
        } catch (error) {
        }
        /* .then(resu =>{

        })
        .error(error =>{

        }) */
    }
}