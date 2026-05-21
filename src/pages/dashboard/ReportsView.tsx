import { FileText, ArrowUpRight, TrendingUp, Calendar, Download } from 'lucide-react';

export function ReportsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Financial Reports</h1>
          <p className="text-xs text-slate-500">Track properties revenue operations, invoice breakdowns, and analytics.</p>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 hover:bg-slate-50 bg-white text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
          <Download size={16} /> Export Statement
        </button>
      </div>

      {/* Analytics Mini Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Gross Performance</span>
            <h3 className="text-xl font-black text-slate-900">$14,820.00</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl flex items-center gap-1 text-xs font-bold"><TrendingUp size={14} /> +12%</div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Collected Invoices</span>
            <h3 className="text-xl font-black text-slate-900">38 Invoices</h3>
          </div>
          <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">92% Paid</span>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Outstanding Balance</span>
            <h3 className="text-xl font-black text-slate-900">$640.00</h3>
          </div>
          <span className="text-[10px] font-bold uppercase bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full">Pending 3</span>
        </div>
      </div>

      {/* Fake Chart Work Space Block */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b border-slate-50 pb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2"><Calendar size={14} className="text-blue-600" /> Revenue Timeline (2026)</h3>
          <span className="text-[11px] font-bold text-slate-400">Updated 5m ago</span>
        </div>
        <div className="h-48 bg-slate-50/75 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-1.5">
          <FileText size={24} className="text-slate-300" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Analytical Chart Flow Workspace</p>
          <span className="text-[10px] text-slate-400 font-medium">Data plotting active for fiscal metrics</span>
        </div>
      </div>
    </div>
  );
}