import { useNavigate } from 'react-router-dom'
import { 
  CheckCircle, Phone, Mail, Globe, 
  Building2, ChevronLeft,
  Target, FileText, Info, Lightbulb, Heart, Rocket,
  TrendingUp, Award, Camera, Bot, MapPin, ExternalLink
} from 'lucide-react'

function AboutPage({ basePath = '' }) {
  const navigate = useNavigate()
  const backPath = basePath || '/'
  const profilePath = basePath ? `${basePath}/profile` : '/profile'

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
            <button onClick={() => navigate(profilePath)} className="flex items-center gap-2 text-slate-600 font-medium hover:text-[#1E63F9] transition-colors">
              <FileText className="w-4 h-4" /> Hồ sơ năng lực
            </button>
            <button onClick={() => navigate(backPath)} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Quay lại
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E63F9]/10 text-[#1E63F9] font-medium mb-4">
            <Info className="w-4 h-4" />
            Về chúng tôi
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">INTEREDU EDUCATIONAL SOLUTION</h1>
          <p className="text-slate-600">Giải pháp giáo dục thông minh - Đồng hành cùng tương lai</p>
        </div>

        {/* Giới thiệu */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#1E63F9]" />
            Giới thiệu công ty
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</strong> là đơn vị tiên phong trong lĩnh vực 
            ứng dụng công nghệ AI vào giáo dục và hướng nghiệp tại Việt Nam. Chúng tôi cung cấp các giải pháp 
            tuyển sinh thông minh, kết nối các trường đại học, cao đẳng với học sinh THPT trên toàn quốc.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Với đội ngũ chuyên gia giàu kinh nghiệm và nền tảng công nghệ hiện đại, InterEdu cam kết mang đến 
            những giải pháp tối ưu nhất cho công tác tuyển sinh và hướng nghiệp.
          </p>
        </div>

        {/* Tầm nhìn & Sứ mệnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-[#1E63F9] to-[#0D4FD9] rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-3">Tầm nhìn</h3>
            <p className="text-white/90 leading-relaxed">
              Trở thành nền tảng hướng nghiệp và tuyển sinh hàng đầu Việt Nam, ứng dụng AI để kết nối 
              học sinh với cơ hội giáo dục phù hợp nhất.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-3">Sứ mệnh</h3>
            <p className="text-white/90 leading-relaxed">
              Đồng hành cùng các trường đại học, cao đẳng trong công tác tuyển sinh, giúp học sinh 
              tìm được con đường học tập phù hợp với năng lực và đam mê.
            </p>
          </div>
        </div>

        {/* Giá trị cốt lõi */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-[#1E63F9]" />
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Đổi mới sáng tạo', desc: 'Không ngừng cải tiến và ứng dụng công nghệ mới', icon: Rocket },
              { title: 'Tận tâm phục vụ', desc: 'Luôn đặt lợi ích của đối tác và học sinh lên hàng đầu', icon: Heart },
              { title: 'Chất lượng vượt trội', desc: 'Cam kết mang đến dịch vụ và sản phẩm tốt nhất', icon: CheckCircle },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1E63F9]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#1E63F9]" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sản phẩm & Dịch vụ */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Bot className="w-6 h-6 text-[#1E63F9]" />
            Sản phẩm & Dịch vụ
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Cổng hướng nghiệp', url: 'www.conghuongnghiep.edu.vn', desc: 'Nền tảng hướng nghiệp tích hợp AI' },
              { name: 'MBTI AI', url: 'www.mbti.ai.vn', desc: 'Trắc nghiệm tính cách và định hướng nghề nghiệp' },
              { name: 'InterEdu AI', url: 'www.interedu.ai.vn', desc: 'Chatbot tư vấn tuyển sinh thông minh' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-[#1E63F9] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
                <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" 
                  className="text-[#1E63F9] font-medium hover:underline flex items-center gap-1">
                  {item.url} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Minh chứng & Số liệu */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-[#1E63F9]" />
            Minh chứng & Số liệu
          </h2>

          {/* Minh chứng Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: '/minhchung1.png', title: 'Giấy chứng nhận ĐKKD' },
              { src: '/minhchung2.png', title: 'Chứng nhận đối tác' },
              { src: '/minhchung3.png', title: 'Giấy phép hoạt động' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hình ảnh Ngày hội hướng nghiệp */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <Camera className="w-6 h-6 text-[#1E63F9]" />
            Hình ảnh Ngày hội hướng nghiệp
          </h2>
          <p className="text-slate-500 mb-6">Những khoảnh khắc đáng nhớ từ các sự kiện hướng nghiệp do InterEdu tổ chức</p>
          
          {/* Gallery Grid - Row 1 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-2 group relative overflow-hidden rounded-xl cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src="/huongnghiep1.jpg" alt="Ngày hội hướng nghiệp 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src="/huongnghiep2.jpg" alt="Ngày hội hướng nghiệp 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src="/huongnghiep3.jpg" alt="Ngày hội hướng nghiệp 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Gallery Grid - Row 2 */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            {['/huongnghiep4.jpg', '/huongnghiep5.jpg', '/huongnghiep6.jpg', '/huongnghiep7.jpg'].map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img src={src} alt={`Ngày hội hướng nghiệp ${i + 4}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#1E63F9] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-900">Ngày hội hướng nghiệp - Kết nối tương lai</p>
              <p className="text-sm text-slate-600 mt-1">
                InterEdu đã tổ chức thành công hơn 20 ngày hội hướng nghiệp tại các trường THPT trên toàn quốc, 
                kết nối hàng nghìn học sinh với các trường đại học, cao đẳng uy tín.
              </p>
            </div>
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div className="bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Phone className="w-6 h-6" />
            Thông tin liên hệ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-slate-900 mb-2">ThS. Ngô Gia Bách</p>
              <div className="space-y-2 text-slate-700">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> bach.nguyen@interedu.ai.vn</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0976.959.516 (Zalo)</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-slate-900 mb-2">Trụ sở chính</p>
              <p className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                Lô A14 đường Nguyễn Cảnh Dị, Phường Đại Kim, Quận Hoàng Mai, Hà Nội
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
