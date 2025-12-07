import { useState } from 'react'
import { 
  GraduationCap, Users, Bot, CheckCircle, Phone, Mail, Globe, 
  School, ArrowRight, Gift, Send, ChevronRight, Building2, ChevronLeft,
  Sparkles, Shield, Star, MessageCircle, ExternalLink, MapPin,
  Briefcase, Award, Target, BookOpen, Clock, Calendar, FileText,
  HeartHandshake, TrendingUp, UserCheck, Zap
} from 'lucide-react'

// Trang chủ - Thư Ngỏ
function HomePage({ onNavigate }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4] relative overflow-hidden">
      {/* Background Effects */}
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
            <span className="text-sm text-white font-medium">THƯ NGỎ HỢP TÁC TUYỂN SINH 2024 – 2025</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center mb-6 leading-tight">
          Đồng hành Hướng nghiệp
          <span className="block mt-2 bg-gradient-to-r from-[#FFD447] via-[#FFE066] to-[#FFC107] bg-clip-text text-transparent">
            & Tuyển sinh cùng InterEdu
          </span>
        </h1>

        {/* Kính gửi */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-3">Kính gửi: Quý Trường Đại học, Cao đẳng</h2>
          <p className="text-white/90 leading-relaxed text-sm">
            Công ty TNHH Giải pháp Giáo dục InterEdu xin gửi tới Quý Trường lời chào trân trọng và lời chúc sức khỏe, thành công.
          </p>
        </div>

        {/* Giới thiệu */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 max-w-4xl mx-auto">
          <p className="text-slate-700 leading-relaxed mb-4">
            Trong những năm gần đây, nhu cầu định hướng nghề nghiệp và tiếp cận thông tin tuyển sinh chính thống của học sinh THPT ngày càng tăng. 
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Nhằm hỗ trợ các em học sinh lựa chọn con đường học tập phù hợp cũng như tạo cầu nối tuyển sinh hiệu quả giữa các cơ sở đào tạo và nhà trường phổ thông, <strong className="text-[#1E63F9]">InterEdu</strong> thành lập một cộng đồng hướng nghiệp <strong className="text-emerald-600">hoàn toàn miễn phí</strong> với học sinh từ lớp 8 – lớp 12.
          </p>
          <div className="flex items-center gap-3 p-4 bg-[#1E63F9]/5 rounded-xl">
            <Globe className="w-6 h-6 text-[#1E63F9]" />
            <div>
              <p className="text-sm text-slate-600">Nền tảng hướng nghiệp tích hợp AI</p>
              <a href="https://conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer" 
                className="text-[#1E63F9] font-bold hover:underline">conghuongnghiep.edu.vn</a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 max-w-4xl mx-auto">
          {[
            { icon: School, value: 'Lớp 8-12', label: 'Đối tượng học sinh', color: 'from-[#1E63F9] to-[#0D4FD9]' },
            { icon: Bot, value: 'AI', label: 'Nền tảng tích hợp', color: 'from-[#FFD447] to-[#FFC107]', dark: true },
            { icon: Users, value: 'Miễn phí', label: 'Cho học sinh THPT', color: 'from-emerald-500 to-teal-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <item.icon className={`w-7 h-7 ${item.dark ? 'text-slate-900' : 'text-white'}`} />
              </div>
              <div className="text-2xl font-black text-slate-900 mb-1">{item.value}</div>
              <div className="text-[#1E63F9] font-bold text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Hai hình thức hợp tác */}
        <p className="text-white text-center mb-6 font-medium">
          Trân trọng kính mời Quý Trường tham gia theo hai hình thức:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <button onClick={() => onNavigate('offline')}
            className="group bg-white rounded-2xl p-6 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors">
                <School className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-1">Hình thức 1</span>
                <h3 className="font-bold text-slate-900">Đồng hành Offline</h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-3">Ngày hội Hướng nghiệp tại các trường THPT</p>
            <ul className="text-xs text-slate-500 space-y-1 mb-4">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Gian tư vấn trực tiếp</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Kết nối Ban Giám hiệu</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Tăng nhận diện thương hiệu</li>
            </ul>
            <div className="flex items-center text-amber-600 font-bold text-sm">
              Xem chi tiết <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
          
          <button onClick={() => onNavigate('online')}
            className="group bg-white rounded-2xl p-6 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500 flex items-center justify-center transition-colors">
                <Bot className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-1">Hình thức 2</span>
                <h3 className="font-bold text-slate-900">Đồng hành Online</h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-3">Cộng đồng hướng nghiệp trên website</p>
            <ul className="text-xs text-slate-500 space-y-1 mb-4">
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Chatbot AI tuyển sinh 24/7</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Miễn phí 12 tháng đầu</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Tiếp cận 1,000+ học sinh/năm</li>
            </ul>
            <div className="flex items-center text-emerald-600 font-bold text-sm">
              Xem chi tiết <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white/70 text-sm">
          <p>InterEdu tin rằng sự đồng hành của Quý Đơn vị sẽ góp phần nâng cao chất lượng công tác tư vấn hướng nghiệp</p>
        </div>
      </div>
    </section>
  )
}

// Trang chi tiết Offline - Ngày hội hướng nghiệp
function OfflinePage({ onBack, onNavigate }) {
  const [form, setForm] = useState({ 
    choice: '', org: '', representative: '', position: '', phone: '' 
  })
  
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
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-bold rounded-full mb-4">
            Hình thức 1
          </span>
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            Đồng hành cùng các trường THPT
          </h1>
          <p className="text-slate-600">Tuyển sinh trực tiếp tại Ngày hội Hướng nghiệp</p>
        </div>

        {/* Quyền lợi */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Gift className="w-6 h-6 text-amber-500" /> Quyền lợi khi tham gia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: School, text: 'Gian tư vấn trực tiếp tại trường THPT, giao lưu – giới thiệu chương trình đào tạo' },
              { icon: Target, text: 'Tư vấn hướng nghiệp, hướng dẫn chọn ngành – chọn trường cho học sinh' },
              { icon: TrendingUp, text: 'Tăng nhận diện thương hiệu tại tệp học sinh THPT và phụ huynh địa phương' },
              { icon: HeartHandshake, text: 'Kết nối trực tiếp với Ban Giám hiệu và giáo viên chủ nhiệm các trường' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <item.icon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chi tiết chương trình */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-6">
          <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" /> Chi tiết chương trình (3h30)
          </h3>
          <ul className="space-y-2 text-amber-900 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Diễn giả hướng nghiệp trên sân khấu, cập nhật thông tin tuyển sinh, kỳ thi cần thiết</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Phòng tham vấn 1:1 quy tụ hơn 10 diễn giả tham vấn trực tiếp cho học sinh</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Trao tặng các suất học bổng, quà tặng và các nội dung khác</span>
            </li>
          </ul>
        </div>

        {/* Bảng giá */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 hover:border-[#1E63F9] transition-colors">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-[#1E63F9]/10 text-[#1E63F9] text-sm font-bold rounded-full">Gói A</span>
            </div>
            <div className="text-center mb-4">
              <p className="text-3xl font-black text-slate-900">15.000.000</p>
              <p className="text-slate-500 text-sm">VNĐ/gói <span className="text-xs">(+8% VAT)</span></p>
            </div>
            <p className="text-slate-600 text-sm text-center mb-4">
              Cho <strong>10 trường THPT công lập bất kỳ</strong> mà InterEdu tổ chức
            </p>
            <div className="text-xs text-slate-500 text-center">
              ≈ 1.500.000 VNĐ/trường
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] rounded-2xl p-6 shadow-lg text-white">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-bold rounded-full">Gói B</span>
            </div>
            <div className="text-center mb-4">
              <p className="text-3xl font-black">30.000.000</p>
              <p className="text-white/80 text-sm">VNĐ/gói <span className="text-xs">(+8% VAT)</span></p>
            </div>
            <p className="text-white/90 text-sm text-center mb-4">
              Cho <strong>10 trường THPT công lập</strong> mà đơn vị muốn tham dự khi InterEdu tổ chức
            </p>
            <div className="text-xs text-white/70 text-center">
              Chủ động chọn trường theo khu vực tuyển sinh
            </div>
          </div>
        </div>

        {/* Phương án hợp tác */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#1E63F9]" /> Phương án hợp tác
          </h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#1E63F9]/10 text-[#1E63F9] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span>Hai bên ký hợp đồng nguyên tắc</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#1E63F9]/10 text-[#1E63F9] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span>InterEdu thông báo lịch tổ chức cụ thể tại từng trường <strong>trước 14 ngày làm việc</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-[#1E63F9]/10 text-[#1E63F9] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span>Thanh toán theo từng trường</span>
            </li>
          </ul>
        </div>

        {/* Form đăng ký */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Send className="w-6 h-6 text-[#1E63F9]" /> Đăng ký tham gia
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Lựa chọn */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-700">Vui lòng lựa chọn *</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:border-[#1E63F9] transition-colors">
                  <input type="radio" name="choice" value="not-suitable" 
                    onChange={(e) => setForm({...form, choice: e.target.value})}
                    className="w-4 h-4 text-[#1E63F9]" />
                  <span className="text-slate-700">Không phù hợp với phương án tuyển sinh của Trường</span>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:border-[#1E63F9] transition-colors">
                  <input type="radio" name="choice" value="agree" 
                    onChange={(e) => setForm({...form, choice: e.target.value})}
                    className="w-4 h-4 text-[#1E63F9]" />
                  <span className="text-slate-700">Đồng ý đồng hành đối với các trường THPT/khu vực tuyển sinh mà Trường hướng tới</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
              <input type="text" required value={form.org} onChange={(e) => setForm({...form, org: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                placeholder="Nhập tên trường/đơn vị" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Người đại diện đăng ký *</label>
                <input type="text" required value={form.representative} onChange={(e) => setForm({...form, representative: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                  placeholder="Họ và tên" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                <input type="text" required value={form.position} onChange={(e) => setForm({...form, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                  placeholder="Chức vụ" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
              <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                placeholder="Số điện thoại liên hệ" />
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
              <Send className="w-5 h-5" /> Gửi đăng ký
            </button>
          </form>
        </div>

        {/* Link sang Online */}
        <div className="mt-6 text-center">
          <button onClick={() => onNavigate('online')} className="text-[#1E63F9] font-medium hover:underline flex items-center gap-2 mx-auto">
            Xem hình thức đồng hành Online <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}


// Trang chi tiết Online - Cộng đồng hướng nghiệp
function OnlinePage({ onBack, onNavigate }) {
  const [form, setForm] = useState({ 
    org: '', address: '', name: '', position: '', phone: '' 
  })
  
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
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full mb-4">
            Hình thức 2
          </span>
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            Đồng hành với Cộng đồng Hướng nghiệp
          </h1>
          <a href="https://conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer"
            className="text-[#1E63F9] font-bold hover:underline flex items-center gap-2 justify-center">
            www.conghuongnghiep.edu.vn <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Giới thiệu nền tảng */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            InterEdu đang vận hành nền tảng hướng nghiệp vì cộng đồng <strong className="text-emerald-600">hoàn toàn miễn phí</strong> dành cho học sinh THPT. 
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Nền tảng cung cấp cho học sinh các bài trắc nghiệm hướng nghiệp, lộ trình hướng nghiệp, các bài thi Đánh giá năng lực, 
            thông tin tuyển sinh của các trường Đại học – Cao đẳng, thông tin tìm hiểu nghề nghiệp. 
            <strong className="text-[#1E63F9]"> Tất cả được tích hợp AI</strong> để gợi ý những đề xuất thích hợp nhất cho học sinh.
          </p>
        </div>

        {/* Banner miễn phí */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-center mb-6 text-white">
          <Sparkles className="w-8 h-8 mx-auto mb-2" />
          <p className="text-2xl font-black">Miễn phí thường niên 12 tháng đầu tiên</p>
          <p className="text-emerald-100 text-sm mt-1">Đối với các đơn vị tuyển sinh trong nước</p>
        </div>

        {/* Quyền lợi */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Gift className="w-6 h-6 text-emerald-500" /> Quyền lợi khi tham gia
          </h3>
          <div className="space-y-3">
            {[
              { icon: Clock, text: 'Tự động hóa việc cung cấp thông tin tuyển sinh 24/7 cho học sinh' },
              { icon: TrendingUp, text: 'Tăng tỷ lệ tiếp cận — chuyển đổi thông tin quan tâm từ học sinh' },
              { icon: BookOpen, text: 'Được tích hợp bộ dữ liệu ngành, chương trình đào tạo, điểm chuẩn, học phí… một cách trực quan và thuận tiện' },
              { icon: UserCheck, text: 'Được InterEdu cam kết kết nối với các học viên phù hợp với tiêu chí xét tuyển: Khu vực xét tuyển, năng lực học tập' },
              { icon: Users, text: 'Cam kết tiếp cận trực tiếp với 1,000 học sinh hàng năm theo năm sinh, khu vực địa lý, trường THPT' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                <item.icon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Yêu cầu từ đối tác */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-6">
          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Quý Trường cần cung cấp
          </h3>
          <ul className="space-y-2 text-blue-900 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Quy chế tuyển sinh của trường</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Kịch bản tư vấn tuyển sinh</span>
            </li>
          </ul>
        </div>

        {/* Bảng giá */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-500">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">Chi phí đào tạo Chatbot AI</span>
            </div>
            <div className="text-center mb-4">
              <p className="text-3xl font-black text-emerald-600">5.000.000</p>
              <p className="text-slate-500 text-sm">VNĐ/lần duy nhất <span className="text-xs">(đã bao gồm 8% VAT)</span></p>
            </div>
            <p className="text-slate-600 text-sm text-center">
              Cho 01 chatbot với cam kết tiếp cận trực tiếp 1,000 học sinh/năm
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-bold rounded-full">Chi phí duy trì thường niên</span>
            </div>
            <div className="text-center mb-4">
              <p className="text-3xl font-black text-slate-900">500.000</p>
              <p className="text-slate-500 text-sm">VNĐ/tháng <span className="text-xs">(đã bao gồm 8% VAT)</span></p>
            </div>
            <p className="text-slate-600 text-sm text-center">
              Đối với các đơn vị tuyển sinh quốc tế
            </p>
          </div>
        </div>

        {/* Lưu ý */}
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-6">
          <p className="text-amber-800 text-sm font-medium mb-2">* Lưu ý:</p>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>• Miễn phí thường niên trong 12 tháng đầu tiên đối với các đơn vị tuyển sinh trong nước</li>
            <li>• Chi phí duy trì căn cứ vào kịch bản chăm sóc khách hàng và số lượng học sinh truy cập trang</li>
          </ul>
        </div>

        {/* Phương án hợp tác */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#1E63F9]" /> Phương án hợp tác
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-[#1E63F9] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-medium text-slate-900">Ký hợp đồng tài trợ</p>
                <p className="text-slate-600 text-sm">Hai bên ký hợp đồng tài trợ</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-[#1E63F9] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-medium text-slate-900">Thanh toán 70% & cung cấp tài liệu</p>
                <p className="text-slate-600 text-sm">Quý trường chuyển khoản 70% chi phí tài trợ và cung cấp quy chế tuyển sinh, kịch bản tuyển sinh</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-[#1E63F9] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-medium text-slate-900">Đào tạo Chatbot (60 ngày)</p>
                <p className="text-slate-600 text-sm">InterEdu đào tạo Chatbot theo tài liệu quý trường cung cấp trong vòng 60 ngày để nghiệm thu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <p className="font-medium text-slate-900">Nghiệm thu & sử dụng</p>
                <p className="text-slate-600 text-sm">Sau khi hoàn thiện nghiệm thu, Quý trường tài trợ nốt 30% chi phí còn lại và bắt đầu được sử dụng 12 tháng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form đăng ký */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Send className="w-6 h-6 text-emerald-500" /> Đăng ký chương trình đồng hành
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
              <input type="text" required value={form.org} onChange={(e) => setForm({...form, org: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="Nhập tên trường/đơn vị" />
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
              <Send className="w-5 h-5" /> Gửi đăng ký
            </button>
          </form>
        </div>

        {/* Link sang Offline */}
        <div className="mt-6 text-center">
          <button onClick={() => onNavigate('offline')} className="text-[#1E63F9] font-medium hover:underline flex items-center gap-2 mx-auto">
            Xem hình thức đồng hành Offline <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-slate-300 text-sm mb-4">
              InterEdu tin rằng sự đồng hành của Quý Đơn vị sẽ góp phần nâng cao chất lượng công tác tư vấn hướng nghiệp tại các trường THPT, 
              đồng thời mang lại hiệu quả tuyển sinh thiết thực và bền vững.
            </p>
            <p className="text-slate-400 text-sm">Chúng tôi rất mong nhận được sự quan tâm và hợp tác từ Quý Trường.</p>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <p className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.conghuongnghiep.edu.vn</p>
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> bach.nguyen@interedu.ai.vn</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1900-636866</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3">Đại diện liên hệ</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Nguyễn Gia Bách</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0976 959 516</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">Xin chân thành cảm ơn và kính chúc Quý Đơn vị ngày càng phát triển bền vững!</p>
            <p className="text-slate-500 text-xs mt-2">Trân trọng, CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

// Main App
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

  if (currentPage === 'offline') {
    return <OfflinePage onBack={handleBack} onNavigate={handleNavigate} />
  }

  if (currentPage === 'online') {
    return <OnlinePage onBack={handleBack} onNavigate={handleNavigate} />
  }

  return <HomePage onNavigate={handleNavigate} />
}

export default App
