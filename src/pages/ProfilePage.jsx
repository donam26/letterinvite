import { useNavigate } from 'react-router-dom'
import { 
  Users, Phone, Mail, 
  Building2, ChevronLeft,
  FileText, User, Banknote, Info, MapPin
} from 'lucide-react'

function ProfilePage({ basePath = '' }) {
  const navigate = useNavigate()
  const backPath = basePath || '/'
  const aboutPath = basePath ? `${basePath}/about` : '/about'

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
            <button onClick={() => navigate(aboutPath)} className="flex items-center gap-2 text-slate-600 font-medium hover:text-[#1E63F9] transition-colors">
              <Info className="w-4 h-4" /> Về chúng tôi
            </button>
            <button onClick={() => navigate(backPath)} className="flex items-center gap-2 text-[#1E63F9] font-medium hover:underline">
              <ChevronLeft className="w-4 h-4" /> Quay lại
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E63F9]/10 text-[#1E63F9] font-medium mb-4">
            <FileText className="w-4 h-4" />
            Hồ sơ năng lực
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP</h1>
          <p className="text-slate-600">CÔNG TY TRÁCH NHIỆM HỮU HẠN HAI THÀNH VIÊN TRỞ LÊN</p>
        </div>

        {/* Quốc hiệu */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 text-center">
          <p className="text-red-600 font-bold text-lg">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p className="text-slate-900 font-semibold">Độc lập - Tự do - Hạnh Phúc</p>
          <div className="w-24 h-0.5 bg-slate-300 mx-auto mt-2"></div>
          <p className="text-slate-600 mt-4 text-sm">SỞ TÀI CHÍNH THÀNH PHỐ HÀ NỘI</p>
          <p className="text-slate-600 text-sm">PHÒNG ĐĂNG KÝ KINH DOANH VÀ TÀI CHÍNH DOANH NGHIỆP</p>
        </div>

        {/* Thông tin công ty */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#1E63F9]" />
            1. Tên công ty
          </h2>
          <div className="space-y-3 pl-9">
            <div>
              <p className="text-sm text-slate-500">Tên công ty viết bằng tiếng Việt:</p>
              <p className="font-bold text-slate-900">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Tên công ty viết bằng tiếng nước ngoài:</p>
              <p className="font-bold text-slate-900">INTEREDU EDUCATIONAL SOLUTION COMPANY LIMITED</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Tên công ty viết tắt:</p>
              <p className="font-bold text-slate-900">INTEREDU EDUCATIONAL SOLUTION CO.,LTD</p>
            </div>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#1E63F9]" />
            2. Địa chỉ trụ sở chính
          </h2>
          <div className="pl-9 space-y-3">
            <p className="text-slate-700">Lô A14 đường Nguyễn Cảnh Dị, Phường Đại Kim, Quận Hoàng Mai, Thành phố Hà Nội, Việt Nam</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600">0977087008</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600">Giabachhanoi1405@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vốn điều lệ */}
        <div className="bg-gradient-to-r from-[#1E63F9] to-[#0D4FD9] rounded-2xl p-6 shadow-lg mb-6 text-white">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <Banknote className="w-6 h-6" />
            3. Vốn điều lệ
          </h2>
          <div className="pl-9">
            <p className="text-3xl font-black">1.000.000.000 VNĐ</p>
            <p className="text-white/80">Bằng chữ: Một tỷ đồng</p>
          </div>
        </div>

        {/* Mã số doanh nghiệp */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-amber-800 font-medium">Mã số doanh nghiệp</p>
              <p className="text-2xl font-black text-amber-900">0111082142</p>
            </div>
            <div>
              <p className="text-amber-800 font-medium">Đăng ký lần đầu</p>
              <p className="text-lg font-bold text-amber-900">09/06/2025</p>
            </div>
          </div>
        </div>

        {/* Danh sách thành viên góp vốn */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-[#1E63F9]" />
            4. Danh sách thành viên góp vốn
          </h2>
          
          <div className="space-y-4">
            {/* Thành viên 1 */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E63F9] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg">NGUYỄN ANH QUÂN</h3>
                  <p className="text-slate-500 text-sm">Quốc tịch: Việt Nam</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-slate-500">Địa chỉ liên lạc</p>
                      <p className="text-sm text-slate-700">P112A1 Tập thể Phố Giảng Võ, Phường Giảng Võ, Quận Ba Đình, Thành phố Hà Nội</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Số CCCD</p>
                      <p className="text-sm text-slate-700">001087012547</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-6">
                    <div className="bg-emerald-100 px-3 py-1 rounded-full">
                      <span className="text-emerald-700 font-bold">500.000.000 VNĐ</span>
                    </div>
                    <div className="bg-blue-100 px-3 py-1 rounded-full">
                      <span className="text-blue-700 font-bold">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thành viên 2 */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E63F9] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg">NGUYỄN XUÂN ANH</h3>
                  <p className="text-slate-500 text-sm">Quốc tịch: Việt Nam</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-slate-500">Địa chỉ liên lạc</p>
                      <p className="text-sm text-slate-700">P62A2 Tập thể Phố Trần Quốc Toản, Phường Hàng Bài, Quận Hoàn Kiếm, Thành phố Hà Nội</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Số CCCD</p>
                      <p className="text-sm text-slate-700">001082010513</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-6">
                    <div className="bg-emerald-100 px-3 py-1 rounded-full">
                      <span className="text-emerald-700 font-bold">500.000.000 VNĐ</span>
                    </div>
                    <div className="bg-blue-100 px-3 py-1 rounded-full">
                      <span className="text-blue-700 font-bold">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Người đại diện theo pháp luật */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-[#1E63F9]" />
            5. Người đại diện theo pháp luật của công ty
          </h2>
          
          <div className="bg-gradient-to-r from-[#1E63F9]/5 to-[#1E63F9]/10 rounded-xl p-6 border border-[#1E63F9]/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#1E63F9] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <User className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-xl">NGUYỄN ANH QUÂN</h3>
                <p className="text-[#1E63F9] font-semibold">Giám đốc</p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Giới tính</p>
                    <p className="text-slate-700">Nam</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Sinh ngày</p>
                    <p className="text-slate-700">27/03/1987</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Dân tộc</p>
                    <p className="text-slate-700">Kinh</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Quốc tịch</p>
                    <p className="text-slate-700">Việt Nam</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Số CCCD</p>
                    <p className="text-slate-700">001087012547</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Ngày cấp</p>
                    <p className="text-slate-700">04/08/2022</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-500">Nơi cấp</p>
                    <p className="text-slate-700">Cục cảnh sát quản lý hành chính về trật tự xã hội</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-500">Địa chỉ thường trú</p>
                    <p className="text-slate-700">P112A1 Tập thể Phố Giảng Võ, Phường Giảng Võ, Quận Ba Đình, Thành phố Hà Nội, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>TRƯỞNG PHÒNG</p>
          <p className="mt-2">Sở Tài chính Thành phố Hà Nội</p>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
