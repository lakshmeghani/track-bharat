import React, { useState, useEffect } from 'react';
import { Bus, MapPin, Clock, Users, Smartphone, Brain, Trophy, Zap, Navigation, Shield, Star, Target, Map, Route, Activity, Github } from 'lucide-react';

export default function TrackBharatHomepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamLead = {
    name: "Soham Gandhewar",
    role: "Team Lead & Project Manager",
    initials: "SG",
    specialty: "All Rounder."
  };

  const teamMembers = [
    { name: "Laksh Meghani", initials: "LM", role: "Backend Developer", specialty: "" },
    { name: "Shreyas Chopade", initials: "SC", role: "Research", specialty: "" },
    { name: "Urvish Dudhawade", initials: "UD", role: "Research", specialty: "" },
    { name: "Atharva Salunkhe", initials: "AS", role: "Research", specialty: "" },
    { name: "Harshita Yadav", initials: "HY", role: "UI/UX designer", specialty: "" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 relative">
      {/* Decorative Background Elements & Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top section mini doodles */}
        <div className="absolute top-10 left-20">
          <Bus className="w-8 h-8 text-purple-300 opacity-40 transform rotate-12" />
        </div>
        <div className="absolute top-16 right-32">
          <MapPin className="w-6 h-6 text-blue-300 opacity-50" />
        </div>
        <div className="absolute top-32 left-1/4">
          <Route className="w-10 h-10 text-purple-200 opacity-30 transform -rotate-45" />
        </div>
        <div className="absolute top-24 right-1/4">
          <Navigation className="w-7 h-7 text-blue-300 opacity-40 transform rotate-45" />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-25 blur-lg animate-pulse delay-2000"></div>
        
        {/* Abstract patterns */}
        <svg className="absolute top-10 right-10 w-20 h-20 text-purple-200 opacity-30" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="40" cy="30" r="2" fill="currentColor" />
          <circle cx="60" cy="15" r="4" fill="currentColor" />
          <circle cx="80" cy="25" r="2" fill="currentColor" />
          <path d="M20,20 Q40,10 60,15 T80,25" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        
        <svg className="absolute bottom-40 left-20 w-16 h-16 text-blue-200 opacity-40" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
      </div>

      {/* SIH 2025 Badge */}
      <div className="absolute top-6 right-6 z-50">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 animate-bounce">
          <Trophy className="w-5 h-5 text-yellow-300" />
          <span className="font-bold text-sm">Smart India Hackathon 2025</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section with Logo */}
        <div className="pt-20 pb-8 px-8">
          <div className="text-center space-y-4">
            {/* Logo and Brand */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Map className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Track Bharat
                </h1>
                <p className="text-purple-500 font-semibold text-lg">Smart Transit Solutions for Bharat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="px-8 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-purple-600 font-semibold">
                  <Activity className="w-5 h-5" />
                  <span>Revolutionizing Indian Public Transport</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Smart <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Transit</span>
                  <br />
                  Solutions for <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Bharat</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  AI-powered public transportation system designed for Indian cities. Real-time tracking, intelligent routing, and seamless passenger experience across buses, trains, and metros.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/lakshmeghani/track-bharat" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg inline-flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>Explore Code Base</span>
                </a>
              </div>

              {/* Key Features Icons */}
              <div className="flex space-x-6 pt-4">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <span className="text-purple-700 font-medium text-sm">AI Powered</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-700 font-medium text-sm">Real-time</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-purple-700 font-medium text-sm">Secure</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Mock App Interface */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 bg-purple-50 p-3 rounded-lg">
                        <Bus className="w-6 h-6 text-purple-500" />
                        <div>
                          <p className="font-semibold text-purple-800">Bus 45A</p>
                          <p className="text-sm text-purple-600">Arriving in 3 mins</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-500" />
                        <div>
                          <p className="font-semibold text-blue-800">Nearest Station</p>
                          <p className="text-sm text-blue-600">200m away</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <Route className="w-6 h-6 text-green-500" />
                        <div>
                          <p className="font-semibold text-green-800">Optimal Route</p>
                          <p className="text-sm text-green-600">25 min journey</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                      <div className="text-2xl font-bold text-purple-600">40%</div>
                      <div className="text-sm text-gray-600">Reduced Wait Time</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">Better Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around the main card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Our Team
                </h2>
              </div>
              <p className="text-gray-600 text-lg">Meet the brilliant minds behind Track Bharat</p>
            </div>

            {/* Team Lead Card */}
            <div className="mb-12 flex justify-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{teamLead.initials}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{teamLead.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{teamLead.role}</p>
                  <p className="text-gray-600 text-sm">{teamLead.specialty}</p>
                  <div className="flex justify-center mt-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{member.initials}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                    <p className="text-purple-600 font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-700 font-semibold">Symbiosis Skills and Professional University</p>
                <p className="text-gray-500 text-sm">Pune, Maharashtra</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-semibold">Smart India Hackathon 2025</span>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-700 font-semibold">Track Bharat</p>
                <p className="text-gray-500 text-sm">Smart Transit Solutions</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm">
                2025 Track Bharat. Built with ❤️ for Smart India Hackathon 2025
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
