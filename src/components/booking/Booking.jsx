import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlineSparkles, HiOutlineHome, HiOutlineOfficeBuilding, HiCheckCircle } from 'react-icons/hi';

const Booking = ({ isOpen, onClose}) => {
    // console.log(isOpen);
    const [step, setStep] = useState(1);
    const [serviceType, setServiceType] = useState(null);

    const nextStep = (type) => {
        setServiceType(type);
        setStep(2);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={()=>onClose(!isOpen)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={()=>onClose(!isOpen)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-pink-50 hover:text-pink-500 transition-colors z-10"
                        >
                            <HiX size={20} />
                        </button>

                        <div className="p-8 md:p-12">
                            {step === 1 ? (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                                        <HiOutlineSparkles /> First Step to Freedom
                                    </div>
                                    <h3 className="text-3xl font-serif font-medium text-slate-900 mb-2">Where shall we meet?</h3>
                                    <p className="text-slate-500 mb-10">Select your preferred treatment setting.</p>

                                    <div className="grid gap-4">
                                        <button
                                            onClick={() => nextStep('Home')}
                                            className="group flex items-center gap-6 p-6 rounded-[2rem] border-2 border-slate-50 hover:border-teal-500 hover:bg-teal-50/30 transition-all text-left"
                                        >
                                            <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                                <HiOutlineHome />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-800">In-Home Visit</h4>
                                                <p className="text-sm text-slate-500 text-balance">We come to your NYC home for total privacy.</p>
                                            </div>
                                        </button>

                                        <button
                                            onClick={() => nextStep('Clinic')}
                                            className="group flex items-center gap-6 p-6 rounded-[2rem] border-2 border-slate-50 hover:border-pink-500 hover:bg-pink-50/30 transition-all text-left"
                                        >
                                            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                                <HiOutlineOfficeBuilding />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-800">Visit Our Clinic</h4>
                                                <p className="text-sm text-slate-500 text-balance">Our professional kid-friendly NYC location.</p>
                                            </div>
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Almost there!</h3>
                                    <p className="text-slate-500 mb-8 font-medium">Your <span className="text-teal-600 font-bold">{serviceType}</span> specialist is ready.</p>

                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none" />
                                            <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none" />
                                        </div>
                                        <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none" />
                                        <textarea rows="3" placeholder="Any details? (Ages of children, etc.)" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none resize-none" />

                                        <button className="w-full py-5 bg-teal-600 text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-teal-100 hover:bg-teal-700 transition-all">
                                            Confirm Appointment
                                        </button>
                                    </form>

                                    <p className="mt-6 text-center text-xs text-slate-400">
                                        <HiCheckCircle className="inline mr-1 text-teal-500" />
                                        Secure & Private: We'll call you within 15 minutes.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Booking;