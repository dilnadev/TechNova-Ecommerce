export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Terms & Conditions</h1>
          <p className="text-gray-500 text-sm">Last updated: June 2026</p>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using TechNova's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">2. Use of the Website</h2>
            <p>You agree to use this website only for lawful purposes. You must not misuse our platform by introducing viruses or any other harmful material. You must not attempt to gain unauthorized access to any part of the website.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">3. Product Information</h2>
            <p>We strive to ensure all product descriptions, images, and prices are accurate. However, TechNova reserves the right to correct any errors and to change or update information at any time without prior notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">4. Orders & Payment</h2>
            <p>All orders are subject to availability. We reserve the right to refuse or cancel any order at our discretion. Payment must be completed before an order is processed and shipped.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">5. Intellectual Property</h2>
            <p>All content on this website including text, images, logos, and design is the property of TechNova and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">6. Limitation of Liability</h2>
            <p>TechNova shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or purchase of products. Our liability is limited to the amount paid for the product in question.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">7. Changes to Terms</h2>
            <p>TechNova reserves the right to modify these terms at any time. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">8. Contact</h2>
            <p>For any questions regarding these terms, please contact us at <a href="mailto:support@technova.com" className="text-primary hover:underline">support@technova.com</a> or call <span className="font-medium">(+91) 3456789563</span>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
