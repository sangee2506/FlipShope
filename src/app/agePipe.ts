import {Pipe, PipeTransform} from '@angular/core'  
import * as moment from 'moment';
@Pipe({  
    name:'Age'  
})  
export class agePipe implements PipeTransform {  
  
    transform(value:Date):number 
    {  
        if(!value)
          return
        
        else
          return moment().diff(value,'years')
            
          
    }
}