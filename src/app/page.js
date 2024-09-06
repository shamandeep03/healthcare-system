export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Healthcare System</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-500 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Healthcare System</h2>
          <p className="text-lg text-gray-600 mb-8">
            Manage patient records, appointments, and prescriptions securely and efficiently.
          </p>
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-500 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Secure Patient Records</h3>
              <p>Store and manage patient data with full security and compliance with HIPAA regulations.</p>
            </div>
            <div className="p-6 bg-gray-500 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Appointment Management</h3>
              <p>Schedule and track appointments with ease using our intuitive interface.</p>
            </div>
            <div className="p-6 bg-gray-500 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prescription Management</h3>
              <p>Manage prescriptions efficiently with accurate patient medication histories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>Our team is available 24/7 to assist you with any issues or questions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Encryption</h3>
              <p>We ensure all your data is encrypted to provide the highest level of security.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Role-Based Access Control</h3>
              <p>Control access to sensitive information based on user roles within the system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-lg mb-8">Sign up today and experience the future of healthcare management.</p>
          <a
            href="/register"
            className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-200"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Healthcare System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
