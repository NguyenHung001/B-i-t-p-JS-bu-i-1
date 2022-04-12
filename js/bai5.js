// Tính tổng 2 ký số
/**
 * KHỐI 1:
 * - số có 2 cữ số
 * KHỐI 2:
 * - tạo biến: number, sum 
 * - tính tổng 2 ký số: tách hàng chục va hang đơn vị va tính tổng
 * KHÓI 3:
 * - in ra kết quả sum
 */
var number = 76;
var sum = 0;
sum = (Math.floor(number/10)) + (number%10);
console.log("Tổng 2 ký số: " + sum);
