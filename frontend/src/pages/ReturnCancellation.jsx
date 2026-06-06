export default function ReturnCancellation() {
  return (
    <div className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Policy</p>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Return & Cancellation Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: June 2026</p>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">1. Return Eligibility</h2>
            <p>Products can be returned within <span className="font-semibold">7 days</span> of delivery. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition you received it. Proof of purchase is required.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">2. Non-Returnable Items</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Products with broken seals or missing accessories</li>
              <li>Items damaged due to misuse or accidents</li>
              <li>Software or digital products once activated</li>
              <li>Products purchased during clearance sales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">3. Return Process</h2>
            <p>To initiate a return, contact our support team at <a href="mailto:support@technova.com" className="text-primary hover:underline">support@technova.com</a> with your order ID and reason for return. Our team will respond within 24–48 hours with return instructions.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">4. Refunds</h2>
            <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within <span className="font-semibold">5–7 business days</span> to your original payment method.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">5. Order Cancellation</h2>
            <p>You may cancel your order within <span className="font-semibold">24 hours</span> of placing it, provided it has not been shipped. To cancel, contact us immediately at <span className="font-medium">(+91) 3456789563</span> or email us. Once shipped, the order cannot be cancelled — you may initiate a return after delivery.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">6. Damaged or Defective Products</h2>
            <p>If you receive a damaged or defective product, contact us within <span className="font-semibold">48 hours</span> of delivery with photos of the damage. We will arrange a replacement or full refund at no extra cost to you.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">7. Shipping Costs for Returns</h2>
            <p>Return shipping costs are the responsibility of the customer unless the product is defective or incorrectly shipped by TechNova. We recommend using a trackable shipping method for returns.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
