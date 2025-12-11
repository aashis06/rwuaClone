'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Calendar, MapPin, Phone, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RegistrationPage() {
  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-green-600 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              दर्ता न. ८/५०/५१
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rural Water Users Association (RWUA) को आधिकारिक दर्ता विवरण
          </p>
        </div>

        {/* Registration Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">संस्था दर्ता प्रमाणपत्र</h2>
                <p className="text-green-100">नेपाल सरकार, गृह मन्त्रालय</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      संस्थाको विवरण
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">संस्थाको नाम:</span>
                        <p className="text-gray-900">Rural Water Users Association (RWUA)</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">नेपाली नाम:</span>
                        <p className="text-gray-900">ग्रामीण पानी उपभोक्ता संघ</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">दर्ता नम्बर:</span>
                        <p className="text-gray-900 text-xl font-bold text-green-600">८/५०/५१</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">संस्थाको प्रकार:</span>
                        <p className="text-gray-900">गैर-सरकारी संस्था (NGO)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      दर्ता मिति
                    </h3>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-600">२०५१ साल</p>
                      <p className="text-gray-600">अंग्रेजी: 1994 AD</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                      कार्यालयको ठेगाना
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-900">बानेश्वर, काठमाडौं</p>
                      <p className="text-gray-900">नेपाल - ४४६००</p>
                      <p className="text-gray-600">बागमती प्रदेश</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">सम्पर्क विवरण</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-orange-600" />
                        <span>+९७७-१-४१२३४५६</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-orange-600" />
                        <span>info@rwua.com.np</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">मुख्य उद्देश्यहरू</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ग्रामीण क्षेत्रमा सफा पिउने पानीको पहुँच सुनिश्चित गर्ने</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>सरसफाइ र स्वच्छता कार्यक्रम सञ्चालन गर्ने</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>समुदायिक विकास कार्यक्रम सञ्चालन गर्ने</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>पानी उपभोक्ता समितिहरूलाई सहयोग गर्ने</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>प्राविधिक सहायता र तालिम प्रदान गर्ने</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>दिगो विकासमा योगदान पुर्याउने</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Legal Status */}
              <div className="mt-8 bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">कानुनी स्थिति</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">३० वर्ष</div>
                    <div className="text-sm text-gray-600">सेवाको अनुभव</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">वैध</div>
                    <div className="text-sm text-gray-600">दर्ता स्थिति</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">सक्रिय</div>
                    <div className="text-sm text-gray-600">संचालन स्थिति</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                  <Download className="w-4 h-4 mr-2" />
                  दर्ता प्रमाणपत्र डाउनलोड गर्नुहोस्
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3">
                  <FileText className="w-4 h-4 mr-2" />
                  विस्तृत जानकारी
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">महत्वपूर्ण जानकारी</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Rural Water Users Association (RWUA) नेपालमा ग्रामीण पानी आपूर्ति र सरसफाइ क्षेत्रमा काम गर्ने एक प्रतिष्ठित गैर-सरकारी संस्था हो। 
                यो संस्था २०५१ सालमा नेपाल सरकारको गृह मन्त्रालयमा दर्ता भएको छ।
              </p>
              <p className="mb-4">
                हाम्रो मुख्य लक्ष्य नेपालका ग्रामीण समुदायहरूमा सफा पिउने पानीको पहुँच सुनिश्चित गर्नु र स्वच्छता तथा सरसफाइको स्थिति सुधार गर्नु हो। 
                यसका लागि हामी स्थानीय समुदाय, सरकारी निकाय र अन्तर्राष्ट्रिय साझेदारहरूसँग मिलेर काम गर्छौं।
              </p>
              <p>
                हामी पारदर्शिता, जवाफदेहिता र दिगो विकासका सिद्धान्तहरूमा आधारित भएर काम गर्छौं। 
                हाम्रा सबै गतिविधिहरू नेपालको कानुन र नियमहरू अनुसार सञ्चालन हुन्छन्।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}