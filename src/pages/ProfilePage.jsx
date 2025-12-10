import { useNavigate } from 'react-router-dom'
import { 
  Phone, Mail, 
  Building2, ChevronLeft,
  FileText, MapPin, Target, Users, GraduationCap, Heart, ArrowRight, ArrowDown, HeartHandshake
} from 'lucide-react'

function ProfilePage({ basePath = '' }) {
  const navigate = useNavigate()
  const backPath = basePath || '/'

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
            <button onClick={() => navigate(backPath)} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Quay lại
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E63F9]/10 text-[#1E63F9] font-medium mb-4">
            <FileText className="w-4 h-4" />
            Hồ sơ năng lực
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</h1>
          <p className="text-slate-600">Đồng hành cùng học sinh trong hành trình định hướng nghề nghiệp</p>
        </div>

        {/* Section 1: Giấy phép ĐKKD */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#1E63F9]" />
            Giấy chứng nhận đăng ký kinh doanh
          </h2>
          <div className="w-full rounded-xl overflow-hidden border-2 border-slate-200">
            <iframe
              src="/interedu.pdf"
              title="Giấy chứng nhận đăng ký kinh doanh"
              className="w-full h-[600px] md:h-[800px]"
            />
          </div>
          <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-amber-800 font-medium text-sm">Mã số doanh nghiệp</p>
                <p className="text-xl font-black text-amber-900">0111082142</p>
              </div>
              <div>
                <p className="text-amber-800 font-medium text-sm">Đăng ký lần đầu</p>
                <p className="text-lg font-bold text-amber-900">09/06/2025</p>
              </div>
              <div>
                <p className="text-amber-800 font-medium text-sm">Vốn điều lệ</p>
                <p className="text-lg font-bold text-amber-900">1.000.000.000 VNĐ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Tiêu chí hoạt động - Mô hình hoạt động InterEdu */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-[#1E63F9]" />
            Mô hình hoạt động của InterEdu
          </h2>
          
          {/* Flowchart */}
          <div className="space-y-6">
            {/* Row 1: Quỹ đối tác + InterEdu tại mỗi nhà trường */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              {/* Quỹ đối tác đồng hành tài trợ */}
              <div className="lg:col-span-3 bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <HeartHandshake className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-800">Quỹ Đối tác</h3>
                </div>
                <p className="text-sm text-emerald-700">Đồng hành tài trợ</p>
              </div>

              {/* Arrow */}
              <div className="lg:col-span-1 flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-[#1E63F9] hidden lg:block" />
                <ArrowDown className="w-8 h-8 text-[#1E63F9] lg:hidden" />
              </div>

              {/* InterEdu tại mỗi nhà trường */}
              <div className="lg:col-span-8 bg-[#1E63F9]/5 border-2 border-[#1E63F9] rounded-xl p-4">
                <h3 className="font-bold text-[#1E63F9] mb-3 text-center">InterEdu tại mỗi nhà trường THPT hàng năm</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1E63F9] text-white rounded-full text-sm font-bold mr-2">1</span>
                    <span className="text-sm text-slate-700">Hạ tầng quản lý hướng nghiệp của nhà trường</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1E63F9] text-white rounded-full text-sm font-bold mr-2">2</span>
                    <span className="text-sm text-slate-700">Đồng hành tổ chức ngày hội hướng nghiệp cho học sinh</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1E63F9] text-white rounded-full text-sm font-bold mr-2">3</span>
                    <span className="text-sm text-slate-700">Các chương trình bồi dưỡng, tập huấn miễn phí, dự án hướng nghiệp</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1E63F9] text-white rounded-full text-sm font-bold mr-2">4</span>
                    <span className="text-sm text-slate-700">Hạ tầng hướng nghiệp, khám phá bản thân, đánh giá năng lực miễn phí cho học sinh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#1E63F9]" />
            </div>

            {/* Row 2: Khảo sát + Giới thiệu + Dự án */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Khảo sát 80% số HS */}
              <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 mb-2">Khảo sát 80% số HS</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>→ Nhu cầu nghề nghiệp</li>
                  <li>→ Kỹ năng cần rèn luyện</li>
                </ul>
              </div>

              {/* Giới thiệu cộng đồng */}
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 mb-2">Giới thiệu cộng đồng nghiệp edu.vn</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>→ Học sinh khám phá bản thân</li>
                  <li>→ Học sinh tham gia GDNL</li>
                  <li>→ Học sinh được định hướng và rèn luyện</li>
                </ul>
              </div>

              {/* Dự án hướng nghiệp */}
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-2">Dự án hướng nghiệp</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>→ Học sinh tham gia cuộc thi, dự án</li>
                  <li>→ Tài trợ học bổng cho học sinh</li>
                </ul>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#1E63F9]" />
            </div>

            {/* Row 3: Kết nối */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Kết nối tư vấn */}
              <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 mb-2">Kết nối</h3>
                <p className="text-sm text-teal-700">Tư vấn miễn phí cho học sinh</p>
              </div>

              {/* Kết nối hướng dẫn */}
              <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 mb-2">Kết nối hướng dẫn</h3>
                <p className="text-sm text-teal-700">Học sinh thực tập theo lộ trình</p>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#1E63F9]" />
            </div>

            {/* Row 4: Phương thức */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 mb-2">Phương thức hoạt động</h3>
                <p className="text-sm text-rose-700">Đặt link tư vấn trực tiếp ô khảo sát cho học sunh đăng ký</p>
              </div>

              <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 mb-2">Nội dung</h3>
                <p className="text-sm text-indigo-700">Tư vấn học sinh từ phân tích của AI và nhu cầu của học sinh qua chatbot AI</p>
              </div>

              <div className="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-4">
                <h3 className="font-bold text-cyan-800 mb-2">Tổ chức</h3>
                <p className="text-sm text-cyan-700">Tổ chức ngày hội hướng nghiệp / Phát động các cuộc thi tuyên truyền</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Hình ảnh tiêu biểu */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-[#1E63F9]" />
            Hình ảnh hoạt động tiêu biểu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <img src="/huongnghiep1.jpg" alt="Hoạt động hướng nghiệp 1" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <img src="/huongnghiep2.jpg" alt="Hoạt động hướng nghiệp 2" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <img src="/huongnghiep3.jpg" alt="Hoạt động hướng nghiệp 3" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <img src="/huongnghiep4.jpg" alt="Hoạt động hướng nghiệp 4" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <img src="/huongnghiep5.jpg" alt="Hoạt động hướng nghiệp 5" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <img src="/huongnghiep6.jpg" alt="Hoạt động hướng nghiệp 6" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>

        {/* Section 4: Đồng hành với cộng đồng - Số liệu + Ảnh tài khoản đối tác */}
        <div className="bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] rounded-2xl p-6 shadow-lg mb-8 text-white">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6" />
            Đồng hành với cộng đồng trên nền tảng
          </h2>
          
          {/* Số liệu - khung vàng */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-amber-400 rounded-xl p-4 text-center border-4 border-amber-300">
              <p className="text-3xl font-black text-slate-900">300+</p>
              <p className="text-sm text-slate-800 font-medium">Trường THPT</p>
            </div>
            <div className="bg-amber-400 rounded-xl p-4 text-center border-4 border-amber-300">
              <p className="text-3xl font-black text-slate-900">109,000+</p>
              <p className="text-sm text-slate-800 font-medium">Học sinh</p>
            </div>
            <div className="bg-amber-400 rounded-xl p-4 text-center border-4 border-amber-300">
              <p className="text-3xl font-black text-slate-900">100+</p>
              <p className="text-sm text-slate-800 font-medium">Chuyên gia tư vấn</p>
            </div>
            <div className="bg-amber-400 rounded-xl p-4 text-center border-4 border-amber-300">
              <p className="text-3xl font-black text-slate-900">20+</p>
              <p className="text-sm text-slate-800 font-medium">Đối tác doanh nghiệp</p>
            </div>
          </div>

          {/* Ảnh tài khoản đối tác */}
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Tài khoản đối tác trên nền tảng</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <img src="/minhchung1.png" alt="Tài khoản đối tác 1" className="w-full rounded-lg" />
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <img src="/minhchung2.png" alt="Tài khoản đối tác 2" className="w-full rounded-lg" />
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                <img src="/minhchung3.png" alt="Tài khoản đối tác 3" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Thông tin liên hệ */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-[#1E63F9]" />
            Thông tin liên hệ
          </h2>
          
          <div className="bg-gradient-to-r from-[#1E63F9]/5 to-[#1E63F9]/10 rounded-xl p-6 border border-[#1E63F9]/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#1E63F9] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-xl">ThS. Nguyễn Gia Bách</h3>
                <p className="text-[#1E63F9] font-semibold">Đại diện liên hệ</p>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-700">0977 087 008</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-700">Giabachhanoi1405@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-700">Lô A14 đường Nguyễn Cảnh Dị, Phường Đại Kim, Quận Hoàng Mai, Thành phố Hà Nội</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>© 2025 InterEdu - Giải pháp giáo dục hướng nghiệp</p>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
