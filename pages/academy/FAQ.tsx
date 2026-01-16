import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: '极目学院的课程是否收费？',
    a: '极目学院的基础线上课程（如入门飞行、APP操作等）完全免费。针对高级维修、教员认证等线下实操课程，会收取一定的培训费用，具体请咨询当地授权培训中心。'
  },
  {
    q: '如何获得UTC无人机操作手合格证？',
    a: '您需要报名参加极目学院授权的UTC培训课程（通常为期4-7天），完成理论学习与实操训练，并通过慧飞（UTC）组织的统一考试，即可获得由中国航空运输协会（CATA）和中国成人教育协会（CAEA）联合颁发的合格证书。'
  },
  {
    q: '线上课程学习完成后有证书吗？',
    a: '完成线上课程学习并通过在线测试后，您可以在个人中心下载电子版结业证书。该证书可作为您参与线下高阶培训的前置资格证明。'
  },
  {
    q: '找不到附近的培训中心怎么办？',
    a: '请在“培训网点”页面查看全国分校地图。如果您所在的区域暂无网点，可以拨打400服务热线，我们将为您推荐最近的培训点或安排送教上门服务。'
  },
  {
    q: '我是老用户，是否需要重新参加培训？',
    a: '针对极目新发布的机型（如2026款EA-J100），由于功能与操作逻辑有较大升级，我们强烈建议老用户参加转机型培训课程，以便快速掌握新设备特性。'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50 py-16 animate-fade-in font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <h1 className="text-3xl font-bold text-gray-900 mb-4">常见问题</h1>
           <p className="text-gray-500">这里汇集了学员们最关心的问题</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-lg font-medium ${openIndex === idx ? 'text-jimu-blue' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                {openIndex === idx ? <Minus size={20} className="text-jimu-blue flex-shrink-0" /> : <Plus size={20} className="text-gray-400 flex-shrink-0" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-blue-50 rounded-lg border border-blue-100">
           <p className="text-gray-700 mb-4">没有找到您的问题？</p>
           <button className="px-6 py-2 bg-jimu-blue text-white rounded hover:bg-blue-700 transition-colors">
             联系在线客服
           </button>
        </div>

      </div>
    </div>
  );
};