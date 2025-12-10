import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft, FileText, Send, Globe, Phone, Mail,
  Users, CheckCircle, Sparkles, Gift, HandMetal, Building2, MapPin
} from 'lucide-react'
import { submitToGoogleSheet } from '../utils/googleSheet'

function OfflinePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ choice: '', org: '', name: '', position: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => { 
    e.preventDefault()
    setIsSubmitting(true)
    
    const result = await submitToGoogleSheet({
      formType: 'Offline - Tổng hợp',
      ...form
    })
    
    setIsSubmitting(false)
    
    if (result.success) {
      alert('Cảm ơn Quý Đơn vị đã đăng ký Gói đồng hành Offline!')
      setForm({ choice: '', org: '', name: '', position: '', phone: '' })
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
              <Building2 className="w-7 h-7 text-[#1E63F9]" />
            </div>
            <p className="text-2xl font-black text-slate-900">Lớp 8-12</p>
            <p className="text-slate-500 text-sm">Đối tượng học sinh</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#FFD447]/20 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-[#FFD447]" />
            </div>
            <p className="text-2xl font-black text-slate-900">Trực tiếp</p>
            <p className="text-slate-500 text-sm">Tại các trường THPT</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Users className="w-7 h-7 text-emerald-500" />
            </div>
            <p className="text-2xl font-black text-emerald-600">Miễn phí</p>
            <p className="text-slate-500 text-sm">Cho học sinh THPT</p>
          </div>
        </div>

        {/* Hình thức Offline */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-emerald-600 text-sm font-medium">Hình thức 1</p>
              <h2 className="text-xl font-bold text-slate-900">Đồng hành Offline</h2>
            </div>
          </div>

          <p className="text-slate-700 font-medium mb-4">Ngày hội Hướng nghiệp tại các trường THPT</p>

          <div className="space-y-3 mb-6">
            {[
              'Gian tư vấn trực tiếp',
              'Kết nối Ban Giám hiệu',
              'Tăng nhận diện thương hiệu',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Chi phí gian hàng */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">Chi phí gian hàng:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-emerald-800">Gói A</span>
              </div>
              <p className="text-sm text-slate-600 mb-1">Cho <strong>10 trường THPT công lập bất kỳ</strong></p>
              <p className="text-xs text-slate-500">mà InterEdu tổ chức</p>
              <div className="mt-3 pt-3 border-t border-emerald-200">
                <p className="text-sm text-slate-500">15.000.000 VNĐ + 8% VAT</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-800">Gói B</span>
              </div>
              <p className="text-sm text-slate-600 mb-1">Cho <strong>10 trường THPT công lập</strong></p>
              <p className="text-xs text-slate-500">mà đơn vị muốn tham dự</p>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <p className="text-sm text-slate-500">30.000.000 VNĐ + 8% VAT</p>
              </div>
            </div>
          </div>

          {/* Phương án hợp tác */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <HandMetal className="w-5 h-5 text-[#1E63F9]" />
              Phương án hợp tác
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hai bên ký hợp đồng nguyên tắc, InterEdu sẽ thông báo lịch tổ chức cụ thể tại từng trường <strong>trước 14 ngày làm việc</strong> và thanh toán theo từng trường.
            </p>
          </div>

          {/* Chương trình */}
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-6">
            <h4 className="font-bold text-amber-800 mb-3">Chương trình diễn ra trong 3h30:</h4>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Một diễn giả hướng nghiệp trên sân khấu</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Các phòng tham vấn 1:1 với hơn 10 diễn giả</span>
              </li>
              <li className="flex items-start gap-2">
                <Gift className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Trao tặng học bổng và quà tặng</span>
              </li>
            </ul>
          </div>

          {/* Form đăng ký */}
          <div className="bg-white rounded-xl p-5 border-2 border-emerald-200">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-emerald-600" />
              Đăng ký đồng hành Offline
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Vui lòng lựa chọn *</label>
                <div className="space-y-2">
                  {[
                    'Không phù hợp với phương án tuyển sinh của Trường',
                    'Đồng ý đồng hành đối với các trường THPT/ khu vực tuyển sinh mà Trường hướng tới',
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="choice"
                        value={option}
                        checked={form.choice === option}
                        onChange={(e) => setForm({ ...form, choice: e.target.value })}
                        className="mt-1"
                        required
                      />
                      <span className="text-sm text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên tổ chức *</label>
                  <input type="text" required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Tên trường" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Người đại diện *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Họ và tên" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Chức vụ *</label>
                  <input type="text" required value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Chức vụ" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Số điện thoại" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                <Send className="w-5 h-5" /> {isSubmitting ? 'Đang gửi...' : 'Gửi đăng ký'}
              </button>
            </form>
          </div>
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
          <p className="mb-2">Xin chân thành cảm ơn và kính chúc Quý Đơn vị ngày càng phát triển bền vững!</p>
          <p className="text-white/60 text-sm">Trân trọng,</p>
          <p className="font-bold text-[#FFD447]">Đây là chương trình vì cộng động, Quý Trường (hoặc Quý Đơn vị) có thể liên hệ trực tiếp với chúng tôi để sử dụng cổng hướng nghiệp phục vụ cho mục tiêu tuyển sinh riêng của Quý Trường ( hoặc Quý Đơn vị)</p>
          <p className=" mt-3 font-bold text-[#FFD447]">CÔNG TY TNHH GIẢI PHÁP GIÁO DỤC INTEREDU</p>
        </div>
      </div>
    </section>
  )
}

export default OfflinePage
