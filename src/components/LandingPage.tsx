import React, { useState } from 'react';
import { Zap, Sparkles, Star, MessageSquare } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    system: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    system: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', system: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
      isValid = false;
    }

    if (!formData.system) {
      newErrors.system = 'Please select a system';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setShowConfirmation(true);
      setFormData({ name: '', email: '', phone: '', system: '' });
      setTimeout(() => {
        setShowConfirmation(false);
        setShowForm(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-5xl font-bold mb-8 text-center">Lead Wealth A.I.</h1>
      <h2 className="text-3xl mb-6 text-center">Revolutionize Your Marketing</h2>
      
      <div className="flex justify-center items-center mb-8">
        <Zap className="text-yellow-400 mr-4 animate-float" size={48} />
        <Sparkles className="text-yellow-400 mr-4 animate-float" size={48} />
        <Star className="text-yellow-400 animate-float" size={48} />
      </div>
      
      <p className="text-xl mb-8 text-center max-w-2xl">
        Unlock the power of AI to revolutionize your financial services business. Generate high-quality leads, automate your marketing, and skyrocket your success.
      </p>
      
      <button
        onClick={() => setShowForm(true)}
        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center animate-pulse shadow-lg shadow-yellow-300/50 hover:shadow-yellow-300/80"
      >
        <MessageSquare className="mr-2" /> Contact Now
      </button>
      
      <p className="mt-4 text-yellow-300">Lead Wealth A.I. (844) 819-6200</p>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Lead Wealth A.I.</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-2 rounded text-black"
                  required
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-2 rounded text-black"
                  required
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  className="w-full p-2 rounded text-black"
                  required
                />
                {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <select
                  name="system"
                  value={formData.system}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded text-black"
                  required
                >
                  <option value="">Select a System</option>
                  <option value="Radio Show Marketing System">Radio Show Marketing System</option>
                  <option value="Tax Preparation Marketing System">Tax Preparation Marketing System</option>
                  <option value="Automate Social Media with A.I.">Automate Social Media with A.I.</option>
                  <option value="Grow with an A.I. Personal Agent">Grow with an A.I. Personal Agent</option>
                </select>
                {errors.system && <p className="text-red-300 text-sm mt-1">{errors.system}</p>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-900 px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-green-500 p-8 rounded-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your message has been sent successfully. We'll be in touch soon!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;