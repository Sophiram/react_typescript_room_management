import { useState } from 'react';
import { User, Phone, CreditCard, ArrowRight, ClipboardCheck } from 'lucide-react';

export function RegisterGuest() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [idCard, setIdCard] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering Guest:', { name, phone, idCard });
    alert('ចុះឈ្មោះភ្ញៀវបានជោគជ័យ!');
  };

  return (
    <div className="p-6 lg:p-10 max-w-2xl mx-auto w-full animate-fade-in">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg font-black text-gray-900">ចុះឈ្មោះព័ត៌មានភ្ញៀវ (Register Guest)</h2>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">ប្រព័ន្ធកត់ត្រាអត្តសញ្ញាណភ្ញៀវមុនពេលកក់ ឬ Check-in</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1.5">ឈ្មោះពេញរបស់ភ្ញៀវ</label>
            <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/10 focus-within:border-emerald-500 transition-all">
              <User size={16} className="absolute left-3.5 text-gray-400" />
              <input type="text" required placeholder="ឧទាហរណ៍៖ សុខ ជា" value={name} onChange={e => setName(e.target.value)} className="w-full pl-11 pr-4 py-3 text-xs outline-none text-gray-700 bg-transparent" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1.5">លេខទូរស័ព្ទទំនាក់ទំនង</label>
            <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/10 focus-within:border-emerald-500 transition-all">
              <Phone size={16} className="absolute left-3.5 text-gray-400" />
              <input type="tel" required placeholder="ឧទាហរណ៍៖ 012 345 678" value={phone} onChange={e => setPhone(e.target.value)} className="w-full pl-11 pr-4 py-3 text-xs outline-none text-gray-700 bg-transparent" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1.5">លេខអត្តសញ្ញាណប័ណ្ណ / លិខិតឆ្លងដែន</label>
            <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/10 focus-within:border-emerald-500 transition-all">
              <CreditCard size={16} className="absolute left-3.5 text-gray-400" />
              <input type="text" required placeholder="ឧទាហរណ៍៖ 098765432" value={idCard} onChange={e => setIdCard(e.target.value)} className="w-full pl-11 pr-4 py-3 text-xs outline-none text-gray-700 bg-transparent" />
            </div>
          </div>

          <button type="submit" className="w-full mt-2 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer active:scale-95">
            <span>រក្សាទុកទិន្នន័យភ្ញៀវ</span>
            <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}