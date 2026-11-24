# VIValue · Tra cứu đơn giá nhà ở & công trình xây dựng (Cà Mau)

![VIValue](icons/logo-full.jpg)

_Vietnamese Asset Intelligence · Powered by Hải Đăng_

Công cụ tra cứu nhanh đơn giá bồi thường nhà, công trình xây dựng, cây trồng, vật nuôi khi Nhà nước thu hồi đất theo **Quyết định số 034/2025/QĐ-UBND ngày 01/10/2025 của UBND tỉnh Cà Mau** (hiệu lực từ 01/10/2025), kèm **Suất vốn đầu tư xây dựng nhà ở năm 2025** của Bộ Xây dựng.

> Công cụ chỉ để tham khảo, không thay thế văn bản quy phạm pháp luật. Khi lập phương án bồi thường phải đối chiếu văn bản gốc.

## Tính năng

- 8 phụ lục: Nhà ở (A), Công trình XD (B), Bộ phận cấu tạo (C), Điều chỉnh (D), Cây trồng, Thủy sản, Quyết định & Quy định, Suất vốn BXD.
- Tìm kiếm trên **tất cả phụ lục** cùng lúc, không cần gõ dấu, không cần gõ liền cụm (vd: `tường 20`, `gieng khoan`); từ khóa được tô sáng, số kết quả hiện trên từng tab.
- Hệ số **KT** theo năm (Mục D.VIII, hoặc nhập tay) và **KV = 1,30** cho Hòn Khoai, Hòn Chuối; hiện song song đơn giá gốc và giá sau hệ số.
- **Bảng kê tạm tính**: bấm `+` trên dòng đơn giá, nhập khối lượng, tự nhân hệ số và cộng tổng; xuất Excel (.xlsx), in; lưu lại trên máy.
- Sao chép một dòng đơn giá, link chia sẻ đúng tab và từ khóa (vd: `index.html#tab=ct&q=gieng+khoan`).
- Sidebar mục lục trên máy tính, ngăn kéo trên điện thoại; công tắc sáng/tối kiểu iOS.
- Cài lên màn hình điện thoại và dùng offline (PWA) khi mở qua `https://` (vd GitHub Pages). Trên iPhone: mở link bằng Safari → nút Chia sẻ → **Thêm vào MH chính**; biểu tượng và tên VIValue sẽ hiện trên màn hình.

## Cách dùng

- **Trực tuyến:** bật GitHub Pages cho repo (Settings → Pages → Deploy from branch `main`, thư mục `/`), rồi mở link Pages.
- **Trên máy:** tải cả thư mục (Code → Download ZIP), giải nén và mở `index.html`. Cần giữ `index.html` và `data.js` cùng thư mục.

## Cập nhật dữ liệu

Toàn bộ dữ liệu nằm trong `data.js`, mỗi mục một dòng. Sau khi sửa:

1. Đổi `DATA_VERSION` ở đầu `data.js` thành ngày cập nhật.
2. Chạy `node scripts/check-data.js` để kiểm tra (mã hiệu trùng, đơn giá không hợp lệ, đơn vị lạ).
3. Đổi tên `CACHE` trong `sw.js` để máy đã cài bản offline tải dữ liệu mới.

Các trường của một mục: `g` nhóm, `s` tiểu nhóm, `ma` mã hiệu, `st` STT, `t` mô tả, `u` đơn vị tính, `p` đơn giá (đồng; tab BXD là nghìn đồng), `n` ghi chú khi không có giá, `v` bảng giá nhiều cột, `b` đoạn văn bản điều khoản, `h` bảng HTML, `lv` cấp đề mục.

## Cần đối chiếu văn bản gốc

- `GK-01.02` đang dùng cho hai dòng (STT 325 và 326, giếng khoan 49–60mm và 60–90mm).
