import { useState } from 'react'
import { 
  GraduationCap, Users, Bot, CheckCircle, Phone, Mail, Globe, 
  School, MessageSquare, Clock, ArrowRight, Gift, 
  Send, Menu, X, Award, BookOpen, Target, TrendingUp,
  Sparkles, MapPin, Shield, Star, ChevronRight, ChevronDown,
  Briefcase, HeartHandshake, Mic2, Zap, Building2, CheckCircle2,
  MessageCircle, BarChart2, Database, Layers
} from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Add scroll listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 20)
    })
  }
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 ${
                scrolled 
                  ? 'bg-white shadow-lg shadow-slate-200/50' 
                  : 'bg-white/10 backdrop-blur-md border border-white/30'
              }`}>
                <img src="/logo.png" alt="InterEdu Logo" className="w-14 h-14 object-contain" />
              </div>
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                InterEdu
              </span>
              <p className={`text-xs font-medium transition-colors ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                Education Solutions
              </p>
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: '#about', label: 'Giới thiệu' },
              { href: '#services', label: 'Tuyển sinh trực tiếp' },
              { href: '#chatbot', label: 'Chatbot AI' },
              { href: '#contact', label: 'Liên hệ' },
            ].map((item) => (
              <a key={item.href} href={item.href} 
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                  scrolled 
                    ? 'text-slate-600 hover:text-[#1E63F9] hover:bg-slate-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}>
                {item.label}
              </a>
            ))}
            <div className={`w-px h-6 mx-3 ${scrolled ? 'bg-slate-200' : 'bg-white/20'}`}></div>
            <a href="#register" 
              className="px-6 py-3 bg-gradient-to-r from-[#FFD447] to-[#FFC107] text-slate-900 rounded-xl text-sm font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-[#FFD447]/30 transition-all duration-300 hover:-translate-y-0.5">
              Đăng ký hợp tác
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
          
          <button className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="lg:hidden py-6 flex flex-col gap-2 bg-white rounded-2xl mt-2 shadow-xl border border-slate-100 px-4 animate-in slide-in-from-top-2">
            {[
              { href: '#about', label: 'Giới thiệu' },
              { href: '#services', label: 'Tuyển sinh trực tiếp' },
              { href: '#chatbot', label: 'Chatbot AI' },
              { href: '#contact', label: 'Liên hệ' },
            ].map((item) => (
              <a key={item.href} href={item.href} 
                className="py-3 px-4 text-slate-700 hover:text-[#1E63F9] hover:bg-[#1E63F9]/5 rounded-xl font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#register" 
              className="mt-2 py-4 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] text-white rounded-xl font-bold text-center"
              onClick={() => setIsMenuOpen(false)}>
              Đăng ký hợp tác
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[5%] w-[600px] h-[600px] bg-[#FFD447]/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#0D4FD9]/60 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-[15%] hidden lg:block">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
          <School className="w-8 h-8 text-white/80" />
        </div>
      </div>
      <div className="absolute bottom-40 right-[12%] hidden lg:block">
        <div className="w-14 h-14 bg-[#FFD447]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#FFD447]/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Bot className="w-7 h-7 text-[#FFD447]" />
        </div>
      </div>
      <div className="absolute top-1/2 left-[8%] hidden lg:block">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          <GraduationCap className="w-6 h-6 text-white/80" />
        </div>
      </div>
      
      {/* Elegant Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L48 115C96 110 192 100 288 92.5C384 85 480 80 576 80C672 80 768 85 864 90C960 95 1056 100 1152 97.5C1248 95 1344 85 1392 80L1440 75V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10 shadow-xl shadow-black/5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-[#FFD447] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#FFD447]/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#FFD447]/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm text-white font-semibold tracking-wide">Hợp tác tuyển sinh năm học 2024 – 2025</span>
          </div>
          
          {/* Main Heading - Strong Impact */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight">
            Cầu nối tuyển sinh
            <span className="block mt-3 bg-gradient-to-r from-[#FFD447] via-[#FFE066] to-[#FFC107] bg-clip-text text-transparent drop-shadow-lg">
              hiệu quả
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
              Kết nối <span className="font-semibold text-[#FFD447]">Đại học – Cao đẳng – THPT</span> thông qua 
              chuỗi Ngày hội Hướng nghiệp toàn quốc và nền tảng <span className="font-semibold text-white">Chatbot AI Tuyển sinh</span> hiện đại
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
            <a href="#services" 
              className="group px-10 py-5 bg-white text-[#1E63F9] rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 flex items-center justify-center gap-3">
              <BookOpen className="w-6 h-6" />
              Tìm hiểu dịch vụ
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a href="#register" 
              className="group px-10 py-5 bg-gradient-to-r from-[#FFD447] to-[#FFC107] text-slate-900 rounded-2xl font-bold text-lg shadow-2xl shadow-[#FFD447]/30 hover:shadow-[0_25px_60px_-12px_rgba(255,212,71,0.5)] transition-all duration-500 hover:-translate-y-2 flex items-center justify-center gap-3">
              <Send className="w-5 h-5" />
              Đăng ký hợp tác
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 max-w-5xl mx-auto">
            {[
              { value: '50+', label: 'Trường THPT', icon: School, desc: 'trên toàn quốc' },
              { value: '20+', label: 'Tỉnh/Thành', icon: MapPin, desc: 'phủ sóng rộng khắp' },
              { value: '10,000+', label: 'Học sinh', icon: Users, desc: 'tiếp cận mỗi năm' },
              { value: '100+', label: 'Đối tác ĐH-CĐ', icon: GraduationCap, desc: 'tin tưởng hợp tác' },
            ].map((stat, i) => (
              <div key={i} 
                className="group relative bg-white rounded-3xl p-6 lg:p-8 text-center shadow-2xl shadow-black/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E63F9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] flex items-center justify-center shadow-lg shadow-[#1E63F9]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-base font-bold text-[#1E63F9]">{stat.label}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium tracking-widest uppercase">Khám phá thêm</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1E63F9]/5 to-transparent rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFD447]/10 to-transparent rounded-full blur-[100px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E63F9]/10 to-[#1E63F9]/5 border border-[#1E63F9]/10 mb-8">
            <HeartHandshake className="w-5 h-5 text-[#1E63F9]" />
            <span className="text-sm text-[#1E63F9] font-bold tracking-wide">THƯ NGỎ HỢP TÁC</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Kính gửi Quý Đối tác
            <span className="block mt-2 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] bg-clip-text text-transparent">
              Giáo dục & Đào tạo
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Trường Đại học, Cao đẳng, Trung tâm Du học
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Letter Content - Main */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative quote */}
              <div className="absolute -top-8 -left-4 text-[#1E63F9]/10 text-[120px] font-serif leading-none">"</div>
              
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-[2rem] p-10 lg:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 relative">
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Công ty TNHH Giải pháp Giáo dục InterEdu</strong> trân trọng 
                    kính gửi đến Quý Trường/Đơn vị lời chào trân trọng và lời chúc sức khỏe, thành công.
                  </p>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Trong bối cảnh nhu cầu <strong className="text-[#1E63F9] font-semibold">định hướng nghề nghiệp</strong> và tiếp cận 
                    thông tin tuyển sinh chính thống của học sinh THPT ngày càng tăng cao, InterEdu mong muốn 
                    trở thành cầu nối đồng hành cùng Quý Đơn vị trong công tác truyền thông – tuyển sinh hiệu quả.
                  </p>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Chúng tôi trân trọng kính mời Quý Đơn vị cùng hợp tác theo <strong className="text-slate-900 font-semibold">hai hình thức chính</strong>:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 py-4">
                    <div className="flex items-start gap-4 p-5 bg-[#1E63F9]/5 rounded-2xl border border-[#1E63F9]/10">
                      <div className="w-12 h-12 bg-[#1E63F9] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Gian tư vấn trực tiếp</p>
                        <p className="text-sm text-slate-600 mt-1">Tại Ngày hội Hướng nghiệp THPT toàn quốc</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-[#FFD447]/10 rounded-2xl border border-[#FFD447]/20">
                      <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6 text-slate-900" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Chatbot AI Tuyển sinh</p>
                        <p className="text-sm text-slate-600 mt-1">Nền tảng tư vấn tự động 24/7</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed italic border-l-4 border-[#FFD447] pl-6 py-2 bg-[#FFD447]/5 rounded-r-xl">
                    Sự đồng hành của Quý Đơn vị sẽ góp phần nâng cao chất lượng tư vấn hướng nghiệp tại các trường THPT, 
                    mang lại hiệu quả tuyển sinh thiết thực và bền vững.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-slate-100">
                  <a href="#services" 
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-[#1E63F9]/25 transition-all duration-300 hover:-translate-y-1">
                    <BookOpen className="w-5 h-5" />
                    Xem chi tiết dịch vụ
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#register" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-all duration-300 hover:-translate-y-1">
                    <Send className="w-5 h-5" />
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Value Cards - Side */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Target, title: 'Hướng nghiệp', desc: 'Định hướng nghề nghiệp phù hợp cho học sinh THPT', color: '#1E63F9', bg: 'from-[#1E63F9]/10 to-[#1E63F9]/5' },
                { icon: Users, title: 'Kết nối trực tiếp', desc: 'Giao lưu với học sinh, phụ huynh tại địa phương', color: '#10B981', bg: 'from-emerald-50 to-emerald-50/50' },
                { icon: Award, title: 'Thương hiệu', desc: 'Tăng nhận diện mạnh mẽ trong cộng đồng giáo dục', color: '#F59E0B', bg: 'from-amber-50 to-amber-50/50' },
                { icon: TrendingUp, title: 'Hiệu quả cao', desc: 'Tuyển sinh chất lượng, nguồn sinh viên ổn định', color: '#8B5CF6', bg: 'from-violet-50 to-violet-50/50' },
              ].map((item, i) => (
                <div key={i} 
                  className={`group bg-gradient-to-br ${item.bg} rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2`}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 p-6 bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-2xl shadow-xl shadow-[#FFD447]/20">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="w-8 h-8 text-[#1E63F9]" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg">Đối tác tin cậy</p>
                  <p className="text-slate-800 font-medium">Hơn 100+ cơ sở giáo dục đã hợp tác</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#1E63F9]/[0.03] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD447]/10 rounded-full blur-[100px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E63F9]/10 to-[#1E63F9]/5 border border-[#1E63F9]/10 mb-8">
            <School className="w-5 h-5 text-[#1E63F9]" />
            <span className="text-sm text-[#1E63F9] font-bold tracking-wide">GÓI HỢP TÁC #1</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Tuyển sinh trực tiếp tại
            <span className="block mt-2 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] bg-clip-text text-transparent">
              Ngày hội Hướng nghiệp THPT
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Gặp gỡ và tư vấn trực tiếp cho hàng nghìn học sinh, phụ huynh tại các trường THPT trên toàn quốc
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Features */}
          <div className="space-y-8">
            {/* Main Feature Card */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1E63F9]/25">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                Quyền lợi khi tham gia
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: Briefcase, text: 'Gian tư vấn trực tiếp tại trường THPT', highlight: true },
                  { icon: Mic2, text: 'Giao lưu & giới thiệu chương trình đào tạo trên sân khấu' },
                  { icon: Target, text: 'Hướng nghiệp – hỗ trợ học sinh chọn ngành, chọn trường phù hợp' },
                  { icon: Award, text: 'Tăng nhận diện thương hiệu mạnh mẽ tại địa phương' },
                  { icon: Users, text: 'Kết nối trực tiếp Ban Giám hiệu & Giáo viên chủ nhiệm' },
                  { icon: Gift, text: 'Trao tặng học bổng và quà tặng hấp dẫn cho học sinh' },
                ].map((item, i) => (
                  <div key={i} 
                    className={`group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-[#1E63F9]/10 to-[#1E63F9]/5 border-2 border-[#1E63F9]/20' 
                        : 'hover:bg-slate-50 border border-transparent hover:border-slate-100'
                    }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                      item.highlight ? 'bg-[#1E63F9] shadow-lg shadow-[#1E63F9]/30' : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <item.icon className={`w-6 h-6 ${item.highlight ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                    <span className={`text-base leading-relaxed pt-2 ${item.highlight ? 'text-slate-900 font-bold' : 'text-slate-700'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Event Duration */}
            <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-2xl p-8 shadow-xl shadow-[#FFD447]/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-xl mb-2">Thời lượng chương trình: 3h30</p>
                  <p className="text-slate-800">Bao gồm diễn giả hướng nghiệp chính, tư vấn 1:1 với học sinh, trao học bổng & quà tặng hấp dẫn</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Pricing & Options */}
          <div className="space-y-8 lg:sticky lg:top-32">
            {/* Premium Pricing Card */}
            <div className="bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0D4FD9] rounded-[2rem] p-8 lg:p-10 text-white shadow-2xl shadow-[#1E63F9]/30 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD447]/20 rounded-full blur-[60px]"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-[40px]"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                  <Star className="w-5 h-5 text-[#FFD447]" />
                  <span className="text-sm font-bold">Chi phí hợp lý nhất thị trường</span>
                </div>
                
                <p className="text-blue-100 text-lg mb-3">Chi phí chỉ từ</p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-6xl lg:text-7xl font-black tracking-tight">3.000.000</span>
                  <div className="text-left">
                    <span className="text-xl text-blue-200 block">VNĐ</span>
                    <span className="text-blue-200/80 text-sm">/ bàn tuyển sinh</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-10">
                  {[
                    'Bao gồm 1 bàn tư vấn & 2 ghế ngồi',
                    'Backdrop, banner và ấn phẩm trưng bày',
                    'Danh sách học sinh quan tâm sau sự kiện',
                    'Hỗ trợ PR truyền thông tại trường',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-[#FFD447] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="text-blue-50 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#register" 
                  className="group block w-full py-5 bg-white text-[#1E63F9] rounded-2xl font-black text-lg text-center hover:bg-[#FFD447] hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Đăng ký tham gia ngay
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Interest Options */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-100/50">
              <p className="font-bold text-slate-900 text-lg mb-6">Quý Đơn vị quan tâm đến:</p>
              <div className="space-y-3">
                {[
                  { value: 'agree', label: 'Đồng ý tham gia tại các trường mục tiêu', icon: CheckCircle2 },
                  { value: 'schedule', label: 'Nhận danh sách lịch tổ chức các sự kiện', icon: MessageSquare },
                  { value: 'stage', label: 'Muốn truyền thông trên sân khấu chính', icon: Mic2 },
                  { value: 'not-suitable', label: 'Chưa phù hợp thời điểm này', icon: Clock },
                ].map((item, i) => (
                  <label key={i} 
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#1E63F9]/5 cursor-pointer transition-all duration-200 border border-transparent hover:border-[#1E63F9]/10">
                    <input type="checkbox" 
                      className="w-5 h-5 rounded-md border-2 border-slate-300 text-[#1E63F9] focus:ring-[#1E63F9]/20 focus:ring-offset-0" />
                    <item.icon className="w-5 h-5 text-slate-400 group-hover:text-[#1E63F9] transition-colors" />
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChatbotSection() {
  return (
    <section id="chatbot" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-50 to-transparent rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#1E63F9]/5 to-transparent rounded-full blur-[100px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 mb-8">
            <Bot className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-emerald-700 font-bold tracking-wide">GÓI HỢP TÁC #2</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Chatbot AI Tuyển sinh
            <span className="block mt-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Tự động hóa tư vấn 24/7
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nền tảng Chatbot AI thông minh, giúp tự động tư vấn tuyển sinh cho học sinh mọi lúc, mọi nơi
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Benefits */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: MessageCircle, title: 'Tư vấn 24/7', desc: 'Tự động cung cấp thông tin tuyển sinh bất kể ngày đêm', color: 'emerald' },
                { icon: BarChart2, title: 'Tăng chuyển đổi', desc: 'Tăng tỷ lệ học sinh quan tâm chuyển đổi thành ứng viên', color: 'blue' },
                { icon: Database, title: 'Tích hợp dữ liệu', desc: 'Ngành học – điểm chuẩn – học phí luôn được cập nhật', color: 'violet' },
                { icon: Layers, title: 'Hệ sinh thái', desc: 'Tham gia mạng lưới tuyển sinh toàn quốc của InterEdu', color: 'amber' },
              ].map((item, i) => (
                <div key={i} 
                  className={`group bg-gradient-to-br p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    item.color === 'emerald' ? 'from-emerald-50 to-emerald-50/50 border-emerald-100 hover:shadow-emerald-100/50' :
                    item.color === 'blue' ? 'from-blue-50 to-blue-50/50 border-blue-100 hover:shadow-blue-100/50' :
                    item.color === 'violet' ? 'from-violet-50 to-violet-50/50 border-violet-100 hover:shadow-violet-100/50' :
                    'from-amber-50 to-amber-50/50 border-amber-100 hover:shadow-amber-100/50'
                  }`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    item.color === 'emerald' ? 'bg-emerald-500' :
                    item.color === 'blue' ? 'bg-blue-500' :
                    item.color === 'violet' ? 'bg-violet-500' :
                    'bg-amber-500'
                  }`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* How it works */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2rem] p-8 border border-slate-100 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#FFD447]" />
                Cách thức hoạt động
              </h3>
              <div className="space-y-4">
                {[
                  'InterEdu đào tạo Chatbot với thông tin tuyển sinh của Quý Đơn vị',
                  'Chatbot được tích hợp vào hệ sinh thái tư vấn của InterEdu',
                  'Học sinh truy cập và nhận tư vấn tự động 24/7',
                  'Quý Đơn vị nhận báo cáo danh sách học sinh quan tâm định kỳ',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1E63F9] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Pricing */}
          <div className="space-y-6 lg:sticky lg:top-32">
            {/* Training Fee */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2rem] p-8 text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[60px]"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-[#FFD447]" />
                  <span className="text-sm font-bold">Phí đào tạo Chatbot AI</span>
                </div>
                
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl lg:text-6xl font-black">5.000.000</span>
                  <span className="text-xl text-emerald-100">VNĐ</span>
                </div>
                <p className="text-emerald-100 text-lg mb-6">Chỉ thanh toán một lần duy nhất</p>
                
                <div className="space-y-3">
                  {[
                    'Đào tạo AI với đầy đủ thông tin tuyển sinh',
                    'Tích hợp vào hệ thống tư vấn InterEdu',
                    'Hỗ trợ kỹ thuật trong suốt quá trình sử dụng',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FFD447]" />
                      <span className="text-emerald-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Monthly Plans */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Phí duy trì hàng tháng</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Đơn vị trong nước', price: '500.000', free: 'Miễn phí 12 tháng đầu', desc: 'Đại học, Cao đẳng trong nước', popular: true },
                  { title: 'Đơn vị quốc tế', price: '1.000.000', free: 'Miễn phí 6 tháng đầu', desc: 'Đơn vị tuyển sinh quốc tế', popular: false },
                  { title: 'Đơn vị du học', price: '2.000.000', free: 'Miễn phí 6 tháng đầu', desc: 'Chỉ 01 đơn vị/quốc gia', popular: false },
                ].map((item, i) => (
                  <div key={i} 
                    className={`relative p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                      item.popular 
                        ? 'bg-[#1E63F9]/5 border-[#1E63F9]/30' 
                        : 'bg-slate-50 border-transparent hover:border-slate-200'
                    }`}>
                    {item.popular && (
                      <div className="absolute -top-3 right-4 px-3 py-1 bg-[#1E63F9] text-white text-xs font-bold rounded-full">
                        PHỔ BIẾN
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-slate-900">{item.price}</span>
                        <span className="text-slate-500 text-sm">đ/tháng</span>
                      </div>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                      <Gift className="w-4 h-4" />
                      {item.free}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 text-sm">
                  <strong>Lưu ý:</strong> Đối với đơn vị du học, InterEdu chỉ hợp tác với 01 đơn vị cho mỗi quốc gia có năng lực tuyển sinh.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <a href="#register" 
              className="group flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1">
              Đăng ký Chatbot AI ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function RegisterSection() {
  const [activeTab, setActiveTab] = useState('booth')
  const [boothForm, setBoothForm] = useState({ choice: '', organization: '', representative: '', position: '', phone: '' })
  const [chatbotForm, setChatbotForm] = useState({ organization: '', address: '', name: '', position: '', phone: '' })
  
  const handleSubmit = (e) => { 
    e.preventDefault()
    alert('Cảm ơn Quý Đơn vị đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.') 
  }
  
  return (
    <section id="register" className="py-28 lg:py-36 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-[#1E63F9]/5 to-transparent rounded-full blur-[100px]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD447]/20 to-[#FFD447]/10 border border-[#FFD447]/30 mb-8">
            <Send className="w-5 h-5 text-[#1E63F9]" />
            <span className="text-sm text-slate-900 font-bold tracking-wide">ĐĂNG KÝ HỢP TÁC</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Bắt đầu đồng hành
            <span className="block mt-2 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] bg-clip-text text-transparent">
              cùng InterEdu
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Điền thông tin bên dưới để đăng ký hợp tác. Chúng tôi sẽ liên hệ trong 24h làm việc.
          </p>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-2xl p-2 shadow-inner">
            <button
              onClick={() => setActiveTab('booth')}
              className={`px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'booth' 
                  ? 'bg-white text-[#1E63F9] shadow-lg shadow-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <School className="w-5 h-5" /> 
              Gian Tư vấn Trực tiếp
            </button>
            <button
              onClick={() => setActiveTab('chatbot')}
              className={`px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'chatbot' 
                  ? 'bg-white text-emerald-600 shadow-lg shadow-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Bot className="w-5 h-5" /> 
              Chatbot AI Tuyển sinh
            </button>
          </div>
        </div>
        
        {/* Form Container */}
        <div className={`bg-white rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-2xl shadow-slate-200/50 border-2 transition-all duration-500 ${
          activeTab === 'booth' ? 'border-[#1E63F9]/20' : 'border-emerald-200'
        }`}>
          {activeTab === 'booth' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">Lựa chọn của Quý Đơn vị *</label>
                <select className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-[#1E63F9] focus:bg-white focus:ring-4 focus:ring-[#1E63F9]/10 transition-all text-slate-700 font-medium"
                  value={boothForm.choice} onChange={(e) => setBoothForm({...boothForm, choice: e.target.value})} required>
                  <option value="">-- Vui lòng chọn --</option>
                  <option value="agree">Đồng ý đồng hành với các trường THPT</option>
                  <option value="request-schedule">Mong muốn nhận danh sách lịch tổ chức</option>
                  <option value="stage-promotion">Mong muốn truyền thông trên sân khấu</option>
                  <option value="not-suitable">Chưa phù hợp với phương án tuyển sinh</option>
                </select>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Tên tổ chức *</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-[#1E63F9] focus:bg-white focus:ring-4 focus:ring-[#1E63F9]/10 transition-all placeholder:text-slate-400" 
                    placeholder="Nhập tên trường/đơn vị"
                    value={boothForm.organization} onChange={(e) => setBoothForm({...boothForm, organization: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Người đại diện *</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-[#1E63F9] focus:bg-white focus:ring-4 focus:ring-[#1E63F9]/10 transition-all placeholder:text-slate-400" 
                    placeholder="Họ và tên"
                    value={boothForm.representative} onChange={(e) => setBoothForm({...boothForm, representative: e.target.value})} required />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Chức vụ *</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-[#1E63F9] focus:bg-white focus:ring-4 focus:ring-[#1E63F9]/10 transition-all placeholder:text-slate-400" 
                    placeholder="Chức vụ"
                    value={boothForm.position} onChange={(e) => setBoothForm({...boothForm, position: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Số điện thoại *</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-[#1E63F9] focus:bg-white focus:ring-4 focus:ring-[#1E63F9]/10 transition-all placeholder:text-slate-400" 
                    placeholder="Số điện thoại liên hệ"
                    value={boothForm.phone} onChange={(e) => setBoothForm({...boothForm, phone: e.target.value})} required />
                </div>
              </div>
              
              <button type="submit" className="group w-full py-5 bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#1E63F9]/25 hover:shadow-2xl hover:shadow-[#1E63F9]/40 transition-all duration-300 hover:-translate-y-1 mt-8">
                <Send className="w-5 h-5" /> 
                Gửi đăng ký tham gia
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">Tên tổ chức *</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400" 
                  placeholder="Nhập tên trường/đơn vị"
                  value={chatbotForm.organization} onChange={(e) => setChatbotForm({...chatbotForm, organization: e.target.value})} required />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">Địa chỉ *</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400" 
                  placeholder="Địa chỉ đơn vị"
                  value={chatbotForm.address} onChange={(e) => setChatbotForm({...chatbotForm, address: e.target.value})} required />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Họ tên người đăng ký *</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400" 
                    placeholder="Họ và tên"
                    value={chatbotForm.name} onChange={(e) => setChatbotForm({...chatbotForm, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Chức vụ *</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400" 
                    placeholder="Chức vụ"
                    value={chatbotForm.position} onChange={(e) => setChatbotForm({...chatbotForm, position: e.target.value})} required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">Số điện thoại *</label>
                <input type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400" 
                  placeholder="Số điện thoại liên hệ"
                  value={chatbotForm.phone} onChange={(e) => setChatbotForm({...chatbotForm, phone: e.target.value})} required />
              </div>
              
              <button type="submit" className="group w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 mt-8">
                <Bot className="w-5 h-5" /> 
                Đăng ký Chatbot AI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E63F9] via-[#1557E8] to-[#0847D4]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-[400px] h-[400px] bg-[#FFD447]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]"></div>
      </div>
      
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="w-5 h-5 text-[#FFD447]" />
          <span className="text-sm text-white font-semibold">Hợp tác cùng phát triển</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Sẵn sàng đồng hành
          <span className="block mt-2 bg-gradient-to-r from-[#FFD447] to-[#FFC107] bg-clip-text text-transparent">
            cùng InterEdu?
          </span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sự đồng hành của Quý Đơn vị sẽ góp phần nâng cao chất lượng công tác tư vấn hướng nghiệp 
          tại các trường THPT, mang lại hiệu quả tuyển sinh thiết thực và bền vững.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a href="#register" 
            className="group px-10 py-5 bg-white text-[#1E63F9] rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 flex items-center justify-center gap-3">
            Đăng ký hợp tác ngay
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          <a href="#contact" 
            className="group px-10 py-5 border-2 border-white/50 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5" />
            Liên hệ tư vấn
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1E63F9]/5 to-transparent rounded-full blur-[100px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E63F9]/10 to-[#1E63F9]/5 border border-[#1E63F9]/10 mb-8">
            <Phone className="w-5 h-5 text-[#1E63F9]" />
            <span className="text-sm text-[#1E63F9] font-bold tracking-wide">THÔNG TIN LIÊN HỆ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Liên hệ với
            <span className="bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] bg-clip-text text-transparent"> chúng tôi</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Chúng tôi rất mong nhận được sự quan tâm và hợp tác từ Quý Trường/Đơn vị
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Globe, label: 'Website', value: 'conghuongnghiep.edu.vn', href: 'https://www.conghuongnghiep.edu.vn', color: 'blue', gradient: 'from-blue-500 to-blue-600' },
            { icon: Mail, label: 'Email', value: 'bach.nguyen@interedu.ai.vn', href: 'mailto:bach.nguyen@interedu.ai.vn', color: 'emerald', gradient: 'from-emerald-500 to-teal-500' },
            { icon: Phone, label: 'Hotline', value: '1900-636866', href: 'tel:1900636866', color: 'amber', gradient: 'from-[#FFD447] to-[#FFC107]' },
            { icon: Users, label: 'Đại diện liên hệ', value: 'Nguyễn Gia Bách', subvalue: '0976.959.516', href: 'tel:0976959516', color: 'violet', gradient: 'from-violet-500 to-purple-600' },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.icon === Globe ? '_blank' : undefined} rel={item.icon === Globe ? 'noopener noreferrer' : undefined}
               className="group bg-white rounded-2xl p-8 text-center border border-slate-100 hover:border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-slate-500 font-medium mb-2">{item.label}</p>
              <p className="text-base text-slate-900 font-bold">{item.value}</p>
              {item.subvalue && <p className="text-[#1E63F9] font-bold mt-1">{item.subvalue}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E63F9] via-[#FFD447] to-[#1E63F9]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Company */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/logo.png" alt="InterEdu Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <span className="font-black text-white text-2xl">InterEdu</span>
                <p className="text-slate-400 text-sm">Education Solutions</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              Công ty TNHH Giải pháp Giáo dục InterEdu
            </p>
          </div>
          
          {/* Message */}
          <div className="text-center">
            <p className="text-slate-300 text-lg leading-relaxed">
              Xin chân thành cảm ơn và kính chúc Quý Đơn vị 
              <span className="text-[#FFD447] font-semibold"> ngày càng phát triển bền vững!</span>
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {[
                { href: '#about', label: 'Giới thiệu' },
                { href: '#services', label: 'Dịch vụ' },
                { href: '#chatbot', label: 'Chatbot AI' },
                { href: '#contact', label: 'Liên hệ' },
              ].map((link) => (
                <a key={link.href} href={link.href} 
                  className="px-4 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 InterEdu. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Shield className="w-4 h-4" />
            <span>Bảo mật & Uy tín</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ChatbotSection />
        <RegisterSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
