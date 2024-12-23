 
// 定义一个可选参数的函数，可选参数必须放在必选参数后面
export function greet(name: string, greeting?: string): string {
    if (greeting) {
        return  `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!` ;
    }
    
}

 
import AraleQRCode from 'arale-qrcode';