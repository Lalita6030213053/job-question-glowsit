import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    this.fib(12);                                            //ข้อ 1 Fibonacci Sequence
    this.shift(['john', 'jane', 'sarah', 'alex'], 'left', 2) //ข้อ 2 Array shift
    this.Vowels('abracadabra');                              //ข้อ 3 Vowels
  }

  fib(number: number) { 
    let a = 0,
      b = 1,
      fib = 0

    for (let i = 1; i < number; ++i) { // วนเช็คตามค่า number ที่รับมา
      const c = a + b; 
      a = b;
      b = c;

      fib = b;
    }
    console.log(fib);
  }

  shift(arr: any[], director: string, position: number) { //function shift รับพารามิเตอร์ 3 ตัว
    let arr1 = arr;
    let arr2 = [],
      finalArray = []

    for (let i = 0; i < position; i++) { // วนลูปตามค่า position
      if (director === 'left') {
        arr2.push(arr1.shift());
      } else if (director === 'rigt') {
        arr2.push(arr1.pop());
      } else {
        console.log('only left or right or wrong number');
      }
    }

    if (director === 'left') {  // เช็ค director เพื่อรวม array
      finalArray = arr1.concat(arr2)
    } else if (director === 'rigt') {
      finalArray = arr2.concat(arr1)
    } else {
      console.log('only left or right or wrong number');
    }

    console.log(finalArray);
  }

  Vowels(str: string) { 
    let count: number = 0,
        strNum: string = '';

    for (let i = 0; i < str.length; i++) { 
      strNum = str.charAt(i);
      
      if (strNum === 'a' || strNum === 'e' || strNum === 'i' || strNum === 'o' || strNum === 'u'){ // เช็คสระจาก string ที่รับเข้ามา
        count = count + 1 ;
      } else { }
    }

    console.log(count);
  }

}
