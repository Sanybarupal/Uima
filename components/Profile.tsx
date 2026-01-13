
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="p-5 pb-24 animate-in slide-in-from-bottom duration-500">
      <header className="mb-8 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
          <img src="https://picsum.photos/seed/avatar/200" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Alex Johnson</h1>
        <p className="text-gray-500">Gold Member since 2023</p>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-4 flex items-center justify-between border-b border-gray-50">
          <div className="flex items-center">
            <span className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <span className="font-medium">Personal Information</span>
          </div>
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div className="p-4 flex items-center justify-between border-b border-gray-50">
          <div className="flex items-center">
            <span className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </span>
            <span className="font-medium">Notifications</span>
          </div>
          <div className="w-10 h-5 bg-green-500 rounded-full relative p-1 cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-10 h-10 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="font-medium">Settings</span>
          </div>
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <button className="w-full py-4 bg-gray-100 text-red-500 font-bold rounded-2xl hover:bg-red-50 transition-colors">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
