const WHATSAPP_PHONE = "5492364204976";
const WHATSAPP_MESSAGE = "Hola! Quiero hacer un pedido";

const pizzas = [
  {
    nombre: "Muzzarella",
    descripcion:
      "Masa de larga fermentación con nuestra salsa casera, muzzarella y un toque de orégano.",
    precioLista: 14900,
    precioPromo: null,
    tamanio: "Grande · 8 porciones",
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(value);

export default function Home() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#2a1a14]">
      <header className="bg-gradient-to-b from-[#f6c85f] via-[#fbe3a4] to-transparent py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <div className="rounded-full bg-white/80 p-4 shadow-lg">
            <img
              src="/SirOttosinfondo.png"
              alt="Sir Otto Pizzas para Hornear"
              className="h-28 w-28 object-contain"
            />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-[#6b2d1d] sm:text-5xl">
            Menú de Pizzas | Sir Otto
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[#4b2a20] sm:text-lg">
            Nuestra selección artesanal para hornear en casa. Hoy: una sola
            protagonista, hecha con la receta tradicional de la casa.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="space-y-6">
          {pizzas.map((pizza) => {
            const hasPromo =
              typeof pizza.precioPromo === "number" && pizza.precioPromo > 0;

            return (
              <article
                key={pizza.nombre}
                className="flex flex-col gap-6 rounded-2xl border border-[#f2d28c] bg-white p-6 shadow-lg"
              >
                <div className="flex flex-1 flex-col gap-3">
                  <div>
                    <h2 className="text-2xl font-bold text-[#6b2d1d]">
                      Pizza {pizza.nombre}
                    </h2>
                    <p className="mt-1 text-sm text-[#4b2a20]">
                      {pizza.descripcion}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b2d1d]">
                    <span className="rounded-full bg-[#fbe3a4] px-3 py-1">
                      {pizza.tamanio}
                    </span>
                    <span className="rounded-full bg-[#fbe3a4] px-3 py-1">
                      Lista para horno
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[#2a1a14]">
                    {hasPromo ? (
                      <>
                        <span className="text-2xl font-bold">
                          {formatCurrency(pizza.precioPromo)}
                        </span>
                        <span className="text-sm text-[#7b5a4a] line-through">
                          {formatCurrency(pizza.precioLista)}
                        </span>
                        <span className="rounded-full bg-[#6b2d1d] px-3 py-1 text-xs font-semibold uppercase text-white">
                          Promo especial
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold">
                        {formatCurrency(pizza.precioLista)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <footer className="w-full bg-[#fbe3a4] py-8 text-center text-sm text-[#4b2a20]">
        ¡Gracias por visitarnos! Prepará tu horno y disfrutá Sir Otto.
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.11 17.2c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.62.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.16-.43-2.22-1.36-.82-.74-1.37-1.65-1.53-1.92-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.68 1.12 2.87c.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.22-.62.22-1.15.16-1.27-.06-.11-.24-.18-.5-.32zm-3.06 10.46h-.01c-2.16 0-4.27-.58-6.1-1.67l-.44-.26-4.52 1.19 1.21-4.41-.29-.45a12.7 12.7 0 0 1-1.97-6.75c0-7.02 5.73-12.73 12.77-12.73 3.4 0 6.6 1.32 9.01 3.72a12.7 12.7 0 0 1 3.75 9.02c0 7.03-5.73 12.74-12.41 12.34zm7.56-19.9a10.7 10.7 0 0 0-7.55-3.12c-5.86 0-10.62 4.75-10.62 10.6 0 2.05.6 4.04 1.73 5.76l.4.63-.72 2.6 2.67-.7.62.37a10.6 10.6 0 0 0 5.46 1.5h.01c5.86 0 10.62-4.75 10.62-10.6 0-2.83-1.1-5.5-3.1-7.5z" />
        </svg>
      </a>
    </div>
  );
}
