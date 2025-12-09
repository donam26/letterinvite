import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft, FileText, Info, Send, Globe, Phone, Mail,
  Users, CheckCircle, Sparkles, Gift, HandMetal, Bot, ExternalLink
} from 'lucide-react'

function OnlinePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ org: '', address: '', name: '', position: '', phone: '' })

  const handleSubmit = (e) => { 
    e.preventDefault()
    alert('Cảm ơn Quý Đơn vị đã đăng ký Gói đồng hành Online!') 
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4]">
      <header className="bg-white/10 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-bold text-lg text-white">InterEdu</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/about')} className="flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors">
              <Info className="w-4 h-4" /> Về chúng tôi
            </button>
            <button onClick={() => navigate('/profile')} className="flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors">
              <FileText className="w-4 h-4" /> Hồ sơ năng lực
            </button>
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#FFD447] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Trang chủ
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD447] text-slate-900 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            THƯ NGỎ HỢP TÁC TUYỂN SINH 2024 – 2025
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Đồng hành Hướng nghiệp
          </h1>
          <p className="text-2xl sm:text-3xl font-black text-[#FFD447]">
            & Tuyển sinh cùng InterEdu
          </p>
        </div>

        {/* Kính gửi */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-slate-900 font-bold text-lg mb-2">Kính gửi: Quý Trường Đại học, Cao đẳng</p>
          <p className="text-slate-600">
            Công ty TNHH Giải pháp Giáo dục InterEdu xin gửi tới Quý Trường lời chào trân trọng và lời chúc sức khỏe, thành công.
          </p>
        </div>

        {/* Giới thiệu */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
          <p className="text-white/90 leading-relaxed mb-4">
            Trong những năm gần đây, nhu cầu định hướng nghề nghiệp và tiếp cận thông tin tuyển sinh chính thống của học sinh THPT ngày càng tăng.
          </p>
          <p className="text-white/90 leading-relaxed mb-4">
            Nhằm hỗ trợ các em học sinh lựa chọn con đường học tập phù hợp cũng như tạo cầu nối tuyển sinh hiệu quả giữa các cơ sở đào tạo và nhà trường phổ thông, <span className="text-[#FFD447] font-semibold">InterEdu</span> thành lập một cộng đồng hướng nghiệp <span className="text-[#FFD447] font-bold underline">hoàn toàn miễn phí</span> với học sinh từ lớp 8 – lớp 12.
          </p>
          <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
            <Globe className="w-5 h-5 text-[#FFD447]" />
            <div>
              <p className="text-white/70 text-sm">Nền tảng hướng nghiệp tích hợp AI</p>
              <a href="https://conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" className="text-[#FFD447] font-bold hover:underline">
                conghuongnghiep.edu.vn
              </a>
            </div>
          </div>
        </div>

        {/* 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#1E63F9]/10 flex items-center justify-center">
              <Bot className="w-7 h-7 text-[#1E63F9]" />
            </div>
            <p className="text-2xl font-black text-slate-900">AI</p>
            <p className="text-slate-500 text-sm">Nền tảng tích hợp</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#FFD447]/20 flex items-center justify-center">
              <Globe className="w-7 h-7 text-[#FFD447]" />
            </div>
            <p className="text-2xl font-black text-slate-900">24/7</p>
            <p className="text-slate-500 text-sm">Chatbot AI tuyển sinh</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Users className="w-7 h-7 text-emerald-500" />
            </div>
            <p className="text-2xl font-black text-emerald-600">Miễn phí</p>
            <p className="text-slate-500 text-sm">12 tháng đầu</p>
          </div>
        </div>

        {/* Hình thức Online */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#1E63F9] text-sm font-medium">Hình thức 2</p>
              <h2 className="text-xl font-bold text-slate-900">Đồng hành Online</h2>
            </div>
          </div>

          <p className="text-slate-700 font-medium mb-4">Cộng đồng hướng nghiệp trên website</p>

          <div className="bg-[#1E63F9]/5 rounded-xl p-5 border border-[#1E63F9]/20 mb-6">
            <p className="text-slate-700 leading-relaxed">
              InterEdu đang vận hành nền tảng hướng nghiệp vì cộng đồng <span className="text-[#1E63F9] font-bold text-lg">hoàn toàn miễn phí</span> dành cho học sinh THPT. Nền tảng cung cấp cho học sinh các bài trắc nghiệm hướng nghiệp, lộ trình hướng nghiệp, các bài thi Đánh giá năng lực, thông tin tuyển sinh. <span className="text-[#1E63F9] font-bold">Tất cả được tích hợp AI</span> để gợi ý những đề xuất thích hợp nhất cho học sinh.
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {[
              'Chatbot AI tuyển sinh 24/7',
              'Miễn phí 12 tháng đầu',
              'Tiếp cận 1,000+ học sinh/năm',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E63F9] flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-4">Tham gia nền tảng, Quý Trường sẽ:</h3>
          <div className="space-y-3 mb-6">
            {[
              'Tự động hóa việc cung cấp thông tin tuyển sinh 24/7 cho học sinh.',
              'Tăng tỷ lệ tiếp cận — chuyển đổi thông tin quan tâm từ học sinh.',
              'Được tích hợp bộ dữ liệu ngành, chương trình đào tạo, điểm chuẩn, học phí… một cách trực quan.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1E63F9] mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Cam kết */}
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 mb-6">
            <h4 className="font-bold text-emerald-800 text-xl mb-2 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Cam kết từ InterEdu
            </h4>
            <p className="text-emerald-700">
              Kết nối với các học viên phù hợp với tiêu chí xét tuyển của các Trường ĐH – CĐ: Khu vực xét tuyển, năng lực học tập.
            </p>
          </div>

          {/* Chi phí */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">Chi phí tài trợ:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1E63F9]/5 rounded-xl p-5 border border-[#1E63F9]/20">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-5 h-5 text-[#1E63F9]" />
                <span className="font-bold text-[#1E63F9]">Đào tạo Chatbot AI</span>
              </div>
              <p className="text-sm text-slate-600 mb-1">01 lần duy nhất (đã bao gồm 8% VAT)</p>
              <p className="text-lg font-bold text-[#1E63F9]">Cam kết</p>
              <p className="text-sm text-slate-600">tiếp cận trực tiếp với <strong>1,000 học sinh</strong> hàng năm</p>
              <div className="mt-3 pt-3 border-t border-[#1E63F9]/20">
                <p className="text-sm text-slate-500">5.000.000 VNĐ</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-800">Chi phí thường niên</span>
              </div>
              <p className="text-sm text-slate-600 mb-1">Đã bao gồm 8% VAT</p>
              <p className="text-sm text-slate-600">Căn cứ vào kịch bản chăm sóc và số lượng học sinh truy cập</p>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <p className="text-sm text-slate-500">500.000 VNĐ/tháng</p>
              </div>
            </div>
          </div>

          {/* Ưu đãi miễn phí */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-5 mb-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-2xl">Miễn phí</p>
                <p className="text-white/90">thường niên 12 tháng đầu tiên</p>
              </div>
            </div>
          </div>

          {/* Yêu cầu */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1E63F9]" />
              Quý Trường cần cung cấp:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#1E63F9] rounded-full mt-2 flex-shrink-0"></div>
                <span>Quy chế tuyển sinh của trường</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#1E63F9] rounded-full mt-2 flex-shrink-0"></div>
                <span>Kịch bản tư vấn tuyển sinh</span>
              </li>
            </ul>
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
                <span>Quý Trường chuyển khoản <strong>70% chi phí tài trợ</strong> và cung cấp quy chế tuyển sinh, kịch bản tuyển sinh</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">3.</span>
                <span>InterEdu đào tạo Chatbot trong vòng <strong>60 ngày</strong> để nghiệm thu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">4.</span>
                <span>Sau nghiệm thu, Quý Trường tài trợ <strong>30% còn lại</strong> và bắt đầu sử dụng <strong>12 tháng</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#1E63F9]">5.</span>
                <span>Sau 12 tháng, nếu có nhu cầu sẽ tài trợ chi phí thường niên cho gói 12 tháng tiếp theo</span>
              </li>
            </ul>
          </div>

          {/* Form đăng ký */}
          <div className="bg-white rounded-xl p-5 border-2 border-[#1E63F9]/30">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#1E63F9]" />
              Đăng ký đồng hành Online
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
                  <input type="text" required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Tên trường" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ *</label>
                  <input type="text" required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Địa chỉ trường" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên người đăng ký *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Họ và tên" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                  <input type="text" required value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Chức vụ" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại liên hệ *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
          <p className="text-white/90 leading-relaxed mb-4">
            InterEdu tin rằng sự đồng hành của Quý Trường sẽ góp phần nâng cao chất lượng công tác tư vấn hướng nghiệp tại các trường THPT, đồng thời mang lại <span className="text-[#FFD447] font-bold">hiệu quả tuyển sinh thiết thực và bền vững</span>.
          </p>
          <p className="text-white/90">
            Chúng tôi rất mong nhận được sự quan tâm và hợp tác từ Quý Trường.
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
        <div className="text-center text-white/80">
          <p className="mb-2">Xin chân thành cảm ơn và kính chúc Quý Trường ngày càng phát triển bền vững!</p>
          <p className="text-white/60 text-sm">Trân trọng,</p>
          <p className="font-bold text-[#FFD447]">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</p>
        </div>
      </div>
    </section>
  )
}

export default OnlinePage
