export default function Home() {
  return (
    <div className="bg-orange-200 pt-10">
      <header className="text-center my-6">
        {/* <img
          src='sirottomenu/public/SirOttosinfondo.png'
          alt="Logo de la empresa"
          className="mx-auto mb-4 w-32 h-32 object-contain"
        /> */}
        <h1 className="text-4xl font-extrabold text-red-600 py-5">
          Menú de Pizzas | Sir Otto
        </h1>
      </header>

      <main className="container mx-auto px-4 py-4">
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4 flex items-center shadow-md">
          <img
            src="https://source.unsplash.com/80x80/?pizza,pepperoni"
            alt="Pizza de Pepperoni"
            className="w-20 h-20 rounded-lg mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-red-600">
              Pizza de Pepperoni
            </h3>
            <p className="text-sm text-black">
              La clásica pizza con pepperoni, queso derretido y base crujiente.
            </p>
            <p className="text-sm font-semibold text-black">Precio: $10.99</p>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4 flex items-center shadow-md">
          <img
            src="https://source.unsplash.com/80x80/?pizza,pepperoni"
            alt="Pizza de Pepperoni"
            className="w-20 h-20 rounded-lg mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-red-600">
              Pizza de Pepperoni 2
            </h3>
            <p className="text-sm text-black">
              La clásica pizza con pepperoni, queso derretido y base crujiente.
            </p>
            <p className="text-sm font-semibold text-black">Precio: $10.99</p>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4 flex items-center shadow-md">
          <img
            src="https://source.unsplash.com/80x80/?pizza,pepperoni"
            alt="Pizza de Pepperoni"
            className="w-20 h-20 rounded-lg mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-red-600">
              Pizza de Pepperoni 3
            </h3>
            <p className="text-sm text-black">
              La clásica pizza con pepperoni, queso derretido y base crujiente.
            </p>
            <p className="text-sm font-semibold text-black">Precio: $10.99</p>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4 flex items-center shadow-md">
          <img
            src="https://source.unsplash.com/80x80/?pizza,pepperoni"
            alt="Pizza de Pepperoni"
            className="w-20 h-20 rounded-lg mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-red-600">
              Pizza de Pepperoni 4
            </h3>
            <p className="text-sm text-black">
              La clásica pizza con pepperoni, queso derretido y base crujiente.
            </p>
            <p className="text-sm font-semibold text-black">Precio: $10.99</p>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4 flex items-center shadow-md">
          <img
            src="https://source.unsplash.com/80x80/?pizza,pepperoni"
            alt="Pizza de Pepperoni"
            className="w-20 h-20 rounded-lg mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-red-600">
              Pizza de Pepperoni 5
            </h3>
            <p className="text-sm text-black">
              La clásica pizza con pepperoni, queso derretido y base crujiente.
            </p>
            <p className="text-sm font-semibold text-black">Precio: $10.99</p>
          </div>
        </div>
      </main>

      <footer className="bg-yellow-100 text-center text-black py-4 mt-6">
        ¡Gracias por visitarnos!
      </footer>
    </div>
  );
}
