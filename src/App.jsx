import { useState } from 'react'
import { 
  GraduationCap, Users, Bot, CheckCircle, Phone, Mail, Globe, 
  School, ArrowRight, Gift, Send, ChevronRight, Building2, ChevronLeft,
  Sparkles, Shield, Star, MessageCircle, ExternalLink, MapPin,
  Briefcase, Award, Target, BookOpen, Clock
} from 'lucide-react'

function Page1({ onNavigate }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[5%] w-[500px] h-[500px] bg-[#FFD447]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
      </div>
      
      <header className="relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <span className="font-bold text-xl text-white">InterEdu</span>
              <p className="text-xs text-white/70">Education Solutions</p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-[#FFD447]" />
            <span className="text-sm text-white font-medium">Hợp tác tuyển sinh 2024 – 2025</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center mb-10 leading-tight">
          Đồng hành tuyển sinh
          <span className="block mt-2 bg-gradient-to-r from-[#FFD447] via-[#FFE066] to-[#FFC107] bg-clip-text text-transparent">
            cùng InterEdu
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: School, value: '>100', label: 'Trường ĐH/THPT', color: 'from-[#1E63F9] to-[#0D4FD9]' },
            { icon: Bot, value: 'Nền tảng', label: 'Tuyển sinh tích hợp AI', color: 'from-[#FFD447] to-[#FFC107]', dark: true },
            { icon: Users, value: '>100,000', label: 'Tiếp cận học sinh', color: 'from-emerald-500 to-teal-500' },
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

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Kính gửi:</h2>
          <p className="text-white/90 leading-relaxed">
            Quý Trường Đại học, Cao đẳng, Trung tâm Du học và các Đơn vị Giáo dục – Đào tạo
          </p>
        </div>

        <p className="text-white/80 text-center mb-6">Trân trọng kính mời Quý Đơn vị tìm hiểu:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <button onClick={() => onNavigate('intro')}
            className="group bg-white rounded-2xl p-5 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-11 h-11 mb-3 rounded-xl bg-[#1E63F9]/10 group-hover:bg-[#1E63F9] flex items-center justify-center transition-colors">
              <Building2 className="w-5 h-5 text-[#1E63F9] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Giới thiệu về</h3>
            <p className="text-[#1E63F9] font-bold">InterEdu</p>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2 group-hover:translate-x-1 transition-all" />
          </button>
          
          <button onClick={() => onNavigate('online')}
            className="group bg-white rounded-2xl p-5 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-11 h-11 mb-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500 flex items-center justify-center transition-colors">
              <Bot className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Chi tiết khung</h3>
            <p className="text-emerald-600 font-bold">Tuyển sinh đồng hành Online</p>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2 group-hover:translate-x-1 transition-all" />
          </button>
          
          <button onClick={() => onNavigate('offline')}
            className="group bg-white rounded-2xl p-5 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-11 h-11 mb-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-colors">
              <School className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Chi tiết chương trình</h3>
            <p className="text-amber-600 font-bold">Đồng hành tuyển sinh Offline</p>
            <p className="text-xs text-slate-500 mt-1">Ngày hội hướng nghiệp</p>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </section>
  )
}


