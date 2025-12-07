import { useState } from 'react'
import { 
  GraduationCap, Users, Bot, CheckCircle, Phone, Mail, Globe, 
  School, ArrowRight, Gift, Send, ChevronRight, Building2, ChevronLeft,
  Sparkles, Shield, Star, MessageCircle, ExternalLink, MapPin,
  Briefcase, Award, Target, BookOpen, Clock, Calendar, FileText,
  Zap, TrendingUp, UserCheck, Headphones, Database, DollarSign
} from 'lucide-react'

// Trang chủ - Thư ngỏ
function HomePage({ onNavigate }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[5%] w-[500px] h-[500px] bg-[#FFD447]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <span className="font-bold text-xl text-white">InterEdu</span>
              <p className="text-xs text-white/70">Giải pháp Giáo dục</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/80 text-sm">
            <Phone className="w-4 h-4" />
            <span>1900-636866</span>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-[#FFD447]" />
            <span className="text-sm text-white font-medium">Thư ngỏ hợp tác tuyển sinh 2025 – 2026</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center mb-6 leading-tight">
          THƯ NGỎ
          <span className="block mt-2 bg-gradient-to-r from-[#FFD447] via-[#FFE066] to-[#FFC107] bg-clip-text text-transparent">
            Hợp tác Tuyển sinh
          </span>
        </h1>

        {/* Kính gửi */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-white mb-2">Kính gửi:</h2>
          <p className="text-white/90 text-lg">
            Quý Đơn vị Tuyển sinh – Đào tạo Quốc tế
          </p>
        </div>

        {/* Giới thiệu */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 max-w-4xl mx-auto">
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong className="text-[#1E63F9]">Công ty TNHH Giải pháp Giáo dục InterEdu</strong> xin gửi tới Quý Đơn vị lời chào trân trọng và lời chúc sức khỏe, thành công.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Trong những năm gần đây, nhu cầu định hướng nghề nghiệp và tiếp cận thông tin tuyển sinh chính thống của học sinh THPT ngày càng tăng cao. Nhằm hỗ trợ các em học sinh lựa chọn con đường học tập phù hợp, đồng thời tạo cầu nối tuyển sinh hiệu quả giữa các cơ sở đào tạo và nhà trường phổ thông, InterEdu đã thành lập <strong>Cộng đồng Hướng nghiệp miễn phí</strong> dành cho học sinh từ lớp 8 đến lớp 12.
          </p>
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-700 font-medium mb-2">Cộng đồng hoạt động qua hai hình thức:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-slate-600">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Chương trình hướng nghiệp <strong>trực tiếp</strong> tại các trường THPT</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Nền tảng hướng nghiệp tích hợp <strong>AI miễn phí</strong>: <a href="https://conghuongnghiep.edu.vn" target="_blank" className="text-[#1E63F9] font-bold hover:underline">conghuongnghiep.edu.vn</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 max-w-4xl mx-auto">
          {[
            { icon: School, value: '100+', label: 'Trường THPT đối tác', color: 'from-[#1E63F9] to-[#0D4FD9]' },
            { icon: Bot, value: 'AI', label: 'Nền tảng tích hợp AI', color: 'from-[#FFD447] to-[#FFC107]', dark: true },
            { icon: Users, value: '100,000+', label: 'Học sinh tiếp cận', color: 'from-emerald-500 to-teal-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 ${item.dark ? 'text-slate-900' : 'text-white'}`} />
              </div>
              <div className="text-2xl font-black text-slate-900">{item.value}</div>
              <div className="text-[#1E63F9] font-semibold text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Mời hợp tác */}
        <p className="text-white/90 text-center mb-6 text-lg">
          Trân trọng kính mời Quý Đơn vị tham gia đồng hành theo <strong>hai hình thức</strong>:
        </p>
        
        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <button onClick={() => onNavigate('offline')}
            className="group bg-white rounded-2xl p-6 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors flex-shrink-0">
                <School className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-amber-600 mb-1">HÌNH THỨC 1</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Đồng hành tại các trường THPT</h3>
                <p className="text-slate-500 text-sm">Ngày hội Hướng nghiệp – Tuyển sinh trực tiếp tại gian tư vấn</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-amber-600 font-medium text-sm">
              Xem chi tiết <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
          
          <button onClick={() => onNavigate('online')}
            className="group bg-white rounded-2xl p-6 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500 flex items-center justify-center transition-colors flex-shrink-0">
                <Bot className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-emerald-600 mb-1">HÌNH THỨC 2</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Đồng hành trên nền tảng Online</h3>
                <p className="text-slate-500 text-sm">Chatbot AI, Logo bảo trợ, Biểu mẫu thu thập dữ liệu học sinh</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-emerald-600 font-medium text-sm">
              Xem chi tiết <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        {/* Footer note */}
        <p className="text-white/70 text-center mt-10 text-sm max-w-2xl mx-auto">
          InterEdu tin rằng sự đồng hành của Quý Đơn vị sẽ góp phần nâng cao chất lượng công tác tư vấn hướng nghiệp, đồng thời mang lại hiệu quả tuyển sinh thiết thực và bền vững.
        </p>
      </div>
    </section>
  )
}


// Hình thức 1: Đồng hành Offline tại trường THPT
function OfflinePage({ onBack, onNavigate }) {
  const [selectedOption, setSelectedOption] = useState('')
  const [form, setForm] = useState({ org: '', rep: '', position: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cảm ơn Quý Đơn vị đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.')
  }

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow border overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-bold text-lg text-slate-900">InterEdu</span>
          </div>
          <button onClick={onBack} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
            <ChevronLeft className="w-4 h-4" /> Quay lại
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
            <School className="w-4 h-4" /> HÌNH THỨC 1
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Đồng hành tại các trường THPT</h1>
          <p className="text-slate-600">Ngày hội Hướng nghiệp – Tuyển sinh trực tiếp</p>
        </div>

        {/* Quyền lợi */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Gift className="w-6 h-6 text-amber-500" /> Quyền lợi của Quý Đơn vị
          </h3>
          <ul className="space-y-3">
            {[
              'Gian tư vấn trực tiếp tại trường THPT, giao lưu và giới thiệu chương trình đào tạo',
              'Tư vấn hướng nghiệp, hướng dẫn chọn ngành – chọn trường cho học sinh',
              'Tăng nhận diện thương hiệu với học sinh THPT và phụ huynh địa phương',
              'Kết nối trực tiếp với Ban Giám hiệu và giáo viên chủ nhiệm các trường',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nội dung chương trình */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" /> Nội dung chương trình (3 giờ 30 phút)
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
              <span>Diễn giả hướng nghiệp trên sân khấu, cập nhật thông tin tuyển sinh và các kỳ thi cần thiết</span>
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
              <span>Phòng tham vấn 1:1 quy tụ hơn <strong>10 diễn giả</strong> tham vấn trực tiếp cho học sinh</span>
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
              <span>Trao tặng các suất học bổng, quà tặng và các nội dung khác</span>
            </li>
          </ul>
        </div>

        {/* Bảng giá */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-[#1E63F9]" /> Chi phí gian hàng
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
              <div className="text-sm font-bold text-blue-600 mb-2">GÓI A</div>
              <div className="text-2xl font-black text-slate-900 mb-1">15.000.000 VNĐ</div>
              <div className="text-sm text-slate-500 mb-3">(+8% VAT)</div>
              <p className="text-slate-700 text-sm">
                Cho <strong>10 trường THPT công lập bất kỳ</strong> mà InterEdu tổ chức
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200">
              <div className="text-sm font-bold text-amber-600 mb-2">GÓI B</div>
              <div className="text-2xl font-black text-slate-900 mb-1">30.000.000 VNĐ</div>
              <div className="text-sm text-slate-500 mb-3">(+8% VAT)</div>
              <p className="text-slate-700 text-sm">
                Cho <strong>10 trường THPT công lập theo yêu cầu</strong> của Đơn vị khi InterEdu tổ chức
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-600" /> Phương thức hợp tác
            </h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Hai bên ký hợp đồng nguyên tắc</li>
              <li>• InterEdu thông báo lịch tổ chức cụ thể tại từng trường trước <strong>14 ngày làm việc</strong></li>
              <li>• Thanh toán theo từng trường</li>
            </ul>
          </div>
        </div>

        {/* Form đăng ký */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Send className="w-6 h-6 text-[#1E63F9]" /> Phiếu đăng ký Hình thức 1
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Lựa chọn */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">Vui lòng lựa chọn: *</label>
              <div className="space-y-3">
                {[
                  { value: 'not-suitable', label: 'Không phù hợp với phương án tuyển sinh của Đơn vị' },
                  { value: 'agree', label: 'Đồng ý đồng hành tại các trường THPT/khu vực tuyển sinh mà Đơn vị hướng tới' },
                  { value: 'stage', label: 'Mong muốn được truyền thông trên sân khấu và đồng hành các hoạt động khác' },
                ].map((opt) => (
                  <label key={opt.value} className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedOption === opt.value ? 'border-[#1E63F9] bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input
                      type="radio"
                      name="option"
                      value={opt.value}
                      checked={selectedOption === opt.value}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="mt-1"
                    />
                    <span className="text-slate-700">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
                <input type="text" required value={form.org} onChange={(e) => setForm({...form, org: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                  placeholder="Nhập tên đơn vị" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Người đại diện *</label>
                <input type="text" required value={form.rep} onChange={(e) => setForm({...form, rep: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                  placeholder="Họ và tên" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                <input type="text" required value={form.position} onChange={(e) => setForm({...form, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                  placeholder="Chức vụ" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                  placeholder="Số điện thoại liên hệ" />
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
              <Send className="w-5 h-5" /> Gửi đăng ký Hình thức 1
            </button>
          </form>
        </div>

        {/* Link sang hình thức 2 */}
        <div className="mt-8 text-center">
          <button onClick={() => onNavigate('online')} className="inline-flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
            Xem Hình thức 2: Đồng hành trên nền tảng Online <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}


// Hình thức 2: Đồng hành Online trên nền tảng
function OnlinePage({ onBack, onNavigate }) {
  const [form, setForm] = useState({ org: '', address: '', name: '', position: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cảm ơn Quý Đơn vị đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.')
  }

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow border overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-10 h-10 object-contain" />
            </div>
            <span className="font-bold text-lg text-slate-900">InterEdu</span>
          </div>
          <button onClick={onBack} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
            <ChevronLeft className="w-4 h-4" /> Quay lại
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">
            <Bot className="w-4 h-4" /> HÌNH THỨC 2
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Đồng hành trên nền tảng Online</h1>
          <a href="https://conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-[#1E63F9] font-bold hover:underline">
            conghuongnghiep.edu.vn <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Giới thiệu nền tảng */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            InterEdu đang vận hành nền tảng hướng nghiệp <strong>vì cộng đồng, hoàn toàn miễn phí</strong> dành cho học sinh THPT. Nền tảng cung cấp:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: FileText, label: 'Bài trắc nghiệm hướng nghiệp' },
              { icon: Target, label: 'Lộ trình hướng nghiệp cá nhân' },
              { icon: Award, label: 'Bài thi Đánh giá năng lực' },
              { icon: GraduationCap, label: 'Thông tin tuyển sinh ĐH-CĐ' },
              { icon: Briefcase, label: 'Thông tin nghề nghiệp' },
              { icon: Bot, label: 'Tích hợp AI gợi ý thông minh' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quyền lợi */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Gift className="w-6 h-6 text-emerald-500" /> Quyền lợi khi tham gia
          </h3>
          <ul className="space-y-3">
            {[
              'Tự động hóa việc cung cấp thông tin tuyển sinh 24/7 cho học sinh',
              'Tăng tỷ lệ tiếp cận và chuyển đổi thông tin quan tâm từ học sinh',
              'Được độc quyền tích hợp bộ dữ liệu kịch bản chăm sóc khách hàng cho MỘT QUỐC GIA duy nhất trên nền tảng',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dịch vụ độc quyền */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#1E63F9]" /> Các dịch vụ độc quyền
          </h3>
          <div className="space-y-4">
            {[
              { icon: Globe, title: 'Logo bảo trợ', desc: 'Logo của Đơn vị được gắn trên trang web khu vực bảo trợ hỗ trợ tư vấn cho học sinh' },
              { icon: Database, title: 'Biểu mẫu thu thập dữ liệu', desc: 'Được tạo tài khoản/gắn biểu mẫu khai thác thông tin (logo và thông tin của đơn vị) khi học sinh nhập tờ khai. Thông tin học sinh sẽ được chuyển về cho Quý Đơn vị' },
              { icon: Bot, title: 'Chatbot AI riêng', desc: 'Được tạo tài khoản Chatbot AI kèm theo kịch bản chuyển đổi chăm sóc của Quý Đơn vị (bao gồm cả link chăm sóc, thu thập thông tin)' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#1E63F9]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#1E63F9]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cam kết */}
        <div className="bg-[#1E63F9] rounded-2xl p-6 text-white mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <UserCheck className="w-6 h-6" /> Cam kết từ InterEdu
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FFD447] mt-0.5 flex-shrink-0" />
              <span>Tối thiểu <strong>60 học sinh</strong> đăng ký vào chương trình mỗi 12 tháng</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FFD447] mt-0.5 flex-shrink-0" />
              <span>Cung cấp biểu mẫu, đường link chuyển đổi và kịch bản chăm sóc khách hàng</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FFD447] mt-0.5 flex-shrink-0" />
              <span>Chatbot tiếp cận trực tiếp với <strong>1.000 học sinh/năm</strong> theo năm sinh, khu vực địa lý, trường THPT</span>
            </li>
          </ul>
        </div>

        {/* Gói tài trợ */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-emerald-500" /> Gói tài trợ
          </h3>
          
          {/* Chi phí một lần */}
          <div className="bg-emerald-50 rounded-xl p-5 border-2 border-emerald-200 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-700">Phí đào tạo Chatbot AI</span>
              <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">MỘT LẦN DUY NHẤT</span>
            </div>
            <div className="text-3xl font-black text-slate-900">5.000.000 VNĐ</div>
            <p className="text-sm text-slate-500">(đã bao gồm 8% VAT)</p>
            <p className="text-sm text-slate-600 mt-2">Cam kết tiếp cận trực tiếp với 1.000 học sinh hàng năm theo năm sinh, khu vực địa lý, trường THPT</p>
          </div>

          {/* Chi phí thường niên */}
          <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-blue-700">Phí duy trì thường niên</span>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">HÀNG THÁNG</span>
            </div>
            <div className="text-3xl font-black text-slate-900">Từ 2.000.000 VNĐ/tháng</div>
            <p className="text-sm text-slate-500">(đã bao gồm 8% VAT)</p>
          </div>

          {/* Chi tiết chi phí thường niên */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h4 className="font-bold text-slate-900 mb-3">Chi tiết chi phí duy trì thường niên:</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-start p-3 bg-white rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">Logo trên khu vực bảo trợ</p>
                  <p className="text-xs text-slate-500">100.000 lượt truy cập/năm</p>
                </div>
                <span className="font-bold text-slate-900">500.000 VNĐ/tháng</span>
              </div>
              <div className="flex justify-between items-start p-3 bg-white rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">Biểu mẫu chăm sóc khách hàng</p>
                  <p className="text-xs text-slate-500">Cam kết 60 dữ liệu/năm</p>
                </div>
                <span className="font-bold text-slate-900">500.000 VNĐ/tháng</span>
              </div>
              <div className="flex justify-between items-start p-3 bg-white rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">Duy trì Chatbot AI</p>
                  <p className="text-xs text-slate-500">Chăm sóc tối đa 3.000 học sinh theo tệp mục tiêu</p>
                </div>
                <span className="font-bold text-slate-900">1.000.000 VNĐ/tháng</span>
              </div>
            </div>
          </div>

          {/* Lưu ý */}
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Lưu ý:</strong> Trong trường hợp không đạt dữ liệu cam kết, InterEdu sẽ gia hạn thời gian cho đủ dữ liệu. Trường hợp vượt quá dữ liệu cam kết, phí phát sinh là <strong>100.000 VNĐ/dữ liệu</strong>.
            </p>
          </div>
        </div>

        {/* Phương thức hợp tác */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#1E63F9]" /> Phương thức hợp tác
          </h3>
          <ol className="space-y-3">
            {[
              'Hai bên ký hợp đồng tài trợ',
              'Quý Đơn vị chuyển khoản 70% chi phí và cung cấp kịch bản tuyển sinh, biểu mẫu, đường link',
              'InterEdu đào tạo Chatbot trong vòng 60 ngày để nghiệm thu',
              'Sau khi nghiệm thu hoàn tất, Quý Đơn vị thanh toán 30% còn lại',
              'Chi phí thường niên thanh toán đầu mỗi Quý (Tháng 01, 04, 07, 10)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1E63F9] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Thời gian triển khai */}
        <div className="bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 text-[#FFD447]" />
            <span className="font-bold text-lg">Thời gian triển khai</span>
          </div>
          <p className="text-white/90">
            Bắt đầu khảo sát học sinh các trường THPT trên nền tảng từ ngày <strong className="text-[#FFD447]">10/01/2026</strong>
          </p>
        </div>

        {/* Form đăng ký */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Send className="w-6 h-6 text-emerald-500" /> Phiếu đăng ký Hình thức 2
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
              <input type="text" required value={form.org} onChange={(e) => setForm({...form, org: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="Nhập tên đơn vị" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ *</label>
              <input type="text" required value={form.address} onChange={(e) => setForm({...form, address: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="Địa chỉ đơn vị" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên người đăng ký *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  placeholder="Họ và tên" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                <input type="text" required value={form.position} onChange={(e) => setForm({...form, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  placeholder="Chức vụ" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại liên hệ *</label>
              <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="Số điện thoại" />
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
              <Send className="w-5 h-5" /> Gửi đăng ký Hình thức 2
            </button>
          </form>
        </div>

        {/* Link sang hình thức 1 */}
        <div className="mt-8 text-center">
          <button onClick={() => onNavigate('offline')} className="inline-flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
            Xem Hình thức 1: Đồng hành tại các trường THPT <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}


// Footer Component
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="InterEdu" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-bold text-lg">InterEdu</span>
                <p className="text-xs text-slate-400">Giải pháp Giáo dục</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Công ty TNHH Giải pháp Giáo dục InterEdu
            </p>
            <p className="text-slate-300 text-sm italic">
              "Đồng hành cùng thế hệ trẻ trên con đường hướng nghiệp"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Thông tin liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300">
                <Globe className="w-5 h-5 text-[#1E63F9]" />
                <a href="https://conghuongnghiep.edu.vn" target="_blank" className="hover:text-white hover:underline">
                  www.conghuongnghiep.edu.vn
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-[#1E63F9]" />
                <a href="mailto:bach.nguyen@interedu.ai.vn" className="hover:text-white hover:underline">
                  bach.nguyen@interedu.ai.vn
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-[#1E63F9]" />
                <span>1900-636866</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Headphones className="w-5 h-5 text-[#1E63F9] mt-0.5" />
                <div>
                  <p className="font-medium text-white">Đại diện liên hệ:</p>
                  <p>Nguyễn Gia Bách – 0976 959 516</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 InterEdu. Xin chân thành cảm ơn và kính chúc Quý Đơn vị ngày càng phát triển bền vững!
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'offline' && <OfflinePage onBack={handleBack} onNavigate={handleNavigate} />}
      {currentPage === 'online' && <OnlinePage onBack={handleBack} onNavigate={handleNavigate} />}
      
      {currentPage !== 'home' && <Footer />}
    </div>
  )
}

export default App
