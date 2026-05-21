import { DollarSign, Save, Zap, Droplet, Wifi, ShieldCheck } from 'lucide-react';

export function PricesServices() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Prices & Services</h1>
        <p className="text-xs text-slate-500">Configure global utility tariffs, internet fees, and supplementary service rates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Utilities Rates */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-600">Utility Utilities Cost</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2"><Zap size={14} className="text-amber-500" /> Electricity (per kWh)</label>
              <div className="relative"><span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-bold text-xs">$</span><input type="number" defaultValue="0.25" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-7 pr-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" /></div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2"><Droplet size={14} className="text-blue-500" /> Water (per m³)</label>
              <div className="relative"><span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-bold text-xs">$</span><input type="number" defaultValue="0.75" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-7 pr-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" /></div>
            </div>
          </div>
        </div>

        {/* Fixed Services */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-600">Fixed Monthly Services</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2"><Wifi size={14} className="text-indigo-500" /> High-Speed Internet</label>
              <div className="relative"><span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-bold text-xs">$</span><input type="number" defaultValue="15.00" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-7 pr-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" /></div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-500" /> Security & Waste Collection</label>
              <div className="relative"><span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-bold text-xs">$</span><input type="number" defaultValue="5.00" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-7 pr-4 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-blue-600/10">
          <Save size={16} /> Save Tariff System
        </button>
      </div>
    </div>
  );
}