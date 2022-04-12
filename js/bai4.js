// Tính S, C hình chữ nhật
/**
 * KHỐI 1:
 * - chiều dài, chiều rộng
 * KHỐI 2:
 * - tạo biến: chieuDai, chieuRong, sHCN, cHCN
 * - sHCN = chieuDai * chieuRong
 * - cHCN = (chieuDai + cheiuRong) * 2
 * KHỐI 3:
 * - in ra kết quả: sHCN, cHCN
 */
var chieuDai = 20;
var chieuRong = 34.6;
var sHCN = 0;
var cHCN = 0;
sHCN = chieuDai * chieuRong;
cHCN = (chieuDai + chieuRong) *2;
console.log("Chu vi HCN: " + cHCN + "\n" + "Diện tích HCN: " + sHCN);