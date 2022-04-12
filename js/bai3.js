// Quy đổi tiền
/**
 * KHỐI 1:
 * - 1USD = 23500
 * - số tiền (USD)
 * KHỐI 2:
 * - tạo biến: tienUSD, tienVND
 * - tính tiền quy đổi: tienVND=tienUSD*23500
 * KHỐI 3:
 * - in ra số tiền đã quy đổi
 */
var tienUSD = 15;
var tienVND = 0;
tienVND = tienUSD * 23500;
console.log("Tổng tiền: " + tienVND.toLocaleString() +" VND");