"use client";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "916361082605";
  const message = encodeURIComponent("Hello! I would like to know more about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 animate-bounce-slow group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
      <i className="fa-brands fa-whatsapp text-3xl text-white relative z-10"></i>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Chat with us
      </span>
    </a>
  );
}
