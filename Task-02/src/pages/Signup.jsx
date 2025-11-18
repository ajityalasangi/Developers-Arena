import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate('/login');
    }
    return (
        <div className="min-h-screen bg-linear-to-br from-green-200 via-green-300 to-green-400 flex">
            {/* Left section - 3D Illustration */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
                <div className="relative">
                    {/* Clock */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-gray-400 rounded-full relative">
                            <div className="absolute w-0.5 h-3 bg-gray-600 top-1 left-1/2 transform -translate-x-1/2 origin-bottom rotate-12"></div>
                            <div className="absolute w-0.5 h-2 bg-gray-600 top-2 left-1/2 transform -translate-x-1/2 origin-bottom rotate-45"></div>
                        </div>
                    </div>

                    {/* Plant */}
                    <div className="absolute -top-4 -right-12 w-8 h-12 bg-green-600 rounded-t-full"></div>
                    
                    {/* Main character and desk */}
                    <div className="relative">
                        {/* Desk */}
                        <div className="w-80 h-32 bg-gray-800 rounded-lg shadow-xl relative">
                            <div className="absolute inset-x-4 top-4 h-4 bg-gray-700 rounded"></div>
                            
                            {/* Laptop */}
                            <div className="absolute top-6 left-8 w-24 h-16 bg-gray-600 rounded-sm transform -rotate-12">
                                <div className="w-full h-10 bg-gray-300 rounded-t-sm"></div>
                                <div className="h-6 bg-gray-700 rounded-b-sm"></div>
                            </div>
                            
                            {/* Coffee cup */}
                            <div className="absolute top-8 right-8 w-8 h-8 bg-blue-600 rounded-full shadow-md"></div>
                        </div>
                        
                        {/* Desk legs */}
                        <div className="absolute -bottom-8 left-8 w-4 h-8 bg-gray-400 rounded-b-lg"></div>
                        <div className="absolute -bottom-8 right-8 w-4 h-8 bg-gray-400 rounded-b-lg"></div>
                        
                        {/* Character */}
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                            {/* Head */}
                            <div className="w-12 h-12 bg-orange-200 rounded-full relative mx-auto">
                                {/* Hair */}
                                <div className="absolute -top-2 -left-1 w-14 h-8 bg-amber-800 rounded-t-full"></div>
                                {/* Beard */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-amber-800 rounded-b-full"></div>
                                {/* Eyes */}
                                <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full"></div>
                                <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full"></div>
                            </div>
                            
                            {/* Body */}
                            <div className="w-16 h-20 bg-green-500 rounded-lg mx-auto relative">
                                {/* Arms */}
                                <div className="absolute top-2 -left-3 w-6 h-3 bg-orange-200 rounded-full rotate-45"></div>
                                <div className="absolute top-2 -right-3 w-6 h-3 bg-orange-200 rounded-full -rotate-45"></div>
                            </div>
                            
                            {/* Legs */}
                            <div className="flex justify-center gap-2">
                                <div className="w-3 h-16 bg-blue-600 rounded-b-lg"></div>
                                <div className="w-3 h-16 bg-blue-600 rounded-b-lg"></div>
                            </div>
                            
                            {/* Shoes */}
                            <div className="flex justify-center gap-2 -mt-2">
                                <div className="w-6 h-4 bg-purple-600 rounded-full"></div>
                                <div className="w-6 h-4 bg-purple-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Floor plant */}
                    <div className="absolute -bottom-12 right-8">
                        <div className="w-12 h-16 bg-white rounded-lg shadow-lg relative">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                <div className="w-6 h-12 bg-green-700 rounded-t-full"></div>
                                <div className="w-8 h-8 bg-green-600 rounded-full absolute -top-2 -left-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right section - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Create<br />account
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                        </div>
                        {/* username */}
                        <div>
                            <input type="text" 
                                placeholder='Username'
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                        >
                            Create account
                        </button>
                    </form>

                    {/* Or divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">or sign up with</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition duration-200">
                            G
                        </button>
                        <button className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition duration-200">
                            f
                        </button>
                        <button className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition duration-200">
                            G
                        </button>
                    </div>

                    {/* Terms */}
                    <p className="text-xs text-gray-500 text-center mb-6">
                        By creating an account you agree to Messimo's{' '}
                        <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and{' '}
                        <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                    </p>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-green-500 hover:underline font-semibold">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;