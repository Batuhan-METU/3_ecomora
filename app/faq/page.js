export default function FaqPage() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <hr />
      <h4>!-- Orders & Products --</h4>
      <details>
        <summary>
          <strong>Q: How long does it take for my order to be shipped?</strong>
        </summary>
        <p>
          A: Orders are typically shipped within 1-3 business days after
          confirmation. You will receive an email notification once your order
          has been handed to the courier.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: What happens if a product is out of stock?</strong>
        </summary>
        <p>
          A: If a product is out of stock you can click the “Notify Me” button
          and leave your email address. We will notify you by email when the
          item is back in stock.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: Are your products authentic?</strong>
        </summary>
        <p>
          A: Yes. All products sold on our site are 100% authentic and sourced
          from official suppliers.
        </p>
      </details>

      <h4>!-- Payment & Security --</h4>
      <details>
        <summary>
          <strong>Q: Which payment methods do you accept?</strong>
        </summary>
        <p>
          A: We accept major credit and debit cards and support secure online
          payments via payment providers such as Stripe.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: My payment failed — what should I do?</strong>
        </summary>
        <p>
          A: First, please check that your card details are entered correctly
          and that your bank has not blocked the transaction. If the problem
          continues, contact your bank or reach out to our customer support for
          assistance.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: Are my payments secure?</strong>
        </summary>
        <p>
          A: Yes. All payments are processed over HTTPS and handled by trusted
          payment gateways -for example Stripe-, ensuring that your card details
          are encrypted and never stored on our servers.
        </p>
      </details>

      <h4>!-- Shipping & Delivery --</h4>
      <details>
        <summary>
          <strong>Q: Is shipping free?</strong>
        </summary>
        <p>
          A: We offer free shipping on orders over $100. For orders below that
          amount a flat shipping fee applies. Exact rates are calculated at
          checkout.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: How can I track my order?</strong>
        </summary>
        <p>
          A: You will receive a tracking number by email once your order has
          shipped. Use that tracking number on the carrier's website to follow
          your delivery.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: My package arrived damaged — what should I do?</strong>
        </summary>
        <p>
          A: If the package is damaged, please refuse delivery or note the
          damage on the delivery receipt and contact our support immediately. We
          will arrange a replacement or refund as soon as possible.
        </p>
      </details>

      <h4>!-- Returns & Exchanges --</h4>
      <details>
        <summary>
          <strong>Q: How do I return a product?</strong>
        </summary>
        <p>
          A: You can request a return within 14 days of receiving your order.
          The item must be unused and in its original packaging. Start a return
          through your account or contact customer support for a return
          authorization.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: Can I exchange an item?</strong>
        </summary>
        <p>
          A: Yes — exchanges are possible. Please follow the return process and
          indicate that you want an exchange, or contact our support team to
          arrange the exchange directly.
        </p>
      </details>

      <h4>!-- Account & General --</h4>
      <details>
        <summary>
          <strong>Q: Can I shop without creating an account?</strong>
        </summary>
        <p>
          A: Yes. You can checkout as a guest. Creating an account makes it
          easier to track orders and view order history but is not required to
          make a purchase.
        </p>
      </details>

      <details>
        <summary>
          <strong>Q: I forgot my password — how can I reset it?</strong>
        </summary>
        <p>
          A: Click “Forgot Password” on the sign-in page, enter your email
          address, and we will send a password reset link. Follow the
          instructions in the email to set a new password.
        </p>
      </details>
    </section>
  );
}
