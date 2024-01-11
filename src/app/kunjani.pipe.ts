import { Pipe, PipeTransform } from "@angular/core";
import { __values } from "tslib";
@Pipe({
    name: "filter",
    
})
export class kunjaniPipe implements PipeTransform{
    transform(sula:string): string{
        return sula.length>10?`${sula.substring(0,10)}...`:sula
    }
}