import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Replace with your form submission logic
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-emerald-500" size={24} />,
      title: "Email Me",
      value: "contact@abhishek.dev",
      action: "mailto:contact@abhishek.dev"
    },
    {
      icon: <FaTelegram className="text-emerald-500" size={24} />,
      title: "Telegram",
      value: "@abhishek_ranjan",
      action: "https://t.me/abhishek_ranjan"
    },
    {
      icon: <FiMapPin className="text-emerald-500" size={24} />,
      title: "Location",
      value: "Bangalore, India",
      action: "https://maps.google.com/?q=Bangalore"
    }
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin size={20} />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com/yourhandle" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {method.title}
                      </h4>
                      <a
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors"
                      aria-label={`Social link ${index}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full">
              {submitSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Send Me a Message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 dark:border-gray-600 focus:ring-emerald-500"
                          } focus:outline-none focus:ring-2 bg-white dark:bg-gray-700`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 dark:border-gray-600 focus:ring-emerald-500"
                          } focus:outline-none focus:ring-2 bg-white dark:bg-gray-700`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.message
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 dark:border-gray-600 focus:ring-emerald-500"
                          } focus:outline-none focus:ring-2 bg-white dark:bg-gray-700`}
                          placeholder="Hi Abhishek, I'd like to talk about..."
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;