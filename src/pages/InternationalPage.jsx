import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft, FileText, Info, Send, Globe, Phone, Mail,
  Building2, Users, CheckCircle, Sparkles, Bot,
  Gift, ExternalLink, HandMetal
} from 'lucide-react'

function InternationalPage() {
  const navigate = useNavigate()
  const [form1, setForm1] = useState({ choice: '', org: '', name: '', position: '', phone: '' })
  const [form2, setForm2] = useState({ org: '', address: '', name: '', position: '', phone: '' })

  const handleSubmit1 = (e) => { e.preventDefault(); alert('Cảm ơn Quý Đơn vị đã đăng ký Gói đồng hành trực tiếp!') }
  const handleSubmit2 = (e) => { e.preventDefault(); alert('Cảm ơn Quý Đơn vị đã đăng ký đồng hành cộng đồng hướng nghiệp!') }

  return (
    <section className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow border overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-bold text-lg text-slate-900">InterEdu</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/international/about')} className="flex items-center gap-2 text-slate-600 font-medium hover:text-[#1E63F9] transition-colors">
              <Info className="w-4 h-4" /> Về chúng tôi
            </button>
            <button onClick={() => navigate('/international/profile')} className="flex items-center gap-2 text-slate-600 font-medium hover:text-[#1E63F9] transition-colors">
              <FileText className="w-4 h-4" /> Hồ sơ năng lực
            </button>
            <button onClick={() => navigate('/international')} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Trang chủ
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E63F9]/10 text-[#1E63F9] font-medium mb-4">
            <Globe className="w-4 h-4" />
            Đơn vị tuyển sinh – đào tạo quốc tế
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">THƯ NGỎ</h1>
          <p className="text-slate-600">Kính gửi: Quý Đơn vị tuyển sinh – đào tạo quốc tế</p>
        </div>

        {/* Lời chào */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong className="text-[#1E63F9]">Công ty TNHH Giải pháp Giáo dục InterEdu</strong> xin gửi tới Quý Đơn vị lời chào trân trọng và lời chúc sức khỏe, thành công.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Trong những năm gần đây, nhu cầu định hướng nghề nghiệp và tiếp cận thông tin tuyển sinh chính thống của học sinh THPT ngày càng tăng. Nhằm hỗ trợ các em học sinh lựa chọn con đường học tập phù hợp cũng như tạo cầu nối tuyển sinh hiệu quả giữa các cơ sở đào tạo và nhà trường phổ thông, InterEdu thành lập một <strong>cộng đồng hướng nghiệp hoàn toàn miễn phí</strong> với học sinh từ lớp 8 – đến lớp 12.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Cộng đồng hướng nghiệp sẽ được sinh hoạt dưới hai hình thức: <strong>chương trình hướng nghiệp trực tiếp</strong> tại các trường THPT và <strong>chương trình hướng nghiệp trên nền tảng tích hợp AI</strong> miễn phí{' '}
            <a href="https://conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" className="text-[#1E63F9] font-semibold hover:underline">
              conghuongnghiep.edu.vn
            </a>.
          </p>
        </div>

        {/* Hợp tác */}
        <div className="bg-gradient-to-r from-[#1E63F9]/5 to-[#1E63F9]/10 rounded-2xl p-6 border border-[#1E63F9]/20 mb-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Trong quá trình phát triển cộng đồng, InterEdu sẵn sàng hợp tác với Quý Đơn vị nếu Quý Đơn vị muốn sử dụng hệ thống khảo sát & hướng nghiệp <strong>conghuongnghiep.edu.vn</strong> để lan toả tới học sinh, cũng như chúng tôi cũng có thể đồng hành cùng Quý Đơn vị trong việc phát động, tổ chức các cuộc thi dành cho học sinh.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Với mong muốn đồng hành cùng Quý Đơn vị trong công tác truyền thông – tuyển sinh, InterEdu trân trọng kính mời Quý Đơn vị tham gia theo <strong className="text-[#1E63F9]">hai hình thức:</strong>
          </p>
        </div>

        {/* HÌNH THỨC 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Đồng hành cùng nhà trường các trường THPT</h2>
              <p className="text-emerald-600 font-medium">Tuyển sinh trực tiếp tại các bàn tư vấn tại Ngày hội Hướng nghiệp THPT</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {[
              'Gian tư vấn trực tiếp tại trường THPT, giao lưu – giới thiệu chương trình đào tạo.',
              'Tư vấn hướng nghiệp, hướng dẫn chọn ngành – chọn trường.',
              'Tăng nhận diện thương hiệu tại tệp học sinh THPT và phụ huynh địa phương.',
              'Kết nối trực tiếp với Ban Giám hiệu và giáo viên chủ nhiệm các trường.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Chi phí gian hàng */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">Chi phí gian hàng:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-emerald-800">Gói A</span>
              </div>
              <p className="text-2xl font-black text-emerald-600 mb-1">15.000.000 VNĐ</p>
              <p className="text-sm text-emerald-700 mb-2">+ 8% VAT</p>
              <p className="text-sm text-slate-600">Cho <strong>10 trường THPT công lập bất kỳ</strong> mà InterEdu tổ chức</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-800">Gói B</span>
              </div>
              <p className="text-2xl font-black text-blue-600 mb-1">30.000.000 VNĐ</p>
              <p className="text-sm text-blue-700 mb-2">+ 8% VAT</p>
              <p className="text-sm text-slate-600">Cho <strong>10 trường THPT công lập</strong> mà đơn vị muốn tham dự khi InterEdu tổ chức</p>
            </div>
          </div>

          {/* Phương án hợp tác */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <HandMetal className="w-5 h-5 text-[#1E63F9]" />
              Phương án hợp tác
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hai bên ký hợp đồng nguyên tắc, InterEdu sẽ thông báo lịch tổ chức cụ thể tại từng trường <strong>trước 14 ngày làm việc</strong> và thanh toán theo từng trường.
            </p>
          </div>

          {/* Chương trình */}
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-6">
            <h4 className="font-bold text-amber-800 mb-3">Chương trình diễn ra trong 3h30:</h4>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Một diễn giả hướng nghiệp trên sân khấu, truyền tải và cập nhật các thông tin tuyển sinh, kỳ thi cần thiết</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Các phòng tham vấn 1:1 quy tụ hơn 10 diễn giả tham vấn trực tiếp cho học sinh</span>
              </li>
              <li className="flex items-start gap-2">
                <Gift className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Trao tặng các suất học bổng, quà tặng và các nội dung khác</span>
              </li>
            </ul>
          </div>

          {/* Form đăng ký 1 */}
          <div className="bg-white rounded-xl p-5 border-2 border-emerald-200">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-emerald-600" />
              Đăng ký đồng hành trực tiếp
            </h4>
            <form onSubmit={handleSubmit1} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Vui lòng lựa chọn *</label>
                <div className="space-y-2">
                  {[
                    'Không phù hợp với phương án tuyển sinh của Đơn vị',
                    'Đồng ý đồng hành đối với các trường THPT/ khu vực tuyển sinh mà Đơn vị hướng tới',
                    'Mong muốn được truyền thông trên sân khấu và đồng hành cùng các hoạt động khác',
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="choice"
                        value={option}
                        checked={form1.choice === option}
                        onChange={(e) => setForm1({ ...form1, choice: e.target.value })}
                        className="mt-1"
                        required
                      />
                      <span className="text-sm text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
                  <input type="text" required value={form1.org} onChange={(e) => setForm1({ ...form1, org: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Tên đơn vị" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Người đại diện *</label>
                  <input type="text" required value={form1.name} onChange={(e) => setForm1({ ...form1, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Họ và tên" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                  <input type="text" required value={form1.position} onChange={(e) => setForm1({ ...form1, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Chức vụ" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                  <input type="tel" required value={form1.phone} onChange={(e) => setForm1({ ...form1, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Số điện thoại" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                <Send className="w-5 h-5" /> Gửi đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* HÌNH THỨC 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Đồng hành với cộng đồng hướng nghiệp trên nền tảng</h2>
              <a href="https://conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" className="text-[#1E63F9] font-medium hover:underline flex items-center gap-1">
                conghuongnghiep.edu.vn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-[#1E63F9]/5 rounded-xl p-5 border border-[#1E63F9]/20 mb-6">
            <p className="text-slate-700 leading-relaxed">
              InterEdu đang vận hành nền tảng hướng nghiệp vì cộng đồng <strong>hoàn toàn miễn phí</strong> dành cho học sinh THPT. Nền tảng cung cấp cho học sinh các bài trắc nghiệm hướng nghiệp, lộ trình hướng nghiệp, các bài thi Đánh giá năng lực, thông tin tuyển sinh của các trường Đại học – Cao đẳng, thông tin tìm hiểu nghề nghiệp. <strong className="text-[#1E63F9]">Tất cả được tích hợp AI</strong> để gợi ý những đề xuất thích hợp nhất cho học sinh.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-4">Tham gia nền tảng, Quý Trường sẽ:</h3>
          <div className="space-y-3 mb-6">
            {[
              'Tự động hóa việc cung cấp thông tin tuyển sinh 24/7 cho học sinh.',
              'Tăng tỷ lệ tiếp cận — chuyển đổi thông tin quan tâm từ học sinh.',
              'Được độc quyền tích hợp bộ dữ liệu kịch bản chăm sóc khách hàng của đối tác.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E63F9] mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Quyền lợi độc quyền */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 mb-6">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Mỗi hình thức áp dụng độc quyền cho một Quốc gia tư vấn duy nhất trên nền tảng:
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Logo của Đơn vị được gắn trên trang web khu vực bảo trợ hỗ trợ tư vấn cho học sinh</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Được tạo tài khoản / gắn biểu mẫu khai thác thông tin (logo và thông tin của đơn vị) khi học sinh nhập tờ khai ngay sau khi InterEdu tiến hành khảo sát thông tin tại các trường. <strong>Thông tin học sinh đăng nhập sẽ được chuyển hoá về cho Quý Đơn vị</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Được tạo tài khoản <strong>Chatbot AI</strong> kèm theo kịch bản chuyển hoá chăm sóc của Quý Đơn vị (Bao gồm cả link chăm sóc, thu thập thông tin của Quý Đơn vị)</span>
              </li>
            </ul>
          </div>

          {/* Cam kết */}
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 mb-6">
            <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Cam kết từ InterEdu
            </h4>
            <p className="text-emerald-700">
              Tối thiểu <strong>60 học sinh</strong> đăng ký vào chương trình trong vòng mỗi <strong>12 tháng</strong>.
            </p>
          </div>

          {/* Chi phí */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">Chi phí tài trợ:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1E63F9]/5 rounded-xl p-5 border border-[#1E63F9]/20">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-[#1E63F9]" />
                <span className="font-bold text-[#1E63F9]">Đào tạo Chatbot AI</span>
              </div>
              <p className="text-2xl font-black text-[#1E63F9] mb-1">5.000.000 VNĐ</p>
              <p className="text-sm text-slate-600 mb-2">01 lần duy nhất (đã bao gồm 8% VAT)</p>
              <p className="text-xs text-slate-500">Cam kết tiếp cận trực tiếp với <strong>1,000 học sinh</strong> hàng năm theo năm sinh, khu vực địa lý, trường THPT</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-800">Chi phí thường niên</span>
              </div>
              <p className="text-2xl font-black text-amber-600 mb-1">2.000.000 VNĐ/tháng</p>
              <p className="text-sm text-slate-600 mb-2">Đã bao gồm 8% VAT</p>
              <p className="text-xs text-slate-500">Đối với các đơn vị tuyển sinh quốc tế</p>
            </div>
          </div>

          {/* Chi tiết chi phí thường niên */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
            <h4 className="font-bold text-slate-900 mb-4">Chi phí thường niên bao gồm:</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <div className="w-8 h-8 bg-[#1E63F9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 text-[#1E63F9]" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Logo xuất hiện trên Đơn vị bảo trợ chuyên môn</p>
                  <p className="text-sm text-slate-600">500.000 VNĐ/tháng cho 100,000 lượt truy cập mỗi năm</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Biểu mẫu chăm sóc khách hàng</p>
                  <p className="text-sm text-slate-600">500.000 VNĐ/tháng cho cam kết <strong>60 dữ liệu/năm</strong></p>
                  <p className="text-xs text-slate-500 mt-1">Không đạt: gia hạn thời gian. Vượt quá: 100.000 VNĐ/dữ liệu phát sinh</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Chi phí duy trì Chatbot AI</p>
                  <p className="text-sm text-slate-600">1.000.000 VNĐ/tháng cho việc đào tạo AI và hoa hồng chuyển đổi</p>
                  <p className="text-xs text-slate-500 mt-1">Cam kết tham gia chăm sóc tối đa <strong>3,000 học sinh</strong> theo tệp năm sinh, khu vực tuyển sinh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phương án hợp tác */}
          <div className="bg-[#1E63F9]/5 rounded-xl p-5 border border-[#1E63F9]/20 mb-6">
            <h4 className="font-bold text-[#1E63F9] mb-3 flex items-center gap-2">
              <HandMetal className="w-5 h-5" />
              Phương án hợp tác
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">1.</span>
                <span>Hai bên ký hợp đồng tài trợ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">2.</span>
                <span>Quý Đơn vị chuyển khoản <strong>70% chi phí tài trợ</strong> và cung cấp kịch bản tuyển sinh, biểu mẫu, đường link</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">3.</span>
                <span>InterEdu đào tạo Chatbot trong vòng <strong>60 ngày</strong> để nghiệm thu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">4.</span>
                <span>Sau nghiệm thu, Quý Đơn vị tài trợ <strong>30% còn lại</strong> và bắt đầu sử dụng</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">5.</span>
                <span>Chi phí thường niên thanh toán đầu mỗi Quý (Tháng 01 - 04 - 07 - 10)</span>
              </li>
            </ul>
          </div>

          {/* Thông báo triển khai */}
          <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-xl p-5 mb-6">
            <p className="text-slate-900 font-semibold text-center">
              🚀 Chúng tôi bắt đầu triển khai và tiến hành khảo sát học sinh các trường THPT trên nền tảng từ ngày <strong>10/01/2026</strong>
            </p>
          </div>

          {/* Form đăng ký 2 */}
          <div className="bg-white rounded-xl p-5 border-2 border-[#1E63F9]/30">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#1E63F9]" />
              Đăng ký đồng hành cộng đồng hướng nghiệp
            </h4>
            <form onSubmit={handleSubmit2} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
                  <input type="text" required value={form2.org} onChange={(e) => setForm2({ ...form2, org: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Tên đơn vị" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ *</label>
                  <input type="text" required value={form2.address} onChange={(e) => setForm2({ ...form2, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Địa chỉ đơn vị" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên người đăng ký *</label>
                  <input type="text" required value={form2.name} onChange={(e) => setForm2({ ...form2, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Họ và tên" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                  <input type="text" required value={form2.position} onChange={(e) => setForm2({ ...form2, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Chức vụ" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại liên hệ *</label>
                  <input type="tel" required value={form2.phone} onChange={(e) => setForm2({ ...form2, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Số điện thoại" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                <Send className="w-5 h-5" /> Gửi đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* Lời kết */}
        <div className="bg-gradient-to-r from-[#1E63F9]/5 to-emerald-500/5 rounded-2xl p-6 border border-[#1E63F9]/20 mb-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            InterEdu tin rằng sự đồng hành của Quý Đơn vị sẽ góp phần nâng cao chất lượng công tác tư vấn hướng nghiệp tại các trường THPT, đồng thời mang lại <strong className="text-[#1E63F9]">hiệu quả tuyển sinh thiết thực và bền vững</strong>.
          </p>
          <p className="text-slate-700">
            Chúng tôi rất mong nhận được sự quan tâm và hợp tác từ Quý Đơn vị.
          </p>
        </div>

        {/* Thông tin liên hệ */}
        <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6" />
            Thông tin liên hệ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-slate-900 mb-3">Công ty TNHH Giải pháp Giáo dục InterEdu</p>
              <div className="space-y-2 text-slate-700 text-sm">
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#1E63F9]" />
                  <a href="https://www.conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" className="text-[#1E63F9] hover:underline">
                    www.conghuongnghiep.edu.vn
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1E63F9]" />
                  bach.nguyen@interedu.ai.vn
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1E63F9]" />
                  1900-636866
                </p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-slate-900 mb-3">Đại diện liên hệ</p>
              <div className="space-y-2 text-slate-700 text-sm">
                <p className="font-semibold">Nguyễn Gia Bách</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1E63F9]" />
                  0976.959.516 (Zalo)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-600 mb-2">Xin chân thành cảm ơn và kính chúc Quý Đơn vị ngày càng phát triển bền vững!</p>
          <p className="text-slate-500 text-sm">Trân trọng,</p>
          <p className="font-bold text-[#1E63F9]">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</p>
        </div>
      </div>
    </section>
  )
}

export default InternationalPage