function Page2({ section, onBack }) {
  const [form, setForm] = useState({ org: '', address: '', name: '', position: '', phone: '' })
  const handleSubmit = (e) => { e.preventDefault(); alert('Cảm ơn Quý Đơn vị đã đăng ký!') }

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
          <button onClick={onBack} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
            <ChevronLeft className="w-4 h-4" /> Quay lại
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {section === 'intro' && (
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">2.1 Giới thiệu InterEdu</h2>
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <p className="text-slate-600 mb-4">Ảnh scan giấy phép ĐKKD</p>
              <div className="space-y-3">
                {[
                  { icon: Globe, label: 'www.conghuongnghiep.edu.vn', href: 'https://www.conghuongnghiep.edu.vn' },
                  { icon: Globe, label: 'www.mbti.ai.vn', href: 'https://www.mbti.ai.vn' },
                  { icon: Globe, label: 'www.interedu.ai.vn', href: 'https://www.interedu.ai.vn' },
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#1E63F9] hover:underline">
                    <item.icon className="w-5 h-5" /> {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="font-bold text-slate-900 mb-2">Liên hệ: ThS. Ngô Gia Bách</p>
                <p className="text-slate-600">Email: bach.nguyen@interedu.ai.vn</p>
                <p className="text-slate-600">ĐT: 0976.959.516 (Zalo)</p>
              </div>
            </div>
          </div>
        )}

        {(section === 'online' || section === 'intro') && (
          <div className={section === 'intro' ? 'mt-8' : ''}>
            <h2 className="text-3xl font-black text-slate-900 mb-6">2.2 Chi tiết chương trình đồng hành tuyển sinh Online</h2>
            
            <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-2xl p-6 text-center mb-8">
              <p className="text-2xl font-black text-slate-900">Miễn phí thường niên 01 năm</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <p className="text-slate-600 mb-2">Nền cổng hướng nghiệp:</p>
              <a href="https://www.conghuongnghiep.edu.vn" target="_blank" rel="noopener noreferrer"
                className="text-[#1E63F9] font-bold text-lg hover:underline flex items-center gap-2">
                www.conghuongnghiep.edu.vn <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                { title: 'Hình ảnh trang chủ', desc: 'Chatbot tuyển sinh & Chatbot nghề nghiệp' },
                { title: 'Hình ảnh trang chủ', desc: 'Chatbot tư vấn du học' },
                { title: 'Hình ảnh', desc: 'Khám phá nghề nghiệp' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-lg border-2 border-dashed border-slate-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-slate-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Đối tác cần chuẩn bị:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Tài liệu: Quy chế tuyển sinh năm gần nhất & Quy trình CSLH 03 năm gần nhất</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Báo cập nhật báo cáo tuyển sinh gần nhất</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <p className="text-emerald-800 font-bold mb-2">Phí đào tạo Chatbot AI</p>
                <p className="text-3xl font-black text-emerald-600">5.000.000 VNĐ</p>
                <p className="text-sm text-emerald-700">/ lần duy nhất</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <p className="text-blue-800 font-bold mb-2">Phí thường niên sau CTKĐ</p>
                <p className="text-3xl font-black text-blue-600">500.000 VNĐ</p>
                <p className="text-sm text-blue-700">/ tháng</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-8">
              <p className="text-amber-800 text-sm">
                <strong>* Lưu ý:</strong> Phí thường niên đối với đơn vị tuyển sinh quốc tế từ 1.000.000 VNĐ/tháng 
                và tổ chức tư vấn du học từ 2.000.000 VNĐ/tháng
              </p>
            </div>
          </div>
        )}

        {section === 'offline' && (
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Chi tiết chương trình đồng hành tuyển sinh Offline</h2>
            <p className="text-slate-600 mb-6">Ngày hội hướng nghiệp tại các trường THPT</p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Gift className="w-6 h-6 text-[#1E63F9]" /> Quyền lợi của Quý đối tác
              </h3>
              <ul className="space-y-3">
                {[
                  'Học sinh tham gia cổng hướng nghiệp sẽ được chat nhận thông tin miễn phí từ AI',
                  'Học sinh tham gia ĐGNL sẽ được gợi ý tổ các ngành học phù hợp với năng lực',
                  'Quý đơn vị sẽ được nhận thông tin hoặc kết nối trực tiếp với học sinh trên link đăng ký hoặc đường dây nóng',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-6">
              <p className="text-amber-800 text-sm">
                <strong>* Lưu ý:</strong> Phí thường niên đối với đơn vị tuyển sinh quốc tế từ 1.000.000 VNĐ/tháng 
                và tổ chức tư vấn du học từ 2.000.000 VNĐ/tháng
              </p>
            </div>
          </div>
        )}

        {/* Form đăng ký */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Send className="w-6 h-6 text-[#1E63F9]" /> Đăng ký tại
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
              <input type="text" required value={form.org} onChange={(e) => setForm({...form, org: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                placeholder="Nhập tên trường/đơn vị" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ *</label>
              <input type="text" required value={form.address} onChange={(e) => setForm({...form, address: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                placeholder="Địa chỉ đơn vị" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tên người đăng ký *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
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
              <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại liên hệ *</label>
              <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1E63F9] focus:ring-2 focus:ring-[#1E63F9]/20 transition-all"
                placeholder="Số điện thoại" />
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
              <Send className="w-5 h-5" /> Gửi đăng ký
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [section, setSection] = useState(null)

  const handleNavigate = (sec) => {
    setSection(sec)
    setCurrentPage('detail')
  }

  const handleBack = () => {
    setCurrentPage('home')
    setSection(null)
  }

  if (currentPage === 'home') {
    return <Page1 onNavigate={handleNavigate} />
  }

  return <Page2 section={section} onBack={handleBack} />
}

export default App
