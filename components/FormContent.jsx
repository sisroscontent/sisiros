'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormContent() {
  const [activeTab, setActiveTab] = useState('makeup');

  // ── Makeup booking form ──────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitBooking = async (data) => {
    try {
      await fetch(
       '/api/booking',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: data.fullName,
            phoneNumber: data.phone,
            email: data.email,
            eventType: data.eventType,
            eventDate: data.eventDate,
            location: data.location,
            message: data.message,
          }),
        }
      );
      alert('Booking Submitted Successfully!');
      reset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  // ── Academy enquiry form ─────────────────────────────────────────────────
  const {
    register: academyRegister,
    handleSubmit: academyHandleSubmit,
    reset: academyReset,
    formState: { errors: academyErrors },
  } = useForm();

  const submitAcademy = async (data) => {
    try {
      await fetch('/api/academy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.fullName,
          phoneNumber: data.phone,
          email: data.email,
          qualification: data.qualification,
          course: data.course,
          batch: data.batch,
          message: data.message,
        }),
      });
      alert('Enquiry Submitted Successfully!');
      academyReset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  // ── Shared input classes ─────────────────────────────────────────────────
  const inputCls =
    'w-full bg-[#242424] border border-[#444] text-[#E8E1D8] placeholder:text-[#E8E1D8] rounded-lg px-4 py-3 focus:border-[#B48A66]  focus:outline-none';

  return (
      <div className="max-w-5xl mx-auto mt-20">    <div className="max-w-5xl mx-auto mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center relative z-10">
            <div className="flex">
              <button
                onClick={() => setActiveTab("makeup")}
                className={`px-10 py-4 rounded-t-xl border transition-all duration-300
      ${
        activeTab === "makeup"
          ? "bg-[#B48A66] border-[#B48A66]  border-b-[#1A1A1A] text-white"
          : "bg-[#242424] border-[#B48A66]  text-[#E8E1D8] hover:text-[#B48A66]"
      }`}
              >
                Makeup Form
              </button>

              <button
                onClick={() => setActiveTab("course")}
                className={`ml-2 px-10 py-4 rounded-t-xl border transition-all duration-300
      ${
        activeTab === "course"
          ? "bg-[#B48A66]  border-[#B48A66]  border-b-[#1A1A1A] text-white"
          : "bg-[#20283B]  border-[#B48A66] text-white hover:text-[#B48A66]"
      }`}
              >
                Course Form
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="-mt-[1px] bg-[#20283B] border border-[#B48A66] rounded-b-xl rounded-tr-xl p-8">
            {activeTab === "makeup" ? (
              <form
                onSubmit={handleSubmit(submitBooking)}
                className="grid md:grid-cols-2 gap-5"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", {
                      required: "Full Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only letters and spaces are allowed",
                      },
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone is required",

                      pattern: {
                        value: /^[6-9]\d{9}$/,

                        message: "Enter valid phone number",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value: /^\S+@\S+\.\S+$/,

                        message: "Invalid email",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <select
                    {...register("eventType", {
                      required: "Please select event",
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  >
                    <option value="">Select Event</option>

                    <option>Bridal Makeup</option>

                    <option>Reception Makeup</option>

                    <option>Party Makeup</option>
                  </select>

                  {errors.eventType && (
                    <p className="text-red-500 text-sm">
                      {errors.eventType.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="date"
                    {...register("eventDate", {
                      required: "Select event date",
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {errors.eventDate && (
                    <p className="text-red-500 text-sm">
                      {errors.eventDate.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    {...register("location", {
                      required: "Location is required",
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {errors.location && (
                    <p className="text-red-500 text-sm">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  {...register("message", {
                    maxLength: {
                      value: 500,
                      message: "Maximum 500 characters allowed",
                    },
                  })}
                  className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 md:col-span-2 focus:border-[#B48A66] focus:outline-none"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}

                <button className="bg-[#B48A66]  hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg md:col-span-2 transition">
                  Book Now
                </button>
              </form>
            ) : (
              <form
                onSubmit={academyHandleSubmit(submitAcademy)}
                className="grid md:grid-cols-2 gap-5"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...academyRegister("fullName", {
                      required: "Full Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only letters and spaces are allowed",
                      },
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {academyErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...academyRegister("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter valid phone number",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66] focus:outline-none"
                  />

                  {academyErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...academyRegister("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66]  focus:outline-none"
                  />

                  {academyErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Qualification"
                    {...academyRegister("qualification", {
                      required: "Qualification is required",
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66]  focus:outline-none"
                  />

                  {academyErrors.qualification && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.qualification.message}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    {...academyRegister("course", {
                      required: "Please select a course",
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white rounded-lg px-4 py-3 focus:border-[#B48A66]  focus:outline-none"
                  >
                    <option value="">Select Course</option>
                    <option>Basic Makeup</option>
                    <option>Advanced Makeup</option>
                    <option>Bridal Makeup Master Course</option>
                    <option>Self Makeup</option>
                  </select>

                  {academyErrors.course && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.course.message}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    {...academyRegister("batch", {
                      required: "Please select a batch",
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white rounded-lg px-4 py-3 focus:border-[#B48A66]  focus:outline-none"
                  >
                    <option value="">Preferred Batch</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Weekend</option>
                  </select>

                  {academyErrors.batch && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.batch.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <textarea
                    rows="4"
                    placeholder="Message"
                    {...academyRegister("message", {
                      maxLength: {
                        value: 500,
                        message: "Maximum 500 characters allowed",
                      },
                    })}
                    className="w-full bg-[#242424] border border-[#444] text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:border-[#B48A66]  focus:outline-none"
                  />

                  {academyErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {academyErrors.message.message}
                    </p>
                  )}
                </div>

                <button className="bg-[#B48A66]  hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg md:col-span-2 transition">
                  Enroll Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
 
  );
}
