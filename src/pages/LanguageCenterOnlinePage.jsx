import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft, FileText, Send, Globe, Phone, Mail,
  CheckCircle, Sparkles, Bot, Gift, HandMetal, Building2, Languages, Video
} from 'lucide-react'
import { submitToGoogleSheet } from '../utils/googleSheet'

function LanguageCenterOnlinePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ org: '', address: '', name: '', position: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => { 
    e.preventDefault()
    setIsSubmitting(true)
    
    const result = await submitToGoogleSheet({
      formType: 'Online - Trung tâm ngoại ngữ',
      ...form
    })
    
    setIsSubmitting(false)
    
    if (result.success) {
      alert('Cảm ơn Quý Đơn vị đã đăng ký Gói Đồng hành tham gia quy trình chuyển hoá tuyển sinh tự động!')
      setForm({ org: '', address: '', name: '', position: '', phone: '' })
    } else {
      alert('Có lỗi xảy ra, vui lòng thử lại!')
    }
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
            <button onClick={() => navigate('/language-center/profile')} className="flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors">
              <FileText className="w-4 h-4" /> Hồ sơ năng lực
            </button>
            <button onClick={() => navigate('/language-center')} className="flex items-center gap-2 text-[#FFD447] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Trang chủ
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD447] text-slate-900 font-medium mb-4">
            <Languages className="w-4 h-4" />
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
          <p className="text-slate-900 font-bold text-lg mb-2">Kính gửi: Quý Đơn vị luyện thi ngoại ngữ: Tiếng Trung/ Tiếng Hàn/ Tiếng Nhật/ Tiếng Đức/ Tiếng Pháp / Tiếng TBN</p>
          <p className="text-slate-600">
            Công ty TNHH Giải pháp Giáo dục InterEdu xin gửi tới Quý Đơn vị lời chào trân trọng và lời chúc sức khỏe, thành công.
          </p>
        </div>

        {/* Hình thức Online */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#1E63F9] text-sm font-medium">Hình thức 2</p>
              <h2 className="text-xl font-bold text-slate-900">Đồng hành tham gia quy trình chuyển hoá tuyển sinh tự động</h2>
            </div>
          </div>

          <p className="text-slate-700 font-medium mb-4">Cộng đồng hướng nghiệp trên nền tảng: conghuongnghiep.edu.vn</p>

          <div className="bg-[#1E63F9]/5 rounded-xl p-5 border border-[#1E63F9]/20 mb-6">
            <p className="text-slate-700 leading-relaxed">
              InterEdu đang vận hành nền tảng hướng nghiệp vì cộng đồng <span className="text-[#1E63F9] font-bold text-lg">hoàn toàn miễn phí</span> dành cho học sinh THPT. Nền tảng cung cấp cho học sinh các bài trắc nghiệm hướng nghiệp, lộ trình hướng nghiệp, các bài thi Đánh giá năng lực, thông tin tuyển sinh của các trường Đại học – Cao đẳng, thông tin tìm hiểu nghề nghiệp. <span className="text-[#1E63F9] font-bold">Tất cả được tích hợp AI</span> để gợi ý những đề xuất thích hợp nhất cho học sinh.
            </p>
          </div>

          {/* Quyền lợi */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">Tham gia nền tảng, Quý Đơn vị sẽ:</h3>
          <div className="space-y-3 mb-6">
            {[
              'Tự động hóa việc cung cấp thông tin tuyển sinh 24/7 cho học sinh.',
              'Tăng tỷ lệ tiếp cận — chuyển đổi thông tin quan tâm từ học sinh.',
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
              Độc quyền cho một loại ngoại ngữ duy nhất trên nền tảng:
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
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Đăng tải toàn bộ Khoá học ghi hình</strong> lên phần Khoá học của nền tảng</span>
              </li>
            </ul>
          </div>

          {/* Cam kết */}
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 mb-6">
            <h4 className="font-bold text-emerald-800 text-xl mb-2 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Cam kết từ InterEdu
            </h4>
            <p className="text-emerald-700">
              Tối thiểu <strong>60 học sinh</strong> đăng ký vào chương trình trong vòng mỗi <strong>12 tháng</strong>.
            </p>
          </div>

          {/* Yêu cầu */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1E63F9]" />
              Quý Đơn vị cần cung cấp:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#1E63F9] rounded-full mt-2 flex-shrink-0"></div>
                <span>Biểu mẫu, đường link chuyển hoá, và kịch bản chăm sóc khách hàng</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#1E63F9] rounded-full mt-2 flex-shrink-0"></div>
                <span>Tài trợ bộ đề kiểm tra năng lực định kỳ của học sinh trên hệ thống để học sinh tham gia làm bài test để được phân tích kết quả</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#1E63F9] rounded-full mt-2 flex-shrink-0"></div>
                <span>Tài trợ <strong>50% doanh thu</strong> các khoá học ghi hình được ghi nhận trên hệ thống. Giá bán ra khoá học sẽ do Quý Đơn vị mặc định</span>
              </li>
            </ul>
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
              <p className="text-sm text-slate-600">tiếp cận trực tiếp với <strong>100,000 học sinh</strong> hàng năm theo năm sinh, khu vực địa lý, trường THPT</p>
              <div className="mt-3 pt-3 border-t border-[#1E63F9]/20">
                <p className="text-sm text-slate-500">5.000.000 VNĐ</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-800">Chi phí thường niên</span>
              </div>
              <p className="text-sm text-slate-600 mb-1">Đã bao gồm 8% VAT</p>
              <p className="text-sm text-slate-600">Căn cứ vào kịch bản chăm sóc và số lượng học sinh truy cập</p>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <p className="text-sm text-slate-500">1.500.000 VNĐ/tháng</p>
              </div>
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
                  <p className="text-sm text-slate-500">500.000 VNĐ/tháng cho 100,000 lượt truy cập mỗi năm</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Biểu mẫu chăm sóc khách hàng</p>
                  <p className="text-sm text-slate-500">500.000 VNĐ/tháng cho cam kết <strong>60 dữ liệu/năm</strong>. Trong trường hợp không đạt dữ liệu thì sẽ gia hạn thời gian cho đủ dữ liệu cam kết. Trong trường hợp vượt quá dữ liệu đã cam kết thì Quý Đơn vị sẽ tài trợ mỗi chi phí phát sinh theo giá trị tương ứng 100.000 VNĐ/dữ liệu</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Chi phí duy trì Chatbot AI</p>
                  <p className="text-sm text-slate-500">1.000.000 VNĐ/tháng cho việc đào tạo AI và hoa hồng chuyển đổi cho InterEdu do Quý Đơn vị thoả thuận. Cam kết chăm sóc tối đa <strong>3,000 học sinh</strong> theo tệp năm sinh, khu vực tuyển sinh mà những học sinh đó chưa đăng ký hay chuyển hoá tư vấn</p>
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
              <li className="flex items-start gap-2"><span className="font-bold text-[#1E63F9]">1.</span><span>Hai bên ký hợp đồng tài trợ</span></li>
              <li className="flex items-start gap-2"><span className="font-bold text-[#1E63F9]">2.</span><span>Quý Đơn vị chuyển khoản <strong>70% chi phí tài trợ</strong> và cung cấp kịch bản tuyển sinh, biểu mẫu, đường link phục vụ cho công việc</span></li>
              <li className="flex items-start gap-2"><span className="font-bold text-[#1E63F9]">3.</span><span>InterEdu đào tạo Chatbot trong vòng <strong>60 ngày</strong> để nghiệm thu thông tin</span></li>
              <li className="flex items-start gap-2"><span className="font-bold text-[#1E63F9]">4.</span><span>Sau nghiệm thu, tài trợ <strong>30% còn lại</strong> và bắt đầu được sử dụng tính phí duy trì</span></li>
              <li className="flex items-start gap-2"><span className="font-bold text-[#1E63F9]">5.</span><span>Chi phí thường niên sẽ được ghi nhận và thanh toán vào đầu mỗi Quý (Tháng 01-Tháng 04-Tháng 07-Tháng 10 hàng năm)</span></li>
            </ul>
          </div>

          {/* Thông báo triển khai */}
          <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-xl p-5 mb-6">
            <p className="text-slate-900 font-semibold text-center">
              🚀 Chúng tôi bắt đầu triển khai và tiến hành khảo sát học sinh các trường THPT trên nền tảng từ ngày <strong>10/01/2026</strong>
            </p>
          </div>

          {/* Form đăng ký */}
          <div className="bg-white rounded-xl p-5 border-2 border-[#1E63F9]/30">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#1E63F9]" />
              Đăng ký Đồng hành tham gia quy trình chuyển hoá tuyển sinh tự động
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
                  <input type="text" required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Tên đơn vị" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ *</label>
                  <input type="text" required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Địa chỉ đơn vị" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên *</label>
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                    placeholder="Số điện thoại" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                <Send className="w-5 h-5" /> {isSubmitting ? 'Đang gửi...' : 'Gửi đăng ký'}
              </button>
            </form>
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6" /> Thông tin liên hệ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-slate-900 mb-3">Công ty TNHH Giải pháp Giáo dục InterEdu</p>
              <div className="space-y-2 text-slate-700 text-sm">
                <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#1E63F9]" />
                  <a href="https://www.conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" className="text-[#1E63F9] hover:underline">www.conghuongnghiep.edu.vn</a>
                </p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#1E63F9]" /> bach.nguyen@interedu.ai.vn</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1E63F9]" /> 1900-636866</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-slate-900 mb-3">Đại diện liên hệ</p>
              <div className="space-y-2 text-slate-700 text-sm">
                <p className="font-semibold">Nguyễn Gia Bách</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1E63F9]" /> 0976959516 (Zalo)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/80">
          <p className="mb-2">Xin chân thành cảm ơn và kính chúc Quý Đơn vị ngày càng phát triển bền vững!</p>
          <p className="text-white/60 text-sm">Trân trọng,</p>
          <p className="font-bold text-[#FFD447]">Đây là chương trình vì cộng động, Quý Trường (hoặc Quý Đơn vị) có thể liên hệ trực tiếp với chúng tôi để sử dụng cổng hướng nghiệp phục vụ cho mục tiêu tuyển sinh riêng của Quý Trường ( hoặc Quý Đơn vị)</p>
          <p className=" mt-3 font-bold text-[#FFD447]">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</p>
        </div>
      </div>
    </section>
  )
}

export default LanguageCenterOnlinePage
