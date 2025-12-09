import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { 
  Users, Bot, Globe, 
  School, Send, ChevronRight, Building2, ChevronLeft,
  Sparkles, FileText, Info
} from 'lucide-react'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import InternationalPage from './pages/InternationalPage'
import InternationalOfflinePage from './pages/InternationalOfflinePage'
import InternationalOnlinePage from './pages/InternationalOnlinePage'
import UniversityPage from './pages/UniversityPage'
import UniversityOfflinePage from './pages/UniversityOfflinePage'
import UniversityOnlinePage from './pages/UniversityOnlinePage'
import OfflinePage from './pages/OfflinePage'
import OnlinePage from './pages/OnlinePage'

function Page1() {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[5%] w-[500px] h-[500px] bg-[#FFD447]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
      </div>
      
      <header className="relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src="/logo.png" alt="InterEdu" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <span className="font-bold text-xl text-white">InterEdu</span>
              <p className="text-xs text-white/70">Education Solutions</p>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/about')}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
            >
              <Info className="w-4 h-4" />
              Về chúng tôi
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
            >
              <FileText className="w-4 h-4" />
              Hồ sơ năng lực
            </button>
          </nav>
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
          <button onClick={() => navigate('/detail/intro')}
            className="group bg-white rounded-2xl p-5 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-11 h-11 mb-3 rounded-xl bg-[#1E63F9]/10 group-hover:bg-[#1E63F9] flex items-center justify-center transition-colors">
              <Building2 className="w-5 h-5 text-[#1E63F9] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Giới thiệu về</h3>
            <p className="text-[#1E63F9] font-bold">InterEdu</p>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2 group-hover:translate-x-1 transition-all" />
          </button>
          
          <button onClick={() => navigate('/online')}
            className="group bg-white rounded-2xl p-5 text-left shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-11 h-11 mb-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500 flex items-center justify-center transition-colors">
              <Bot className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Chi tiết khung</h3>
            <p className="text-emerald-600 font-bold">Tuyển sinh đồng hành Online</p>
            <ChevronRight className="w-4 h-4 text-slate-400 mt-2 group-hover:translate-x-1 transition-all" />
          </button>
          
          <button onClick={() => navigate('/offline')}
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

function IntroPage() {
  const navigate = useNavigate()
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
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/about')} className="flex items-center gap-2 text-slate-600 font-medium hover:text-[#1E63F9] transition-colors">
              <Info className="w-4 h-4" /> Về chúng tôi
            </button>
            <button onClick={() => navigate('/profile')} className="flex items-center gap-2 text-slate-600 font-medium hover:text-[#1E63F9] transition-colors">
              <FileText className="w-4 h-4" /> Hồ sơ năng lực
            </button>
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Quay lại
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-6">2.1 Giới thiệu InterEdu</h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <p className="text-slate-600 mb-4">Ảnh scan giấy phép ĐKKD</p>
            <div className="space-y-3">
              {[
                { label: 'www.conghuongnghiep.edu.vn', href: 'https://www.conghuongnghiep.edu.vn' },
                { label: 'www.mbti.ai.vn', href: 'https://www.mbti.ai.vn' },
                { label: 'www.interedu.ai.vn', href: 'https://www.interedu.ai.vn' },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1E63F9] hover:underline">
                  <Globe className="w-5 h-5" /> {item.label}
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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detail/intro" element={<IntroPage />} />
        
        {/* International routes - độc lập */}
        <Route path="/international" element={<InternationalPage />} />
        <Route path="/international/about" element={<AboutPage basePath="/international" />} />
        <Route path="/international/profile" element={<ProfilePage basePath="/international" />} />
        <Route path="/international/offline" element={<InternationalOfflinePage />} />
        <Route path="/international/online" element={<InternationalOnlinePage />} />
        
        {/* University routes - độc lập */}
        <Route path="/university" element={<UniversityPage />} />
        <Route path="/university/about" element={<AboutPage basePath="/university" />} />
        <Route path="/university/profile" element={<ProfilePage basePath="/university" />} />
        <Route path="/university/offline" element={<UniversityOfflinePage />} />
        <Route path="/university/online" element={<UniversityOnlinePage />} />
        
        {/* Online & Offline routes */}
        <Route path="/online" element={<OnlinePage />} />
        <Route path="/offline" element={<OfflinePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
